<template>
    <div>
        <NavBar title="标题" left-text="返回" left-arrow>
            <template #right>
                <van-icon name="search" size="18"/>
            </template>
        </NavBar>


        <CellGroup>
            <Field
                    v-model="value1"
                    label="文本"
                    left-icon="smile-o"
                    right-icon="warning-o"
                    placeholder="显示图标"
            />
        </CellGroup>
    </div>
</template>

<script>
    import {NavBar, Field, CellGroup, Notify} from 'vant'

    export default {
        components: {NavBar, CellGroup, Field},
        data() {
            return {
                active: 0,
                value1: '',
            }
        },
        methods: {
            onChange(index) {
                Notify({type: 'primary', message: index})
            }
        }
    }
</script>

<style scoped>

</style>
