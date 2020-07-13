*纯属本人自娱自乐，本项目暂时不适合安装使用，仅供学习参考。*

## 使用
`npm install vue-chap-app`


```
import Chat from '../../dist/vue-chat-app.umd.js'
Vue.component('Chat')
```

或者直接

`cd demo`

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

### 整个系统说明
- 目前的聊天方式是：页面端——弹窗端进行聊天（自娱自乐）

- 不同的人安装并不能在一起聊天

后面再慢慢优化

### 学习到的知识
- Vue 的组件开发
- 具名插槽、作用域插槽的使用
- this.$emit() 和 this.$refs 的使用
- Vue 中 svg 的使用
- 项目的依赖配置，Eslint设置，vue-cli工具的使用
- 学会如何发布 vue 组件到npm
- 学会了开发 Vue 插件
- 学会了 CSS3 的一些特效，旋转，渐进，透明，calc() 计算等
- 学会对象展开符 `...` 的使用
