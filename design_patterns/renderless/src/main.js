import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 1. 기본구조
  // render: function(createElement){
  //   return createElement(App);
  // },

  // 2. Vue는 virtaul Dom을 사용한다.
  // hyperscript를 h로 줄여 쓴다.
  // render: function(h){
  //   return h(App);
  // },

  // 3. render function을 h로 줄여서 화살표 함수 적용
  // render: (h) => {
  //   return h(App);
  // },

  // 4. 화살표 함수로 인자가 하나면 생략해서
  // render: h=> h(App),



}).$mount('#app')
