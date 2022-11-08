//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
import Msite from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Login from '../pages/Login/Login.vue'

//使用vue-router
Vue.use(VueRouter);

//创建路由器实例
const router = new VueRouter({
    mode:'hash',
    //配置路由规则
    routes:[
        {
            //首页
            path:"/msite",
            component:Msite,
            //元信息
            meta:{
                showFooter:true
            }
        },
        {
            //搜索
            path:"/search",
            component:Search,
            //元信息
            meta:{
                showFooter:true
            }
        },
        {
            //订单
            path:"/order",
            component:Order,
            //元信息
            meta:{
                showFooter:true
            }
        },
        {
            //我的个人中心
            path:"/profile",
            component:Profile,
            //元信息
            meta:{
                showFooter:true
            }
        },
        {
            //项目启动默认为该路径
            path:"/",
            redirect:"/msite"
        },
        {
            //注册登录
            path:"/login",
            component:Login
        },

       
    ]

    
});

//默认暴露
export default router;