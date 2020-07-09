<template>
    <div id="app">
        <chat-app-plugin
                :show-close-button="true"
                title="2343423"
                :on-close="false"
                :colors="{bgColor: '#4e8cff', textColor: '#ffffff'}"
                :disable-user-toggle="false"
        ></chat-app-plugin>
    </div>
</template>

<script>


    export default {
        name: "App"
    }
</script>

<style scoped>

</style>
