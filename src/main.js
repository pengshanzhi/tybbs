// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './vuex/store.js'
import axios from 'axios'
import domain from './domain.js';
global.domain = domain;



Vue.use(axios)
    // Vue.prototype.$http = axios
Vue.use(VueResource)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, //实例化 store
    components: { App },
    template: '<App/>'
})