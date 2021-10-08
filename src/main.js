
import Vue from 'vue';
// import './plugins/bootstrap-vue'
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;
import './assets/sass/style.scss';

new Vue({
    router,
    render: h => h(App)
    
}).$mount('#app');