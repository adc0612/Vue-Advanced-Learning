import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from "../api/index.js";

export default {
    // context를 인자로 받아서 mutations function이름과 axios 호출 해서 받은 response를 commit한다.
    FETCH_NEWS(context) {
        fetchNewsList()
            .then((response) => context.commit('SET_NEWS', response.data))
            .catch((error) => console.log(error));
    },
    // context대신 바로 context안에 있는 commit을 {commit}으로 받아온다.
    // response대신 바로 response안에 있는 data를 {data}로 받아온다.
    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(({
                data
            }) => commit('SET_JOBS', data))
            .catch((error) => console.log(error));
    },
    FETCH_ASK({commit}) {
        fetchAskList()
            .then(({
                data
            }) => commit('SET_ASK', data))
            .catch((error) => console.log(error));
    },
    FETCH_USER({commit}, userName){
        fetchUserInfo(userName)
        .then(({data}) => commit('SET_USER', data))
        .catch((error) => console.log(error));
    }
}