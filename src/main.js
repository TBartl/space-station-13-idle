import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/GlobalStyle.css';

import store from "@/state/store.js";

import { BPopover } from 'bootstrap-vue'
Vue.component('b-popover', BPopover)

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })


Vue.config.productionTip = false

Vue.filter('cleanNum', function (value) {
	if (value == undefined) return "";
	return value.toLocaleString();
})

Vue.filter('stat', function (value) {
	if (value == undefined) return "";
	return +value.toFixed(2);
})
Vue.filter('aggressive', function (value) {
	if (value == undefined) return 0;
	if (value >= 1000 && !store.getters["settings/showFullValues"]) {
		let e = 0;
		while (value >= 1000) {
			e++;
			value /= 1000;
		}
		value = Math.floor(value * 10) / 10;
		let symbols = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
		let symbol = symbols.length < e ? `e${e * 3}` : symbols[e];
		return `>${value}${symbol}`;
	}
	return value.toLocaleString();
})

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')

store.dispatch('chrono/updateOfflineTime');
store.dispatch("cleanup");
store.dispatch("_resume");
