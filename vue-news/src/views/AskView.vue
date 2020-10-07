<template>
  <div>
      <div v-for="item in askItems" :key="item.title"> 
        <!-- <a :href="item.url">{{item.title}}</a> -->
        <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
        <small>{{item.time_ago}} by {{item.user}}</small> 
      </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed:{
    // #3: mapGetters이용해서 vuex에서 getters에서 정의한 function호출
    ...mapGetters({
      askItems: 'fetchedAsk',
    })
    // #2: mapState이용해서 vuex에 있는 state를 바로 접촉해서 이어준다.
    // ...mapState({
    //   fetchedAsk: state => state.ask;
    // })
    // #1: fuction으로 store.stat.ask를 return해주는 방식
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>