export default {
    //actions에서 보낸 데이터를 인자로 받고 state자체를 인자를 받아 해당되는 데이터를 넣어준다.
    SET_NEWS(state, newsData) {
        state.news = newsData;
    },
    SET_JOBS(state, jobsData) {
        state.jobs = jobsData;
    },
    SET_ASK(state, askData) {
        state.ask = askData;
    },
    SET_USER(state, userData){
        state.user = userData;
    },
    SET_ITEM(state, itemData){
        state.item = itemData;
    },
    SET_LIST(state, pageData){
        state.list = pageData;
    },
}