<template>
    <div class="co-header" :style="{background: colors.bgColor, color:colors.textColor}">
        <slot>
            <img v-if="imageUrl" class="co-header-avatar" src="imageUrl" alt=""/>

            <div v-if="!disableUserToggle" class="co-header-title-enable" @click="toggleUserList">
                {{ title }}
            </div>
            <div v-else class="co-header-title">{{ title }}</div>
        </slot>

        <!-- 关闭按钮 -->
        <div v-if="showCloseButton" class="co-header-close-btn" @click="onClose">
            <img src="../public/img/close-icon.png" alt="关闭"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            colors: {
                type: Object,
                required: true
            },
            imageUrl: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            onClose: {
                type: Function,
                required: true
            },
            showCloseButton: {
                type: Boolean,
                default: true
            },
            disableUserToggle: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                inUserList: false,
            }
        },
        methods: {
            toggleUserList() {
                this.inUserList = !this.inUserList
                this.$emit('userList', this.inUserList)
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
        display: flex;
    }

    .co-header-close-btn {
        width: 40px;
        height: 40px;
        align-self: center;
        margin-right: 10px;

    }
</style>
