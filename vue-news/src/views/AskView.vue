<template>
  <div>
      <div v-for="user in users" :key="user.title"> {{user.title}} </div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js';
export default {
  data(){
    return {
      users: []
    }
  },
  created(){
    var vm = this;
    fetchAskList()
    .then(response => {
      console.log(response);
      vm.users = response.data;
    })
    .catch(error => console.log(error))
  }
}
</script>

<style>

</style>