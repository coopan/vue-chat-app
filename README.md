# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

- 一步步进行构造，按照提示进行依赖的安装
`./node_modules/.bin/eslint --init`

- yarn build报错：`throw new Error('Callback was already called.');` 新建 `vue.config.js`，添加如下：
```js
module.exports = {
    css: {
        extract: false
    }
}

```
重新 yarn build 成功
