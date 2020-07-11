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
            ></div>

            <div class="co-footer--emoji">
                <svg-icon icon-class="emoji"/>
            </div>

            <div class="co-footer--file">
                <svg-icon icon-class="file"/>
            </div>

            <div class="co-footer--send-button">
                <button class="co-footer--send-btn">发送</button>
            </div>
        </form>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                inputActive: false
            }
        },
        methods:{
            setInputActive(bool) {
                this.inputActive = bool
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
        background-color: #f4efef;
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
    .co-footer--send-button {
        height: 55px;
        width: 40px;
        display: flex;
        align-items: center;
    }
    .co-footer--send-btn {
        height: 30px;
        width: 50px;
        border-radius: 5px;
        font-size: 10px;
    }
</style>
