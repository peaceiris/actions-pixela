import getOS from '../src/get-os';

describe('getOS', () => {
  test('test', () => {
    expect(getOS('linux')).toBe('linux');
    expect(getOS('darwin')).toBe('darwin');
    expect(getOS('win32')).toBe('windows');
  });

  test('test exception', () => {
    expect(() => {
      getOS('centos');
    }).toThrowError('centos is not supported');
  });
});
