import bus from '../utils/bus.js';

export default{
    // 재사용 될 component Option & Logic
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
}