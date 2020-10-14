import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import bus from '../utils/bus.js';
import {store} from '../store/index.js';
// import createListView from '../views/createListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        //링크 처음 접속 했을 때 첫 페이지로 news 띄울려면 redirect 속성으로 news를 넣어준다.
        {
            path: '/',
            redirect: '/news',
        },
        {
            //path: url 주소
            path: '/news',
            name: 'news',
            //component: path로 지정해준 url경로로 갔을 때 보여줄 component
            component: NewsView,
            // component: createListView('NewsView'), //High Order Component 이용시 정의
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                // to (이동할 URL의 라우팅정보)
                // from (현재 URL의 라우팅정보)
                // next (function임)
                // 이동하려면 next()를 꼭 호출해야함
                // to.name에 현재 route 정보 들어있음
                store.dispatch('FETCH_List', to.name)
                .then(()=>{
                    console.log('fetched');
                    bus.$emit('end:spinner');
                    next();
                })
                .catch((error)=>{
                    console.log(error);
                });
            },
        },
        {
            //path: url 주소
            path: '/ask',
            name: 'ask',
            //component: path로 지정해준 url경로로 갔을 때 보여줄 component
            component: AskView,
            // component: createListView('AskView'), //High Order Component 이용시 정의
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_List', to.name)
                .then(()=>{
                    console.log('fetched');
                    bus.$emit('end:spinner');
                    next();
                })
                .catch((error)=>{
                    console.log(error);
                });
            },
        },
        {
            //path: url 주소
            path: '/jobs',
            name: 'jobs',
            //component: path로 지정해준 url경로로 갔을 때 보여줄 component
            component: JobsView,
            // component: createListView('JobsView'), //High Order Component 이용시 정의
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_List', to.name)
                .then(()=>{
                    console.log('fetched');
                    bus.$emit('end:spinner');
                    next();
                })
                .catch((error)=>{
                    console.log(error);
                });
            },
        },
        {
            //path: url 주소
            path: '/item/:id',
            //component: path로 지정해준 url경로로 갔을 때 보여줄 component
            component: ItemView,
        },
        {
            //path: url 주소
            // '/'뒤에 ':'하고 인자를 넣어서 다른 userview를 표현
            path: '/user/:id',
            //component: path로 지정해준 url경로로 갔을 때 보여줄 component
            component: UserView,
        },
    ]
});