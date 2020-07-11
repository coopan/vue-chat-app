<template>
    <div class="co-message">
        <div class="co-message--item">
            <div class="co-message--content">
                <div class="co-message--avatar" :style="{backgroundImage: 'url('+ avatarUrl +')'}"></div>
                <div class="co-message--text">大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥大哥</div>
            </div>
        </div>

        <div class="co-message--item">
            <div class="co-message--content">
                <div class="co-message--avatar" :style="{backgroundImage: 'url('+ avatarUrl +')'}"></div>
                <div class="co-message--text">大哥大哥大哥大哥</div>
            </div>
        </div>

        <div class="co-message--item">
            <div class="co-message--content">
                <div class="co-message--avatar" :style="{backgroundImage: 'url('+ avatarUrl +')'}"></div>
                <div class="co-message--text">大哥大哥大哥大哥</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                avatarUrl: 'https://wx.qlogo.cn/mmhead/Ib5852jAyb8Q2g4p7L4Lj3dx1svncW4vcYv9Cjq03oVI3QKrSP574w/0',
            }
        }
    }
</script>

<style>
    .co-message {
        height: 80%;
        overflow-y: auto;
        background-size: 100%;
        padding: 30px 0;
    }

    .co-message--item {
        width: 300px;
        margin: auto;
        padding-bottom: 10px;
        display: flex;
    }

    .co-message--content {
        width: 100%;
        display: flex;
    }

    .co-message--avatar {
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 50%;
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        align-self: flex-start;
        margin-right: 15px;
    }

    .co-message--text {
        padding: 5px 20px;
        border-radius: 6px;
        font-weight: 300;
        font-size: 14px;
        background-color: #4e8cff;
        color: #ffffff;
        position: relative;
        line-height: 1.4em;
    }
</style>
