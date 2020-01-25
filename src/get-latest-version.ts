import fetch from 'node-fetch';

export async function getLatestVersion(
  org: string,
  repo: string
): Promise<string> {
  const url = `https://api.github.com/repos/${org}/${repo}/releases/latest`;
  const response = await fetch(url);
  const json = await response.json();
  const latestVersion = json.tag_name.replace('v', '');
  return latestVersion;
}
