<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home12242</router-link>
            <router-link to="/about">About2</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
// import Ajax from '~api/Http'
import { login } from '@/api/login'
export default {
    mounted() {
        if(!Cookies.get('UUID_名字') || Cookies.get('UUID_名字') == null){
			this.generateUUID()
		}
        login('admin', 'admin123').then(res=>{
            // console.log(res);
        })
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
    methods:{
        // 设置UUID
	   generateUUID() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            Cookies.set('UUID_名字',uuid)
        }
    }
}
</script>

<style></style>
