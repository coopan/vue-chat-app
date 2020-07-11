<template>
    <div id="app">
        <chat-app-plugin
                :show-close-button="true"
                title="2343423"
                :on-close="onClose"
                :colors="colors"
                :disable-user-toggle="false"
        ></chat-app-plugin>
    </div>
</template>

<script>

    export default {
        name: "App",
        data() {
            return {
                colors: {
                    header: {
                        bgColor: '#4e8cff',
                        textColor: '#ffffff'
                    }
                }
            }
        },
        methods: {
            onClose() {
                console.log('close chat panel.')
            }
        }
    }
</script>

<style scoped>

</style>
