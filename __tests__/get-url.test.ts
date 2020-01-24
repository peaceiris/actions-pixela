import getURL from '../src/get-url';
import {Tool} from '../src/constants';

describe('getURL()', () => {
  test('test', () => {
    const testVersion = '1.1.0';
    const baseURL = `https://github.com/${Tool.Org}/${Tool.Repo}/releases/download/v${testVersion}`;
    const urlLinux = `${baseURL}/${Tool.CmdName}_v${testVersion}_linux_amd64.tar.gz`;
    const urlMacOS = `${baseURL}/${Tool.CmdName}_v${testVersion}_darwin_amd64.zip`;
    const urlWindows = `${baseURL}/${Tool.CmdName}_v${testVersion}_windows_amd64.zip`;
    expect(getURL('linux', '1.1.0')).toBe(urlLinux);
    expect(getURL('linux', '0.0.1')).not.toBe(urlLinux);
    expect(getURL('MyOS', '1.1.0')).not.toBe(urlLinux);
    expect(getURL('darwin', '1.1.0')).toBe(urlMacOS);
    expect(getURL('windows', '1.1.0')).toBe(urlWindows);
  });
});
