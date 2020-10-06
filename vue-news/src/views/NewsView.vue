<template>
  <div>
      <p v-for="item in this.$store.state.news" :key="item.title">
        <a v-bind:href='item.url'>{{item.title}}</a>
        <small>
          {{item.time_ago}} by 
          <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
        </small>
      </p>
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     users: []
  //   }
  // },

  created() {
    // var vm = this;
    // fetchNewsList()
    // .then(response => {
    //   console.log(response);
    //   vm.users = response.data;
    // })
    // .catch(error => console.log(error))
    this.$store.dispatch('FETCH_NEWS');
  },

}
</script>

<style>

</style>