import {getURL, getLatestVersion} from '../src/get-latest-version';
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

describe('getURL()', () => {
  test('return expected URL', () => {
    const urlGithubExpected = `https://api.github.com/repos/${Tool.Org}/${Tool.Repo}/releases/latest`;
    const urlGithub: string = getURL(Tool.Org, Tool.Repo, 'github');
    expect(urlGithub).toMatch(urlGithubExpected);
  });
});

describe('getLatestVersion()', () => {
  test('return latest version via api.github.com', async () => {
    nock('https://api.github.com')
      .get(`/repos/${Tool.Org}/${Tool.Repo}/releases/latest`)
      .reply(200, jsonTestGithub);

    const versionLatest: string = await getLatestVersion(
      Tool.Org,
      Tool.Repo,
      'github'
    );
    expect(versionLatest).toMatch(Tool.TestVersionLatest);
  });

  test('return exception 404', async () => {
    nock('https://api.github.com')
      .get(`/repos/${Tool.Org}/${Tool.Repo}/releases/latest`)
      .reply(404);

    await expect(
      getLatestVersion(Tool.Org, Tool.Repo, 'github')
    ).rejects.toThrowError(FetchError);
  });
});
