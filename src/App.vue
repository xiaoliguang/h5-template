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
    import Ajax from "~api/Http";
    export default {
        mounted() {
            Ajax({
                method: "post",
                url: "user/info",
                params: {eee:11},
            });
            // 打桩示例
            var d = {
                id:111, 
                dwcId: 888,
                AShareCode:6
            }
            this.pushData(313, '点击列表推广弹窗', d );
        },  
        methods: {
            
        },
    }
</script>

<style>

</style>
