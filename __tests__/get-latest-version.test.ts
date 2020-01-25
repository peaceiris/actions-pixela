import {getLatestVersion} from '../src/get-latest-version';
import nock from 'nock';
import {FetchError} from 'node-fetch';
import {Tool} from '../src/constants';
import jsonTestGithub from './data/github.json';

beforeEach(() => {
  jest.resetModules();
});

afterEach(() => {
  nock.cleanAll();
});

describe('getLatestVersion()', () => {
  test('return latest version via api.github.com', async () => {
    nock('https://api.github.com')
      .get(`/repos/${Tool.Org}/${Tool.Repo}/releases/latest`)
      .reply(200, jsonTestGithub);

    const versionLatest: string = await getLatestVersion(Tool.Org, Tool.Repo);
    expect(versionLatest).toMatch(Tool.TestVersionLatest);
  });

  test('return exception 404', async () => {
    nock('https://api.github.com')
      .get(`/repos/${Tool.Org}/${Tool.Repo}/releases/latest`)
      .reply(404);

    await expect(getLatestVersion(Tool.Org, Tool.Repo)).rejects.toThrowError(
      FetchError
    );
  });
});
