import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/GlobalStyle.css';

import store from "@/state/store.js";

import { BPopover } from 'bootstrap-vue'
Vue.component('b-popover', BPopover)

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true})


Vue.config.productionTip = false

Vue.filter('cleanNum', function (value) {
	var suffix = "";
	if (value.length >= 10000000) {
		value = Math.round(value / 1000000);
		suffix = "M";
	} else if (value.length >= 100000) {
		value = Math.round(value / 1000);
		suffix = "K";
	}
	return value.toLocaleString();
})

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
