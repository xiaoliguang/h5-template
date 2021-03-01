<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
// import Ajax from '~api/Http'
import { login } from '@/api/login'
export default {
    mounted() {
        login('admin', 'admin123')


        // Ajax({
        //     method: 'post',
        //     url: 'login?username=admin&password=admin123',
        // })
        // // 打桩示例
        // var d = {
        //     id: 111,
        //     dwcId: 888,
        //     AShareCode: 6
        // }
        // this.pushData(313, '点击列表推广弹窗', d)
    },
    methods: {}
}
</script>

<style></style>
