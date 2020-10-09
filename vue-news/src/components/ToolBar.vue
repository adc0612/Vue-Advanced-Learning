<template>
  <div class="header">
      <router-link to="/news">news</router-link>
      <i class="fas fa-grip-lines-vertical"></i> 
      <router-link to="/ask">ask</router-link>
      <i class="fas fa-grip-lines-vertical"></i>
      <router-link to="/jobs">jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    color: #fff;
    background-color: #42b883;
    display: flex;
    padding: 15px;
}
.header .router-link-exact-active{
    color: #35495e;
    text-decoration: underline;
}
.header > a{
    color:#fff;
    padding: 0 10px;
    font-weight: 800;
}
.fa-grip-lines-vertical{
    font-size: 20px;
}
</style>