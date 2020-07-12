<template>
    <div class="co-message--text" :style="messageColors">
        <template>
            <div class="co-message--toolbox" :style="{background:messageColors.backgroundColor}">

                <slot name="text-message-toolbox" :message="message" :me="me"></slot>
            </div>
        </template>

        <!-- 这是才是显示消息文本的地方  -->
        <slot
                :message="message"
                :messageText="messageText"
                :messageColors="messageColors"
                :me="me">
            <p class="co-message--text-content" v-html="messageText"></p>
            <p v-if="message.data.meta" class="co-message--mate" :style="{color: messageColors.textColor}">
                {{ message.data.meta }}
            </p>
        </slot>
    </div>
</template>

<script>
    //import escapeGoat from "escape-goat";

    export default {
        props: {
            message: {
                type: Object,
                required: true
            },
            messageColors: {
                type: Object,
                require: true
            }
        },
        computed: {
            me() {
                return this.message.author === 'me'
            },
            /**
             * 对消息进行转义，以显示表情之类的
             */
            messageText() {
                return this.message.data.text
            },
        }
    }
</script>
