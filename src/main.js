import Vue from 'vue'
import App from './App.vue'
import request from "./mixins/req";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
