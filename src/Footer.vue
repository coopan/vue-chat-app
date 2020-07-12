<template>
    <div>

        <form class="co-footer">
            <div class="co-footer--voice">
                <svg-icon icon-class="voice"/>
            </div>

            <div class="co-footer--input"
                 ref="userInput"
                 role="button"
                 tabindex="0"
                 contenteditable="true"
                 aria-placeholder="please input..."
                 @focus="setInputActive(true)"
                 @blur="setInputActive(false)"
                 @keydown="handleKey"
                 @focusUserInput="focusUserInput()"
            ></div>

            <div class="co-footer--emoji">
                <svg-icon icon-class="emoji"/>
            </div>

            <div class="co-footer--file">
                <svg-icon icon-class="file"/>
            </div>

            <UserSendButton
                    @click.native.prevent="_submitText"

            >发送</UserSendButton>
        </form>
    </div>
</template>

<script>

    import UserSendButton from "./components/UserSendButton";
    export default {
        components: {UserSendButton},
        data() {
            return {
                inputActive: false
            }
        },
        props: {
            onMessageWasSent: {
                type: Function,
                required: true
            }
        },
        methods:{
            setInputActive(bool) {
                this.inputActive = bool
            },
            /**
             * 处理回车发送消息
             * @param event
             */
            handleKey(event) {
                if (event.keyCode === 13 && !event.shiftKey) {
                    this._submitText(event)
                }
            },
            focusUserInput() {

            },
            _submitText(event) {
                const text = this.$refs.userInput.textContent
                console.log(event)
                if (text && text.length > 0) {
                    this._checkSubmitSuccess(
                        this.onMessageWasSent({
                            author: 'me',
                            type: 'text',
                            data: {text}
                        })
                    )
                }
            },
            _checkSubmitSuccess(success) {
                if (Promise !== undefined) {
                    Promise.resolve(success).then(function (wasSuccessful) {
                        console.log(`was successful value: ${wasSuccessful}`)
                        if (wasSuccessful === undefined || wasSuccessful) {
                            this.$refs.userInput.innerHTML = ''
                        }
                    }.bind(this))
                } else {
                    this.$refs.userInput.innerHTML = ''
                }
            }
        }
    }
</script>
<style>
    .co-footer {
        min-height: 55px;
        margin: 0;
        position: relative;
        bottom: 0;
        display: flex;
        transition: background-color 0.2s ease, box-shadow 0.2s ease;
    }
    .co-footer--input {
        width: 300px;
        resize: none;
        border: none;
        outline: none;
        box-sizing: border-box;
        padding: 10px 15px;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .co-footer--voice {
        height: 55px;
        width: 40px;
        display: flex;
        align-items: center;
    }
    .co-footer--file {
        height: 55px;
        width: 40px;
        display: flex;
        align-items: center;
    }
    .co-footer--emoji {
        height: 55px;
        width: 40px;
        display: flex;
        align-items: center;
    }

</style>
