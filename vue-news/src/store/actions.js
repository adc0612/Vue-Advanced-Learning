import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
} from "../api/index.js";

export default {
    // context를 인자로 받아서 mutations function이름과 axios 호출 해서 받은 response를 commit한다.
    FETCH_NEWS(context) {
        return fetchNewsList()
            .then((response) => {
                context.commit('SET_NEWS', response.data);
                return response;
            })
            .catch((error) => console.log(error));
    },
    // context대신 바로 context안에 있는 commit을 {commit}으로 받아온다.
    // response대신 바로 response안에 있는 data를 {data}로 받아온다.
    FETCH_JOBS({commit}) {
        return fetchJobsList()
            .then(({
                data
            }) => commit('SET_JOBS', data))
            .catch((error) => console.log(error));
    },
    FETCH_ASK({commit}) {
        return fetchAskList()
            .then(({
                data
            }) => commit('SET_ASK', data))
            .catch((error) => console.log(error));
    },
    FETCH_USER({commit}, userName){
        return fetchUserInfo(userName)
        .then(({data}) => commit('SET_USER', data))
        .catch((error) => console.log(error));
    },
    FETCH_ITEM({commit}, itemId){
        return fetchItemInfo(itemId)
        .then(({data}) => commit('SET_ITEM', data))
        .catch((error) => console.log(error));
    },
    FETCH_List({commit}, pageName){
        return fetchList(pageName)
        .then(({data}) => {
            console.log(4);
            commit('SET_LIST', data);
        })
        .catch((error) => console.log(error));
    },
}