import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AllA from './module/moduleA' // 導入所有接口
import { A1 as mya1 } from './module/moudleB' // 只導入某幾個接口
Vue.config.productionTip = false

console.log(AllA, mya1)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
