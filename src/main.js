import Vue from 'vue'
import App from './App.vue'
import router from "./router";
// import { makeServer } from "./server"
import request from "./mixins/req";

Vue.config.productionTip = false

// if (process.env.NODE_ENV === "development") {
//   makeServer()
// }

Vue.mixin({...request})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
