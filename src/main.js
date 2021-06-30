import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'

// 创建事件总线
Vue.prototype.$bus = new Vue()
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store
})
