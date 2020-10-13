import Vue from 'vue';

// export를 두가지로 가능
// 1.
// export const bus = new Vue();
// 위와 같이 export하면 아래와 같이 import 할 때 {bus}로만 import 가능 
// import {bus} from './bus.js'

// 2.
export default new Vue();
// 위와 같이 export default로 하면 아래와같이 import 할 때 변수를 암거나 쓸 수 있음
// import bus from './bus.js';