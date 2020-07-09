## 什么是 Babel
🚀官方文档[https://babel.docschina.org/docs/en/](https://babel.docschina.org/docs/en/)

### babel 是一个 JavaScript 编译器
- babel 是一个工具链，主要用于在旧的浏览器或环境中将 ECMAScript2015+ 代码转换为身后兼容版本的 JavaScript 代码

- babel 通过语法变换哭支持最新版本的 JavaScript。
- 这些 Plugins 请允许我你现在就使用新语法，而无需等待浏览器的支持。
- babel 可以转换 JSX 语法


- 你想编译 node_modules ？ 使用 babel.config.js
- 你有一个仅适用于简单单个包的静态配置？ 使用 .babelrc

eslint 主要用来检查语法问题，也可以用来检测代码风格问题，但是没有 prettier做得好

prettier 主要用来检查代码风格问题，它支持多种语言，如 JavaScript中，应该使用单引号还是双引号，该不该换行，tab 键占多少个空格，结尾要不要分号等等。

结合使用：使用 eslint检查语法，并在eslint中调用 prettier来格式化代码风格