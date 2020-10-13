<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key="item.title" class="item-wrap">
        <div class="points">
          {{item.points || 0}}
        </div>
        <div class="news-item">
          <p class="news-title">
            <template v-if="item.domain">
                <a v-bind:href='item.url'>{{item.title}}</a>
            </template>
            <template v-else>
                <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{item.time_ago}} by 
            <router-link 
            v-if="item.user"
            :to="`/user/${item.user}`" class="txt">{{item.user}}</router-link>
            <a :href="item.url" v-else>
                {{item.domain}}
            </a>
          </small>
        </div>
      </li>
     </ul> 
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // listItems 아이템들을 route 이름에 따라 가져온다.
    listItems() {
        // const name = this.$route.name;
        // if (name === 'news'){
        //     return this.$store.state.news;
        // }else if (name === 'ask'){
        //     return this.$store.state.ask;
        // }else {
        //     return this.$store.state.jobs;
        // }
        return this.$store.state.list;
    },
  },
  created(){
    // function을 해당 route이름에 따라 가져온다.
    // const name = this.$route.name;
    // if (name === 'news'){
    //     this.$store.dispatch('FETCH_NEWS');
    // }else if (name === 'ask'){
    //     this.$store.dispatch('FETCH_ASK');
    // }else if (name === 'jobs'){
    //     this.$store.dispatch('FETCH_JOBS');
    // }
  }

}
</script>

<style scoped>
.item-wrap {
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
  }
.points {
    min-width: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    border: 1px solid #eee;
    color: #42b883;
    font-weight: bold;
}
.news-item {
  padding-left: 15px;
}
.news-title{
  padding: 7px 0;
}
.news-title>a{
  font-weight: 800;
}
.news-title>a:hover{
  color:#43b07f;
}
.link-text > .txt:hover{
  color: #159159;
}
</style>