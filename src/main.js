
import Vue from 'vue';
// import './plugins/bootstrap-vue'
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;
import vueBus from '@/util/vueBus';
import Storage from 'vue-ls';
import './assets/sass/style.scss';
const options = {
    namespace: 'brush__', 
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local', // storage name session, local, memory
  };
  
  Vue.use(Storage, options);
Vue.use(vueBus);
new Vue({
    router,
    render: h => h(App)
    
}).$mount('#app');