import * as main from '../src/main';
import * as io from '@actions/io';
import path from 'path';
import nock from 'nock';
import {Tool, Action} from '../src/constants';
import {FetchError} from 'node-fetch';
import jsonTestGithub from './data/github.json';

jest.setTimeout(30000);

describe('Integration testing run()', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(async () => {
    const workDir = path.join(`${process.env.HOME}`, Action.WorkDirName);
    await io.rmRF(workDir);

    delete process.env['INPUT_PI_VERSION'];
    nock.cleanAll();
  });

  test('succeed in installing a custom version', async () => {
    const testVersion = Tool.TestVersionSpec;
    process.env['INPUT_PI_VERSION'] = testVersion;
    const result: main.ActionResult = await main.run();
    expect(result.exitcode).toBe(0);
    expect(result.output).toMatch(`pi version: ${testVersion}`);
  });

  test('succeed in installing the latest version', async () => {
    const testVersion = 'latest';
    process.env['INPUT_PI_VERSION'] = testVersion;
    nock('https://api.github.com')
      .get(`/repos/${Tool.Org}/${Tool.Repo}/releases/latest`)
      .reply(200, jsonTestGithub);
    const result: main.ActionResult = await main.run();
    expect(result.exitcode).toBe(0);
    expect(result.output).toMatch(`pi version: ${Tool.TestVersionLatest}`);
  });

  test('fail to install the latest version due to 404 of api.github.com', async () => {
    process.env['INPUT_PI_VERSION'] = 'latest';
    nock('https://api.github.com')
      .get(`/repos/${Tool.Org}/${Tool.Repo}/releases/latest`)
      .reply(404);

    await expect(main.run()).rejects.toThrowError(FetchError);
  });
});

describe('showVersion()', () => {
  let result: main.ActionResult = {
    exitcode: 0,
    output: ''
  };

  test('return version', async () => {
    result = await main.showVersion('git', ['--version']);
    expect(result.exitcode).toBe(0);
    expect(result.output).toMatch(/git version/);
  });

  test('return not found', async () => {
    await expect(
      main.showVersion('gitgit', ['--version'])
    ).rejects.toThrowError(Error);
  });
});
