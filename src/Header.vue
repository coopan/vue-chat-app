<template>
    <div class="co-header" :style="{background: colors.header.bgColor, color: colors.header.textColor}">
        <slot>
            <img v-if="avatarUrl" class="co-header--avatar" :src="avatarUrl" alt=""/>
            <div v-if="!disableUserListToggle" class="co-header--title enabled" @click="toggleUserList">
                {{ title }}
            </div>
            <div v-else class="co-header--title">{{ title }}</div>
        </slot>
        <div v-if="showCloseButton" class="co-header--close-button" @click="onClose">
            <img src="./public/img/close-icon.png" alt="点击关闭"/>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            onClose: {
                type: Function,
                required: true
            },
            colors: {
                type: Object,
                required: true
            },
            disableUserListToggle: {
                type: Boolean,
                default: false
            },
            showCloseButton: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                avatarUrl: 'https://wx.qlogo.cn/mmhead/Ib5852jAyb8Q2g4p7L4Lj3dx1svncW4vcYv9Cjq03oVI3QKrSP574w/0',
                inUserList: false
            }
        },
        methods: {
            toggleUserList() {
                //this.inUserList = !this.inUserList
                //this.$emit('userList', this.inUserList)
            }
        }
    }
</script>

<style scoped>
    .co-header {
        min-height: 75px;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        padding: 10px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        position: relative;
        box-sizing: border-box;
        display: flex;
    }

    .co-header--avatar {
        border-radius: 50%;
        align-self: center;
        padding: 10px;
        height: 54px;
        min-width: 55px;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .co-header--title {
        align-self: center;
        padding: 10px;
        flex: 1;
        user-select: none; /* 不允许用户选择文本 */
        font-size: 20px;
        text-align: center;
    }

    .co-header--title.enabled {
        cursor: pointer;
        border-radius: 5px;
    }

    .co-header--title.enabled:hover {
        box-shadow: 0 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
    }

    .co-header--close-button {
        width: 40px;
        align-self: center;
        height: 40px;
        margin-right: 10px;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 5px;
        margin-left: auto;
    }

    .co-header--close-button:hover {
        box-shadow: 0 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
    }

    .co-header--close-button img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    @media (max-width: 450px) {
        .co-header {
            border-radius: 0;
        }
    }
</style>
