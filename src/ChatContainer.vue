<template>
    <div class="co-chat-container">
        <Header
                :title="title"
                :on-close="onClose"
                :colors="colors"
                :disable-user-list-toggle="disableUserListToggle"
                :show-close-button="showCloseButton"
        ></Header>

        <Message/>

        <Footer/>
    </div>
</template>

<script>
    import Header from "./Header";
    import Message from "./Message";
    import Footer from "./Footer";

    export default {
        components: {Header, Message, Footer},
        props: {
            title: {
                type: String,
                required: true
            },
            onClose: {
                type: Function,
                required: true
            },
            colors: {
                type: Object,
                required: true
            },
            disableUserListToggle: {
                type: Boolean,
                default: false
            },
            showCloseButton: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                active: 0,
                value1: '',
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .co-chat-container {
        width: 370px;
        /* calc() 此css函数让你在声明css属性值时执行一些计算。函数用一个表达式作为它的参数，表达式的结果作为值*/
        height: calc(100% - 120px);
        max-height: 590px;
        position: fixed;
        right: 25px;
        bottom: 100px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        background: #ffffff;
    }
</style>
