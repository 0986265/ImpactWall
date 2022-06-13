# Seriously, read me...


## Table of Contents
* [Introduction](#introduction)
* [Getting Started](#getting-started)

<br>

## Introduction
This is the web based version of Impact Wall.

<br>

## Getting Started
- Use VSC
- Install SASS, open cmd and run `npm install -g sass`.
- Install [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
- Click on the gear icon in the bottom left corner of VSC and open settings (`CTRL/CMD + ,`)
- Search for `live sass compile`.
- Click `edit in settings.json`
- Add the code block below and save the json file
```json
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/css"
        }
    ]
```
<br>

## Developing
1. Make sure to open dev tools in the browser.
2. Set the dimensions to responsive
3. Use the following resolution: 2532 px * 1170 px
4. Happy developing 🥳