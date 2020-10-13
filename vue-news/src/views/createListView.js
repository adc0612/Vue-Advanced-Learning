// 데이터 요청하는건 이 createListView.js에서 할 것이고
// Listview.vue에서는 들어오는 데이터를 흘러나오게만 할려는것이다.

import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name){
    return{
        // 재사용 될 component가 들어갈 자리
        name: name,
        created() {
            bus.$emit('start:spinner');
            // route name을 FETCH_LIST인자를 보내 해당 json 데이터를 state.list에 담게하는 action을 실행
            this.$store.dispatch('FETCH_List', this.$route.name)
            .then(()=>{
                console.log('fetched');
                bus.$emit('end:spinner');
            })
            .catch((error)=>{
                console.log(error);
            });
        },
        render(createElement){
            return createElement(ListView);
        },
        
    }
}