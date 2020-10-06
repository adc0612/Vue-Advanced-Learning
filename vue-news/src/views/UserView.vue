<template>
  <div>user</div>
</template>

<script>
export default {
  creted(){
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style>

</style>