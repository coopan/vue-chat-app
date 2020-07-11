import ChatApp from './ChatApp'
import SvgIcons from "./components/svg-icons/SvgIcons";

const defaultComponentName = 'chat-app-plugin'

const ChatPlugin = {
    /**
     * Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
     * @param Vue
     * @param options
     */
    install(Vue, options = {}) {


        // 4. 添加实例方法
        //Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
        //}

        /**
         * Makes sure that plugin can be installed only once
         */
        if (this.installed) {
            return
        }
        this.installed = true;
        this.event = new Vue()
        this.dynamicContainer = null

        /**
         * Plugin API
         * @type {{_setDynamicContainer(*): void}}
         */
        Vue.prototype.$chat = {
            _setDynamicContainer(dynamicContainer) {
                ChatPlugin.dynamicContainer = dynamicContainer
            }
        }


        /**
         * Sets custom component name (if provided)
         * @type {*|string}
         */
        this.componentName = options.componentName || defaultComponentName

        Vue.component(this.componentName, ChatApp)


        // register globally
        Vue.component('svg-icon', SvgIcons)

        const requireAll = requireContext => requireContext.keys().map(requireContext)

// eslint-disable-next-line no-undef
        const req = require.context('./public/svg', false, /\.svg$/)

        requireAll(req)
    }
}

export default ChatPlugin
