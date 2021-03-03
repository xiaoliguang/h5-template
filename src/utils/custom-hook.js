/**
 * @Author      张琪
 * @DateTime    2020-06-24T19:24:40+0800
 * @description 自定义钩子
 * @param       {page：页面实例}
 */
import store from '../store/index.js';
let diyHook = ['Login', 'Position'];
export default class customHook {
    constructor(page,options) {
        console.log(page);

        // 页面实例、原生钩子对象
        this.pageInstance = page;
        this.page = page.$mp.page;
        // 页面内需要处理的所有钩子函数
        this.hookFun = {};
        // 页面内需要处理的所有钩子函数名
        this.hooksStr = [];
        // 所有钩子对象，Hook的实例
        this.hook = {};
        // url里的参数
        this.options = options;
        this.init();
    }
    async init() {
        // 提出需要注入的自定义钩子
        let hook = Hook(this);
        this.hook = hook;
        Object.keys(this.pageInstance.$options).filter(e => {
            let contain = diyHook.some(s => e.indexOf(s) != '-1');
            return contain && e.replace('on', '').split(/(?=[A-Z])/).every(h => hook[h]);
        }).forEach((e, index) => {
            this.hooksStr[index] = {
                name: [],
                execute: false
            };
            this.hookFun[e] = this.pageInstance.$options[e];
            e.replace('on', '').split(/(?=[A-Z])/).forEach(hookStr => {
                if (hook[hookStr] && hook[hookStr].init) {
                    this.hooksStr[index].name.push(hookStr);
                    hook[hookStr].need = true;
                }
            })
        });
        await Promise.resolve();
        Object.keys(hook).forEach(e => hook[e].need && hook[e].init());
    }
    /**
     * @Author      张琪
     * @DateTime    2020-06-24T15:58:17+0800
     * @description 触发钩子
     * @params      hitKey，本次变化的钩子key
     */
    triggerHook(hitKey) {
        this.hooksStr.forEach((hookStr) => {
            let meet = hookStr.name.every(e => this.hook[e].hit);
            if (meet && !hookStr.execute) {
                console.log('on' + hookStr.name.join(''))
                this.hookFun['on' + hookStr.name.join('')].call(this.pageInstance,this.options);
                hookStr.execute = true;
            }
        });
    }
    /**
     * @Author      张琪
     * @DateTime    2020-06-30T20:58:41+0800
     * @description 清除关于本次更新钩子的所有钩子的执行状态
     */
    resetExecute(name) {
        this.hooksStr.forEach((hookStr) => {
            if (hookStr.name.indexOf(name) != -1) {
                hookStr.execute = false;
            }
        })
    }
}

let Hook = (customhook) => ({
    'Load': {
        // 是否采用，默认采用
        need: false,
        //是否初始化过
        initFlag: false,
        //当前是否命中,默认命中
        hit: false,
        // 钩子周期开始
        init() {
            if (this.initFlag) return;
            this.cycleStart();
            let oldUnload = customhook.page.onUnload;
            let newUnload = (e) => {
                oldUnload.call(customhook.pageInstance, e);
                this.cycleEnd();
            }
            customhook.page.onUnload = newUnload;
            this.initFlag = true;
        },
        // 钩子周期开始
        cycleStart() {
            if (!this.hit) {
                this.hit = true;
                customhook.triggerHook('Load');
            }
        },
        // 钩子周期结束
        cycleEnd() {
            if (this.hit) {
                this.hit = false;
                customhook.resetExecute('Load');
            }
        }
    },
    'Show': {
        need: false,
        initFlag: false,
        hit: false,
        init() {
            if (this.initFlag) return;
            if(customhook.pageInstance.$mp.status == 'ready' || customhook.pageInstance.$mp.status == 'show'){
               this.cycleStart();
            }
            let oldShow = customhook.page.onShow;
            let newShow = (e) => {
                oldShow.call(customhook.pageInstance, e);
                this.cycleStart();
            }
            customhook.page.onShow = newShow;
            let oldHide = customhook.page.onHide;
            let newHide = (e) => {
                oldHide.call(customhook.pageInstance, e);
                this.cycleEnd();
            }
            customhook.page.onHide = newHide;
            this.initFlag = true;
        },
        cycleStart() {
            if (!this.hit) {
                this.hit = true;
                customhook.triggerHook('Show');
            }
        },
        cycleEnd() {
            if (this.hit) {
                this.hit = false;
                customhook.resetExecute('Show');
            }
        }
    },
    'Ready': {
        need: false,
        initFlag: false,
        hit: false,
        init() {
            if (this.initFlag) return;
            if(customhook.pageInstance.$mp.status == 'ready'){
               this.cycleStart();
            }
            let oldReady = customhook.page.onReady;
            let newReady = (e) => {
                oldReady.call(customhook.pageInstance, e);
                this.cycleStart();
            }
            customhook.page.onReady = newReady;
            let oldUnload = customhook.page.onUnload;
            let newUnload = (e) => {
                oldUnload.call(customhook.pageInstance, e);
                this.cycleEnd();
            }
            customhook.page.onUnload = newUnload;
            this.initFlag = true;
        },
        cycleStart() {
            if (!this.hit) {
                this.hit = true;
                customhook.triggerHook('Ready');
            }
        },
        cycleEnd() {
            if (this.hit) {
                this.hit = false;
                customhook.resetExecute('Ready');
            }
        }
    },
    'Login': {
        need: false,
        initFlag: false,
        hit: false,
        init() {
            if (this.initFlag) return;
            this[store.state.loginType != null?'cycleStart':'cycleEnd']();
            this.watchLogin((success) => {
                this[success ? 'cycleStart' : 'cycleEnd']();
            });
            this.initFlag = true;
        },
        cycleStart() {
            if (!this.hit) {
                this.hit = true;
                customhook.triggerHook('Login');
            }
        },
        cycleEnd() {
            if (this.hit) {
                this.hit = false;
                customhook.resetExecute('Login');
            }
        },
        // 登录状态监听
        watchLogin(callback) {
            customhook.pageInstance.$watch('$store.state.loginType', (val, oldvue) => {
                callback(val != null);
            });
        }
    },
    'Position': {
        need: false,
        initFlag: false,
        hit: false,
        init() {
            if (this.initFlag) return;
            this[store.state.userInfo.location.address?'cycleStart':'cycleEnd']();
            this.watchPosition((success) => {
                this[success ? 'cycleStart' : 'cycleEnd']();
            });
            this.initFlag = true;
        },
        cycleStart() {
            if (!this.hit) {
                this.hit = true;
                customhook.triggerHook('Position');
            }
        },
        cycleEnd() {
            if (this.hit) {
                this.hit = false;
                customhook.resetExecute('Position');
            }
        },
        // 位置状态监听
        watchPosition(callback) {
            customhook.pageInstance.$watch('$store.state.userInfo.location', (val, oldvue) => {
                if (!!val.address != !!oldvue.address) {
                    callback(!!val.address);
                }
            });
        }
    }
});
