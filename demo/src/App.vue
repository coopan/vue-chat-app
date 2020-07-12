<template>
    <div>
        <chat-app-plugin
                :show-close-button="true"
                title="2343423"
                :close="closeChat"
                :colors="colors"
                :disable-user-toggle="false"
                :is-open="isChatOpen"
                :open="openChat"
                :show-chat-app="true"
                :on-message-was-send="onMessageWasSend"
                :message-list="messageListCache"
                :participants="participants"
        >

            <!-- 消息内容 -->
            <template v-slot:text-message-body="scopedProps">
                <p class="co-message--text-content" v-html="scopedProps.messageText"></p>
            </template>

            <template v-slot:text-message-toolbox="scopedProps">
                <button>{{scopedProps.message.data.text}}</button>
            </template>

            <!-- 系统消息 -->
            <template v-slot:system-message-body="scopedProps">
                [System]:{{ scopedProps.message.data.text }}
            </template>
        </chat-app-plugin>
    </div>
</template>

<script>
    import availableThemeColors from './colors'
    import chatProfiles from "./chatProfiles";
    export default {
        name: "App",
        data() {
            return {
                id: 1,
                participants:chatProfiles,
                colors: null,
                isChatOpen: true,
                availableThemeColors,
                messageListCache: [],
            }
        },
        created() {
            this.setThemeColor('blue')
        },
        methods: {
            closeChat() {
                this.isChatOpen = false
            },
            openChat() {
                this.isChatOpen = true
            },
            // 设置主题颜色
            setThemeColor(color) {
                this.colors = this.availableThemeColors[color]
            },
            /**
             * 记录已经发送的数据，按需选择存数据库
             * @Object message
             */
            onMessageWasSend(message) {
                console.log(`recording sent messages: ${JSON.stringify(message, null, 1)}`)
                this.messageListCache.push(Object.assign({}, message, {id: ++this.id}))
            }
        }
    }
</script>

<style scoped>

</style>
