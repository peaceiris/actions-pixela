[![license](https://img.shields.io/github/license/peaceiris/actions-pixela.svg)](https://github.com/peaceiris/actions-pixela/blob/master/LICENSE)
[![release](https://img.shields.io/github/release/peaceiris/actions-pixela.svg)](https://github.com/peaceiris/actions-pixela/releases/latest)
[![GitHub release date](https://img.shields.io/github/release-date/peaceiris/actions-pixela.svg)](https://github.com/peaceiris/actions-pixela/releases)



## GitHub Actions for Pixela (a-know/pi)

- [Pixela | Record and Track your habits or effort. All by API.](https://pixe.la/)
- [a-know/pi: Official CLI tool for Pixela](https://github.com/a-know/pi)



## Getting started

### (1) Add secret variables

- `PIXELA_USER_TOKEN`

### (2) Create `main.workflow`

```sh
workflow "Main workflow" {
  on = "push"
  resolves = ["pixela"]
}

action "pixela" {
  uses = "peaceiris/actions-pixela@v1.0.2"
  secrets = ["PIXELA_USER_TOKEN"]
  args = ["pixel", "increment", "-u", "<username>", "-g", "<graph-id>"]
}
```



## Example

[![peaceiris push count](https://pixe.la/v1/users/peaceiris/graphs/reveltb-push)](https://pixe.la/v1/users/peaceiris/graphs/reveltb-push.html)



## License

[MIT License - peaceiris/actions-pixela]

[MIT License - peaceiris/actions-pixela]: https://github.com/peaceiris/actions-pixela/blob/master/LICENSE
