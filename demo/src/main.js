import Vue from 'vue'
import App from "./App";
import Chat from '../../dist/vue-chat-app.umd.js'

Vue.use(Chat)

new Vue({
    ...App
}).$mount("#app")
