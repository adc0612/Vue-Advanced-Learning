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
    // promise 기반 
    // 예외처리는 then catch로
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then((response) => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch((error) => console.log(error));
    // },

    // async 기반 
    // 예외 처리는 try catch로
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },


    // context대신 바로 context안에 있는 commit을 {commit}으로 받아온다.
    // response대신 바로 response안에 있는 data를 {data}로 받아온다.
    async FETCH_JOBS({commit}) {
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
    },
    async FETCH_ASK({commit}) {
            const response = await fetchAskList();
            commit('SET_ASK', response.data);
            return response;
    },
    async FETCH_USER({commit},userName) {
            const response = await fetchUserInfo(userName);
            commit('SET_USER', response.data);
            return response;
    },
    async FETCH_ITEM({commit},itemId) {
            const response = await fetchItemInfo(itemId);
            commit('SET_ITEM', response.data);
            return response;
    },
    async FETCH_List({commit},pageName) {
            const response = await fetchList(pageName);
            console.log(4);
            commit('SET_LIST', response.data);
            return response;
    },
}