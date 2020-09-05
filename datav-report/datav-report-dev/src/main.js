import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vue-echarts.js'
import './plugins/v-charts.js'
import Echarts from 'echarts'
import './style/index.css'

Vue.config.productionTip = false

Vue.prototype.$echarts = Echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
