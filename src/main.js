import Vue from 'vue'
import App from './App.vue'

import VeeValidate from 'vee-validate'; // url imported
Vue.use(VeeValidate);

import router from './router'; // installed via package manager (yarn/npm)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
