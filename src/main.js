import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App),
  el: '#app'
}).$mount('#app')
