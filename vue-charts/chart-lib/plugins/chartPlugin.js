// Vue.use 를 사용하는 것들은 vue에서 제공하는 plugin이다.
// 공통적으로 사용할 코드들 입력

import Chart from 'chart.js';

export default{
    install(Vue){
        // Vue.prototype 객체의 속석을 확장하는 것
        // 아래 처럼 prototype으로 선언하면
        // 어디에서든지 this.$_Chart를 쓰면 import Chart from'chart.js';가 불러진다.
        // $_는 vue.js에서 권고하는 plugin이름
        Vue.prototype.$_Chart = Chart;


    }
}