# 🌜⚽⚽👢ME bot

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/mohitkyadav/coolme/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/mohitkyadav/coolme)
[![Support](https://discordapp.com/api/guilds/522610943037931551/embed.png)](https://discord.gg/bJGQRJx)
[![Discord Bots](https://discordbots.org/api/widget/status/521530934512713741.svg)](https://discordbots.org/bot/521530934512713741)

[![Support](https://discordbots.org/api/widget/521530934512713741.svg?usernamecolor=FFFFFF&topcolor=000000)](https://discordbots.org/bot/521530934512713741)


## Deployable on
```
glitch / zeit / heroku.
```

## List of supported commands

| Command | Response  | Status |
|---------|-----------|--------|
|*!hello*  | **world!**| ✔ |
|*!yo*    | **lo!😜** | ✔ |
|*!status*| **server status(200/404)**|✔|
|*!cool `<string>`*  | __**All cool strings**__  | ✔ |
|*!uncool `<string>`*| __**original string**__ | ✔ |
|*!weather `<city_name>`*| __**weather information**__ | ✔ |
|*!ytt*| __**Top trending on YouTube**__|✔|
|*!twt*| __**Top trending on Twitter**__|✔|
|*!ght*| __**Top trending on GitHub**__|✔|
|*!ip `<url>`*| __**ip address of the url**__| ✔ |
|*!gcard `github_username`*| __**Embeded GitHub Card**__| ✔ |
|*!encrypt `text` `key`*| __**Encrypted text**__| ⏰ |
|*!decrypt `text` `key`*| __**Decrypted text**__| ⏰ |


>!cool wolverine

|Type|Output|
|--|--|
|Alphanum|w01v3r¡n3|
|Circle|ⓦⓞⓛⓥⓔⓡⓘⓝⓔ|
|Square|🅆🄾🄻🅅🄴🅁🄸🄽🄴|
|Mixed|ⓦ01v3r¡n3|
|Mixed 2|wo|ver!ne|
|Normal|wolverine|
|Emoji|🔱⚽👢✔🎗🌱🎐🎵🎗|
|Symbolic|w͓̽o͓̽l͓̽v͓̽e͓̽r͓̽i͓̽n͓̽e͓̽|
|Upsidedown|ʍoʃʌǝɹᴉnǝ|

> !gcard mohitkyadav

<img src="./demo/mky_card.jpg" alt="mky" width="400"/>

> !gcard google

<img src="./demo/g_card.jpg" alt="g" width="400"/>

## Environment variables
You need to set these variables in your deployment environment. A `sample.env` file has been provided for reference. You can set the values there and rename it to .env for local development.
| env variable | value |
|--|--|
|`TOKEN`|Discord client token|
|`OWKEY`|Open weather map API key|
|`YTKEY`|Youtube API key|
|`PORT`|Set automatically by your deployment platform|
|`MAG_GIF`|Rich embed default thumbnail url|
|`TWAPIKEY`|Twitter consumer key|
|`TWAPISECRET`|Twitter consumer secret|
|`TWACCESS`|Twitter access token|
|`TWACCESSSECRET`|Twitter access token secret|