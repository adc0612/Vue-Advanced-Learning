<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedJobs" :key="item.title" class="item-wrap">
        <div class="points">
          {{item.points || 0}}
        </div>
        <div class="news-item">
          <p class="news-title">
            <a v-bind:href='item.url'>{{item.title}}</a>
          </p>
          <small class="link-text">
            {{item.time_ago}}, {{item.domain}}
          </small>
        </div>
      </li>
     </ul>    -->
  </div>
</template>

<script>
// import {mapState} from 'vuex';

import ListItem from '../components/ListItem.vue';
export default {
   components: {
    ListItem,
  }
  // computed: {
  //   ...mapState({
  //     fetchedJobs: state => state.jobs
  //   }),
  // },
  // created() {
  //   this.$store.dispatch('FETCH_JOBS');
  // }
  

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
.link-text > .txt{
  /* font-weight: 800; */
}
.link-text > .txt:hover{
  color: #159159;
}
</style>