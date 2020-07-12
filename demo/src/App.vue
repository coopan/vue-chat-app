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
        ></chat-app-plugin>
    </div>
</template>

<script>
    import availableThemeColors from './colors'
    export default {
        name: "App",
        data() {
            return {
                colors: null,
                isChatOpen: true,
                availableThemeColors,
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
            setThemeColor(color) {
                this.colors = this.availableThemeColors[color]

            }
        }
    }
</script>

<style scoped>

</style>
