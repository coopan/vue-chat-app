<template>
    <div>
    <div v-if="showChatApp"
         class="co-chat-app"
         :class="{opened: isOpen}"
         :style="{backgroundColor: colors.launcher.bgColor}"
         @click.prevent="isOpen ? close() : openAndFocus()"
    >
        <img v-if="isOpen" class="co-closed-icon" src="./public/img/close-icon.png" alt="关闭聊天窗口"/>

        <img v-else class="co-open-icon" src="./public/img/message-solid.png" alt="打开聊天窗口"/>
        <!-- 加载聊天窗口 -->
    </div>
        <ChatContainer
                :is-open="isOpen"
                :title="title"
                :on-close="close"
                :colors="colors"
                :participants="participants"
                :disable-user-list-toggle="disableUserListToggle"
                :show-close-button="showCloseButton"
                :on-message-was-send="onMessageWasSend"
                :message-list="MessageList"
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
        </ChatContainer>
    </div>
</template>

<script>
    import ChatContainer from "./ChatContainer";

    export default {
        components: {ChatContainer},
        props: {
            title: {
                type: String,
                required: true
            },
            close: {
                type: Function,
                required: true
            },
            colors: {
                type: Object,
                validator: (c) =>
                    'header' in c &&
                    'bgColor' in c.header &&
                    'textColor' in c.header &&
                    'launcher' in c &&
                    'bgColor' in c.launcher,
                default: function () {
                    return {
                        header: {
                            bgColor: '#4e8cff',
                            textColor: '#ffffff'
                        },
                        launcher: {
                            bgColor: '#4e8cff',
                        }
                    }
                }
            },
            disableUserListToggle: {
                type: Boolean,
                default: false
            },
            showCloseButton: {
                type: Boolean,
                default: false
            },
            showChatApp: {
                type: Boolean,
                default: true
            },
            isOpen: {type: Boolean,required: true},
            open:{type:Function,required:true},
            onMessageWasSend:{type:Function, required:true},
            MessageList: {type:Array, default: () => []},
            participants:{type:Array, required:true}
        },
        methods: {
            openAndFocus() {
                this.open()
            }
        }
    }
</script>

<style>
    .co-chat-app {
        width: 60px;
        height: 60px;
        background-position: center;
        background-repeat: no-repeat;
        position: fixed;
        right: 25px;
        bottom: 25px;
        border-radius: 50%;
        box-shadow: none;
        transition: box-shadow 0.2s ease-in-out;
        cursor: pointer;
    }
    .co-chat-app:before {
        content: '';
        position: relative;
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        transition: box-shadow 0.2s ease-in-out;
    }
    .co-chat-app:hover {
        box-shadow: 0 0 27px 2px rgba(0,0,0,0.2);
    }
    /* 悬浮图标的位置 */
    .co-chat-app .co-open-icon,
    .co-chat-app .co-closed-icon {
        width: 60px;
        height: 60px;
        position: fixed;
        right: 25px;
        bottom: 25px;
        transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
    }
    /* 图标大小及过渡效果 */
    .co-chat-app .co-closed-icon {
        transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
        width: 60px;
        height: 60px;
    }
    .co-chat-app .co-open-icon {
        padding: 20px;
        box-sizing: border-box;
        opacity: 1;
    }
    /* 打开关闭的旋转特效 */
    .co-chat-app.opened .co-closed-icon {
        transform: rotate(-90deg);
        opacity: 1; /* 指定了一个元素的透明度 */
    }
    .co-chat-app.opened .co-open-icon {
        transform: rotate(-90deg); /* 旋转属性 */
        opacity: 1; /* 指定了一个元素后面的背景的被覆盖程度。 */
    }
    .co-chat-app.opened:before {
        box-shadow: 0 0 400px 250px rgba(148, 149, 150, 0.2);
    }
</style>
