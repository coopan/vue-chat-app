<template>
    <div class="co-message">
        <div class="co-message--content"
             :class="{
                sent: message.author === 'me',
                received: message.author !== 'me' && message.type !== 'system',
                system: message.type === 'system'
            }"
        >
            <!-- 对方头像 -->
            <slot name="user-avatar" :message="message" :user="user">
                <div v-if="message.type !== 'system' && authorName && authorName !== 'me'"
                     class="co-message--avatar"
                     :title="authorName"
                     :style="{backgroundImage: `url(${chatAvatarUrl}`}">
                </div>
            </slot>

            <TextMessage
                    v-if="message.type === 'text'"
                    :message="message"
                    :message-colors="messageColors"
            >
                <!-- 为了在当前组件（父）使用子组件的数据，这么写作用域插槽 -->
                <template v-slot:default="scopedProps">
                    <slot name="text-message-body"
                          :message="scopedProps.message"
                          :messageText="scopedProps.messageText"
                          :messageColors="scopedProps.messageColors"
                          :me="scopedProps.me"
                    ></slot>
                </template>

                <template v-slot:text-message-toolbox="scopedProps">
                    <slot name="text-message-toolbox" :message="scopedProps.message" :me="scopedProps.me">
                    </slot>
                </template>
            </TextMessage>
        </div>
    </div>
</template>

<script>
    import TextMessage from "./components/message/TextMessage";

    export default {
        components: {TextMessage},
        data() {
            return {
                avatarUrl: 'https://wx.qlogo.cn/mmhead/Ib5852jAyb8Q2g4p7L4Lj3dx1svncW4vcYv9Cjq03oVI3QKrSP574w/0',
            }
        },
        props: {
            colors: {
                type: Object,
                required: true
            },
            message: {
                type: Object,
                required: true
            },
            user: {
                type: Object,
                required: true
            },
        },
        computed: {
            authorName() {
                return this.user && this.user.name
            },
            chatAvatarUrl() {
                return (this.user && this.user.avatarUrl) || this.avatarUrl
            },
            messageColors() {
                return this.message.type === 'me' ? this.sentColorsStyle : this.receivedColorsStyle
            },
            sentColorsStyle() {
                return {
                    color: this.colors.sentMessage.textColor,
                    backgroundColor: this.colors.sentMessage.bgColor
                }
            },
            receivedColorsStyle() {
                return {
                    color: this.colors.receivedMessage.textColor,
                    backgroundColor: this.colors.receivedMessage.bgColor
                }
            }
        }
    }
</script>

<style lang="scss">

    .co-message {
        width: 300px;
        margin: auto;
        padding-bottom: 10px;
        display: flex;
    }

    .co-message--content {
        width: 100%;
        display: flex;
    }

    .co-message--content.sent {
        justify-content: flex-end;
    }

    .co-message--content.system {
        justify-content: center;
    }

    .co-message--content.sent .co-message--text {
        max-width: calc(100% - 120px);
        word-wrap: break-word;
    }

    .co-message--avatar {
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 50%;
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        align-self: flex-start;
        margin-right: 15px;
    }
    @media (max-width: 450px) {
        .co-message {
            width: 80%;
        }
    }

    .co-message--text {
        padding: 5px 20px;
        border-radius: 6px;
        font-weight: 300;
        font-size: 14px;
        position: relative;
        line-height: 1.4em;
        -webkit-font-smoothing: subpixel-antialiased;
        .co-message--text-body {
            .co-message--text-content {
                white-space: pre-wrap;
            }
        }
        &:hover .co-message--toolbox {
            left: -20px;
            opacity: 1;
        }
        .co-message--toolbox {
            transition: left 0.2s ease-out 0s;
            white-space: normal;
            opacity: 0;
            position: absolute;
            left: 0;
            width: 25px;
            top: 0;
            button {
                background: none;
                border: none;
                padding: 0;
                margin: 0;
                outline: none;
                width: 100%;
                text-align: center;
                cursor: pointer;
                &:focus {
                    outline: none;
                }
            }
        }
    }
</style>
