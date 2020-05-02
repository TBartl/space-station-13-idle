import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/GlobalStyle.css';

import store from "@/state/store.js";

import { BPopover } from 'bootstrap-vue'
Vue.component('b-popover', BPopover)

Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
