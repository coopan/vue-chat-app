<template>
    <div class="co-chat-app">
<ChatContainer
        :title="title"
        :on-close="onClose"
        :colors="colors"
        :disable-user-list-toggle="disableUserListToggle"
        :show-close-button="showCloseButton"
/>
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
        }
    }
</script>

<style>
    .co-chat-app {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        transition: box-shadow 0.2s ease-in-out;
    }
</style>
