<template>
    <div>
        <NavBar title="标题" left-text="返回" left-arrow>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </NavBar>

        <List @load="onLoad">
            <van-cell title="点击跳转"  />

        </List>

        <Tabbar v-model="active" @change="onChange">
            <TabbarItem icon="chat-o" badge="5">消息</TabbarItem>
            <TabbarItem icon="friends-o">好友</TabbarItem>
        </Tabbar>

    </div>
</template>

<script>
    import {NavBar, Tabbar, List, TabbarItem, Notify} from 'vant'

    export default {
        components: {NavBar, Tabbar, List,TabbarItem},
        data() {
            return {
                active: 0
            }
        },
        methods: {
            onChange(index) {
                Notify({type: 'primary', message: index})
            },
            onLoad() {

            }
        }
    }
</script>

<style scoped>

</style>
