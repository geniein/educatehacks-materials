# Quickstart Guide

## Prerequisites

1. Install nodejs LTS version (https://nodejs.org/en)
2. Get GOOGLE_APPLICATION_CREDENTIALS for Translation API (https://cloud.google.com/translate)

## Frontend

1. Git clone or Dowload the code and unzip that.
2. Move the folder 'front'
3. npm install
4. npm run dev
5. Set the backend server address at config(PATH : utils/config.js)
6. Preview http://localhost:4000

Change the port on 'webpack.config.js'

## Backend

1. Git clone or Dowload the code and unzip that.
2. Move the folder 'back'
3. npm install
4. npm run dev
5. Set the config at .env
- PORT={PORT} (Default: 8080)
- GOOGLE_APPLICATION_CREDENTIALS={PATH of API-KEY}
6. Default loopback http://localhost:8080

