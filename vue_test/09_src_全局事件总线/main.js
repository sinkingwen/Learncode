import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    //安装全局事件总线，$bus就是当前应用的vm
    Vue.prototype.$bus = this
  }
})

// new Vue({
//   // h==>createElement
//   render: h => h(App),
// }).$mount('#app')
