import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import '@css/reset.css'
import '@css/border.css'
import '@css/iconfont.css'
import '@css/iconfont.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
