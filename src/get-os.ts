export default function getOS(platform: string): string {
  if (platform === 'linux') {
    return 'linux';
  } else if (platform === 'darwin') {
    return 'darwin';
  } else if (platform === 'win32') {
    return 'windows';
  } else {
    throw new Error(`${platform} is not supported`);
  }
}
