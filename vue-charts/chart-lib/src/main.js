import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from '../plugins/chartPlugin.js';

Vue.config.productionTip = false

// 아래 처럼 쓰게 되면
// chartPlugin.js에서 지정한 install안에 있는 코드들이 실행된다.
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
