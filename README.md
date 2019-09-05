[![license](https://img.shields.io/github/license/peaceiris/actions-pixela.svg)](https://github.com/peaceiris/actions-pixela/blob/master/LICENSE)
[![release](https://img.shields.io/github/release/peaceiris/actions-pixela.svg)](https://github.com/peaceiris/actions-pixela/releases/latest)
[![GitHub release date](https://img.shields.io/github/release-date/peaceiris/actions-pixela.svg)](https://github.com/peaceiris/actions-pixela/releases)
[![GitHub Actions status](https://github.com/peaceiris/actions-pixela/workflows/Docker%20Image%20CI/badge.svg)](https://github.com/peaceiris/actions-pixela/actions)



## GitHub Actions for Pixela (a-know/pi)

- [Pixela | Record and Track your habits or effort. All by API.](https://pixe.la/)
- [a-know/pi: Official CLI tool for Pixela](https://github.com/a-know/pi)

<img width="400" alt="GitHub Actions for Pixela" src="./images/ogp.svg">



## Getting started

### (1) Add secret variables

1. Go to Settings > Secrets.
2. Add your `PIXELA_USER_TOKEN` as a new secret.

### (2) Create `.github/workflows/pixela.yml`

```yaml
name: pixela

on:
  push:
    branches:
    - master

jobs:

  increment:
    runs-on: ubuntu-18.04
    steps:
    - uses: actions/checkout@master

    - name: increment
      uses: peaceiris/actions-pixela@v1.1.0
      env:
        PIXELA_USER_TOKEN: ${{ secrets.PIXELA_USER_TOKEN }}
      with:
        args: pixel increment -u <username> -g <graph-id>
```



## Example

Push count of peaceiris's blog repository (private repository)

[![Push count of peaceiris's blog repository (private repository)](https://pixe.la/v1/users/peaceiris/graphs/reveltb-push)](https://pixe.la/v1/users/peaceiris/graphs/reveltb-push.html)



## License

[MIT License - peaceiris/actions-pixela]

[MIT License - peaceiris/actions-pixela]: https://github.com/peaceiris/actions-pixela/blob/master/LICENSE



## About the author

- [peaceiris's homepage](https://peaceiris.com/)
