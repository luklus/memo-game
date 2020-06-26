import Vue from 'vue'
import Memo from './Memo'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(Memo),
}).$mount('#memo')
