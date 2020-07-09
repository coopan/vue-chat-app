<template>
    <div class="co-container">
        <Header
            :show-close-button="true"
            :title="title"
            :on-close="onClose"
            :colors="colors"
            :disable-user-toggle="disableUserToggle"
            @userList="handleUserListToggle"
        >
        </Header>

        <ChatBody></ChatBody>
    </div>
</template>

<script>
    import ChatBody from "./ChatBody"
    import Header from "./Header";

    export default {
        components: {Header,ChatBody},
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
            disableUserToggle: {
                type: Boolean,
                default:false
            },
        },
        data() {
            return {
                showUserList: false
            }
        },
        methods: {
            // showUserList 是 $this.$emit() 携带过来的
            handleUserListToggle(showUserList) {
                this.showUserList = showUserList
            }
        }
    }
</script>

<style scoped>
    .co-container {
        box-sizing: border-box;
        width: 370px;
        background: black;
        height: calc(100% - 120px);
    }
</style>
