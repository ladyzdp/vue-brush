import Vue from 'vue';
import VueRouter from 'vue-router';


const originalPush = VueRouter.prototype.push;
Vue.use(VueRouter);
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// const menus = JSON.parse(sessionStorage.getItem("menus")) || [];

let routes = [

    {
        path: '/',
        component: () => import('../pages/index/index.vue')
    }

];

let router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior() { // 解决vue页面之间跳转，页面不是在顶部的问题
        return { x: 0, y: 0 }
    }
});


router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export default router;