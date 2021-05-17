import Vue from 'vue'
import App from './App.vue'
import store from '@/core/vuex/index'
import router from "@/core/router";
import { BootstrapVue } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCzATU_j6vWKfJth5gYzIXC_3XDXBrfFDY",
    libraries: "places"
  }
  /**
   * Prod settings
   */
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


//
