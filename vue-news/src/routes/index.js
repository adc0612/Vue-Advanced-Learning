import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

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
            //component: path로 지정해준 url경로로 갔을 때 보여줄 component
            component: NewsView,
        },
        {
            //path: url 주소
            path: '/ask',
            //component: path로 지정해준 url경로로 갔을 때 보여줄 component
            component: AskView,
        },
        {
            //path: url 주소
            path: '/jobs',
            //component: path로 지정해준 url경로로 갔을 때 보여줄 component
            component: JobsView,
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