import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. api 함수들을 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

// aync로 변환 후 try catch로 예외처리
async function fetchAskList(){
    try {
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchJobsList(){
    try {
        return await axios.get(`${config.baseUrl}jobs/1.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchUserInfo(userName){
    try {
        return await axios.get(`${config.baseUrl}user/${userName}.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchItemInfo(itemId){
    try {
        return await axios.get(`${config.baseUrl}item/${itemId}.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchList(pageName){
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }
}

export{
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
}