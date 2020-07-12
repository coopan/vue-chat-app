<template>
    <div class="co-user-send">
        <button class="co-user-send-button">
            <slot/>
        </button>
    </div>
</template>
<script>
    export default {
        name: 'UserSendButton'
    }
</script>

<style scoped>
    .co-user-send {
        display: flex;
        min-width: 70px;
        align-self: center;
        box-sizing: border-box;
    }
    .co-user-send-button {
        background-color: #06ad56;
        color: #fff;
        border-radius: 4px;
        height: 35px;
        width: 100%;
        margin: 0 5px;
        border: none ;
        outline: none;
        cursor: pointer;
        position: relative;
    }
    .co-user-send-button:active {
        top: 1px;
        left: 1px;
    }
</style>
