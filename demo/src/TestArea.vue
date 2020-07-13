<template>
    <div class="demo-test-area--wrapper">
        <form class="demo-test-area" @submit.prevent="_handleSubmit" @keyup="_handleTyping">
            <textarea ref="textArea" class="demo-test-area--text" v-model="inputValue" placeholder="Write a test message..."></textarea>

            <button class="demo-test-area--button">点击发送</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "TestArea",
        data() {
            return {
                inputValue: ''
            }
        },
        props: {

            onTyping: {
                type: Function,
                required: true
            }
        },
        methods: {
            _handleSubmit() {
                console.log(this.inputValue)
                this.$emit('message', this.inputValue)
                this.inputValue = ''
                //console.log(this.$refs.textArea.value)
                //this.onMessage(this.$refs.textarea.value)
                //this.$refs.textArea.value = ''
            },
            _handleTyping() {
                //this.onTyping(this.$refs.textArea.value)
            }
        }
    }
</script>

<style scoped>
    .demo-test-area--wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .demo-test-area {
        align-self: center;
        margin-top: 30px;
        width: 400px;
        display: flex;
        flex-direction: column;
    }

    .demo-test-area--text {
        box-sizing: border-box;
        width: 100%;
        margin:10px 0;
        padding:0;
        resize:none;
        background: #fafbfc;
        color: #8da2b5;
        border: 1px solid #dde5ed;
        font-size: 15px;
        border-radius: 6px;
        outline: none;
        height: 100px;
    }

    .demo-test-area--button {
        font-weight: 400;
        font-family: Avenir Next, Helvetice Neue, Helvetica, sans-serif;
        margin-top: 20px;
        user-select: none;
        border: none;
        line-height: 1.4;
        text-decoration: none;
        background: #4e8cff;
        color: white;
        padding: 6px 10px;
        font-size: 20px;
        border-radius: 4px;
        width: 80%;
        box-sizing: border-box;
        outline: none;
        cursor: pointer;
        align-self: center;
    }
</style>
