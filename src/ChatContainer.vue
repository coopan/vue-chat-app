<template>
    <div class="co-chat-container" :class="{opened: isOpen, closed: !isOpen}">
        <Header
                :title="title"
                :on-close="onClose"
                :colors="colors"
                :disable-user-list-toggle="disableUserListToggle"
                :show-close-button="showCloseButton"
        ></Header>

        <MessageList
                v-if="!showUserList"
                :message-list="MessageList"
                :colors="colors"
                :participants="participants"
        >
            <template v-slot:user-avatar="scopedProps">
                <slot name="user-avatar"
                      :user="scopedProps.user"
                      :message="scopedProps.message"
                ></slot>
            </template>

            <!-- 消息内容 -->
            <template v-slot:text-message-body="scopedProps">
                <slot name="text-message-body"
                      :message="scopedProps.message"
                      :messageText="scopedProps.messageText"
                      :messageColors="scopedProps.messageColors"
                      :me="scopedProps.me"
                ></slot>
            </template>

            <template v-slot:text-message-toolbox="scopedProps">
                <slot name="text-message-toolbox" :message="scopedProps.message" :me="scopedProps.me"></slot>
            </template>

            <!-- 系统消息 -->
            <template v-slot:system-message-body="scopedProps">
                <slot name="system-message-body" :message="scopedProps.message" :me="scopedProps.me"></slot>
            </template>
        </MessageList>

        <Footer
                :on-message-was-sent="onMessageWasSend"
        />
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    import MessageList from "./MessageList";

    export default {
        components: {MessageList, Header, Footer},
        props: {
            title: {
                type: String,
                required: true
            },
            onClose: {
                type: Function,
                required: true
            },
            isOpen: {
                type: Boolean,
                default: () => false
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
            },
            onMessageWasSend: { // 记录已经发送的消息
                type: Function,
                required: true
            },
            MessageList: { // 消息列表
                type: Array,
                default: () => {
                    return []
                }
            },
            participants:{
                type: Array,
                required: true
            },
        },
        data() {
            return {
                showUserList: false
            }
        },
        computed: {
            // 试试不计算能不能直接出来
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
        background: white;
        box-shadow: 0 7px 40px 2px rgba(148,149,150,0.1);
        justify-content: space-between;
        animation: fadeIn;
        animation-duration: 0.3s
    ;
        animation-timing-function: ease-in-out;
    }
    .co-chat-container.closed {
        opacity: 0;
        display: none;
        bottom: 90px;
    }
    /* 自动适配手机 */
    @keyframes fadeIn {
        0% {
            display: none;
            opacity: 0;
        }
        100% {
            display: flex;
            opacity: 1;
        }
    }
    @media (max-width: 450px) {
        .co-chat-container {
            width: 100%;
            height: 100%;
            max-height: 100%;
            right: 0;
            bottom: 0;
            border-radius: 0;
        }
        .co-chat-container {
            transition: 0.1s ease-in-out;
        }
        .co-chat-container.closed {
            bottom: 0;
        }
    }
</style>
