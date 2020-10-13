import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: {},
        list: [],
    },
    getters: {
        //getters를 이용해 this.$store.state.ask처럼 복잡하게 접근해서 데이터 얻기 보다
        // 아래같은 함수 한번 호출로 편하게 가져올 수 있다.
        fetchedAsk(state){
            return state.ask;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    mutations,
    actions,
});