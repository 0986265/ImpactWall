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