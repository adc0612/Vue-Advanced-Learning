<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in this.askItems" :key="item.title" class="item-wrap">
        <div class="points">
          {{item.points}}
        </div>
        <div class="news-item">
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
          </p>
          <small class="link-text">
            {{item.time_ago}} by 
            <router-link :to="`/user/${item.user}`" class="txt">{{item.user}}</router-link>
          </small>
        </div>
      </li>
     </ul>  -->
  </div>
  
</template>

<script>
// import { mapState } from 'vuex';
// import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
export default {
   components: {
    ListItem,
  }
  // computed:{
  //   // #3: mapGetters이용해서 vuex에서 getters에서 정의한 function호출
  //   ...mapGetters({
  //     askItems: 'fetchedAsk',
  //   })
  //   // #2: mapState이용해서 vuex에 있는 state를 바로 접촉해서 이어준다.
  //   // ...mapState({
  //   //   fetchedAsk: state => state.ask;
  //   // })
  //   // #1: fuction으로 store.stat.ask를 return해주는 방식
  //   // ask(){
  //   //   return this.$store.state.ask;
  //   // }
  // },
  // created(){
  //   this.$store.dispatch('FETCH_ASK');
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