## 使用
`npm install vue-chap-app`


```
import Chat from '../../dist/vue-chat-app.umd.js'
Vue.component('Chat')
```

或者直接 cd demo
`npm run dev`

## 项目搭建
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

## 发布到 npm 流程
