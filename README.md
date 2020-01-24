[![license](https://img.shields.io/github/license/peaceiris/actions-pixela.svg)](https://github.com/peaceiris/actions-pixela/blob/master/LICENSE)
[![release](https://img.shields.io/github/release/peaceiris/actions-pixela.svg)](https://github.com/peaceiris/actions-pixela/releases/latest)
[![GitHub release date](https://img.shields.io/github/release-date/peaceiris/actions-pixela.svg)](https://github.com/peaceiris/actions-pixela/releases)
[![GitHub Actions status](https://github.com/peaceiris/actions-pixela/workflows/Test/badge.svg)](https://github.com/peaceiris/actions-pixela/actions)
[![codecov](https://codecov.io/gh/peaceiris/actions-pixela/branch/master/graph/badge.svg)](https://codecov.io/gh/peaceiris/actions-pixela)



## GitHub Actions for Pixela (a-know/pi)

- [Pixela | Record and Track your habits or effort. All by API.](https://pixe.la/)
- [a-know/pi: Official CLI tool for Pixela](https://github.com/a-know/pi)

<img width="400" alt="GitHub Actions for Pixela" src="./images/ogp.svg">



## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Getting started](#getting-started)
  - [(1) Add secret variables](#1-add-secret-variables)
  - [(2) Create `.github/workflows/pixela.yml`](#2-create-githubworkflowspixelayml)
- [Example Graphs](#example-graphs)
- [License](#license)
- [About Maintainer](#about-maintainer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

*TOC is generated with [DocToc](https://github.com/thlorenz/doctoc)*



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
      - uses: actions/checkout@v2

      - name: increment
        uses: peaceiris/actions-pixela@v1
        env:
          PIXELA_USER_TOKEN: ${{ secrets.PIXELA_USER_TOKEN }}
        with:
          args: pixel increment -u <username> -g <graph-id>
```



## Example Graphs

*CI Test on Linux Passed*

[![GitHub Actions for Pixela CI Linux](https://pixe.la/v1/users/peaceiris/graphs/gha-pi-ci-linux)](https://pixe.la/v1/users/peaceiris/graphs/gha-pi-ci-linux.html)

*CI Test on macOS Passed*

[![GitHub Actions for Pixela CI macOS](https://pixe.la/v1/users/peaceiris/graphs/gha-pi-ci-macos)](https://pixe.la/v1/users/peaceiris/graphs/gha-pi-ci-macos.html)

*CI Test on Windows Passed*

[![GitHub Actions for Pixela CI Windows](https://pixe.la/v1/users/peaceiris/graphs/gha-pi-ci-win)](https://pixe.la/v1/users/peaceiris/graphs/gha-pi-ci-win.html)

*Git Push Count*

peaceiris blog repository (private)

[![Push count of peaceiris's blog repository (private repository)](https://pixe.la/v1/users/peaceiris/graphs/reveltb-push)](https://pixe.la/v1/users/peaceiris/graphs/reveltb-push.html)



## License

[MIT License - peaceiris/actions-pixela]

[MIT License - peaceiris/actions-pixela]: https://github.com/peaceiris/actions-pixela/blob/master/LICENSE



## About Maintainer

- [peaceiris homepage](https://peaceiris.com/)
