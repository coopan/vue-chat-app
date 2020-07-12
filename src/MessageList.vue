<template>
    <div class="co-message-list">

        <Message
                v-for="(message, index) in messageList"
                :message="message"
                :key="index"
                :colors="colors"
                :user="profile(message.author)"
        >
            <!-- 用户信息 -->
<!-- 为了让scopedProps在父级的插槽内容中可用,将scopedProps作为 slot元素的一个attribute绑定上去 -->
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
        </Message>
    </div>
</template>

<script>
    import Message from "./Message";
    export default {
        components: {Message},
        props: {
            participants:{
                type: Array,
                required: true
            },
            messageList: {
                type: Array,
                required: true
            },
            colors: {
                type: Object,
                required: true
            }
        },
        computed: {

        },
        methods: {
            profile(author) {
                const profile = this.participants.find((profile) => profile.id === author)
                return profile || {avatarUrl: '', name: ''}
            }
        }
    }
</script>
<style>
    .co-message-list {
        height: 80%;
        overflow-y: auto;
        background-size: 100%;
        padding: 30px 0;
    }
</style>
