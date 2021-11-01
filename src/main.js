
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import VueSocialSharing from 'vue-social-sharing'
import styles from './styles.scss'
Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    file_url:"https://firebasestorage.googleapis.com/v0/b/howmanydaystill.appspot.com/o/"
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(VueSocialSharing);