<p align="center">
  <img src="assets/rubik.png" alt="">
</p>
<h1 align="center"> rubik </h1>
<p align="center">
  <b >Only one command for web app development with Pure/Vue/React or javascript libraries.</b>
</p>

<br>

<p align="center">
  <a href="https://www.npmjs.com/package/rubik-cli"><img alt="npm" src="https://img.shields.io/npm/v/rubik-cli?color=sucess"></a>
  <a href="https://standardjs.com/"><img alt="standardjs" src="https://img.shields.io/badge/code%20style-standard-sucess"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img alt="commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a>
</p>


## CLI Features
- Plugin support

## Init an app
```
$ mkdir project
$ cd project
$ npx rubik-cli init
```

## APP Features

- Only One structure in pure/vue/react/library development
- Multiple pages app support (html-webpack-plugin)
- Library development support (webpack-author-libraries)
- Hot reload (webpack-dev-server)
- Data Mock (webpack-dev-server)
- Code style lint(![code style standard](https://img.shields.io/badge/code%20style-standard-sucess))
- Auto re-install dependencies after `git commit/merge` if needed 
- More


## App Structure

```
├── src
│       │
│       ├── page
│       │       ├── app
│       │       │       ├── index.html
│       │       │       ├── index.js
│       │       │       ├── style.css
│       │       │       └── ...
│       │       ├── home
│       │       
│       ├── static
│       │       └── jquery
│       │
│       │
│       ├── any-other
│
│
├── mock
│       └── index.js
│
│
├── rubik.config.js (optional)
├── webpack.config.js (optional)
├── .eslintrc.js (optional)
│

```

## Library Structure

```
├── demo
│       ├── index.html
│       └── index.js
├── src
│       └── index.js
│
├── mock
│       └── index.js
│
├── rubik.config.js (optional)
├── webpack.config.js (optional)
├── .eslintrc.js (optional)
│

```

## Mock
`mock/index.js`
```js
module.exports = function (app) {
  app.get('/data', function (req, res) {
    res.json({
      'data': 'hello rubik'
    })
  })
}
```

## Custom Config
`rubik.config.js`
```
{
  "output": "dist",
  "staticName": "static",
  "templateName": "",
  "publicPath": "/",
  "cdnPublicPath": "//",
  "hashLength": 7,
  "includePage": [],
  "vendor": [],
  "host": "0.0.0.0",
  "port": 8081,
  "openStandardJs": true,
  "pageTemplateWithoutHtmlLoader": false,
  "reInstallOnPkgChange": true,
  "notReInstallOnPkgChangeFeatures": [],
  "plugins": []
}

```

## Custom Webpack Config
`webpack.config.js`
```
module.exports = {
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } }
}

```


## Plugin
A plugin is a npm package with follow features:
- The name must like `rubik-cli-plugin-<command-name>`
- Need export a sub class of [common-bin](https://github.com/node-modules/common-bin)

`rubik-cli-plugin-hello-word`
```
module.exports = ({ Command }, options) => {
  class SubCommand extends Command {
    async run () {
      console.log(options)
    }
    get description () {
      return 'hello word'
    }
  }
  return SubCommand
}
```
`rubik.config.js`
```
plugins: [{
    name: 'hello-word',
    options: {
      foo: 'bar'
    }
  }]
```

## Todo
- App Commit lint
