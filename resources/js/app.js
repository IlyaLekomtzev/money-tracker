/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './components/App';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import router from "./router";

import dateFilter from './filters/date.filter';
import PriceFilter from './filters/price.format.filter';

Vue.use(Vuelidate)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.filter('date', dateFilter);
Vue.filter('priceFormat', PriceFilter);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
