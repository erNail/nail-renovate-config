# nail-renovate-config

Configuration and actions for automatic dependency updates of repositories of erNail.

## Development

Install Dependencies:

```shell
pip install -r requirements.txt
yarn global add renovate@35.127.1
```

Run `pre-commit` for linting:

```shell
pre-commit run --all-files --color=always --show-diff-on-failure
```

Run `renovate`:

```shell
renovate
```
