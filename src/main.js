/**
 * 入口文件
 */
//引入vue
import Vue from 'vue';
//引入App组件
import App from './App.vue'

//引入路由器
import router from './router';
//引入vuex
import store from './store'

//解决生产下的警告提示
Vue.config.productionTip = false;
//创建vue实例
new Vue({
    render:h=>h(App),
    router,
    store,
}).$mount("#app");