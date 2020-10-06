<template>
  <div>
      <p v-for="item in fetchedJobs" :key="item.title"> 
        <a :href="item.url">{{item.title}}</a>
        <small>{{item.time_ago}}, {{item.domain}}</small>
      </p>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: {
    ...mapState({
      fetchedJobs: state => state.jobs
    }),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
  

}
</script>

<style>

</style>