<template>
    <div>
        <chat-container
                :show-close-button="true"
                :title="title"
                :on-close="onClose"
                :colors="colors"
                :disable-user-toggle="disableUserToggle"
        ></chat-container>
    </div>
</template>
<script>
    import ChatContainer from "./layout/ChatContainer";
    export default {
        components: {ChatContainer},
        props: {
            title: {
                type: String,
                default: () => ''
            },
            onClose: {
                type: Function,
                required: true
            },
            colors: {
                type: Object,
                default: function () {
                    return {
                        bgColor: '#4e8cff',
                        textColor: '#fff'
                    }
                }
            },
            disableUserToggle: {
                type: Boolean,
                default:false
            },
        },
        data() {
            return {
                //
            }
        }
    }
</script>
