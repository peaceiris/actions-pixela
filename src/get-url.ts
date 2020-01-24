import {Tool} from './constants';

export default function getURL(os: string, version: string): string {
  const ext = (os: string): string => {
    if (os === 'windows' || os === 'darwin') {
      return 'zip';
    } else {
      return 'tar.gz';
    }
  };

  const toolName = `pi_v${version}_${os}_amd64`;
  const baseURL = `https://github.com/${Tool.Org}/${Tool.Repo}/releases/download`;
  const url = `${baseURL}/v${version}/${toolName}.${ext(os)}`;

  return url;
}

// https://github.com/a-know/pi/releases/download/v1.1.0/pi_v1.1.0_linux_amd64.tar.gz
// https://github.com/a-know/pi/releases/download/v1.1.0/pi_v1.1.0_darwin_amd64.zip
// https://github.com/a-know/pi/releases/download/v1.1.0/pi_v1.1.0_windows_amd64.zip
