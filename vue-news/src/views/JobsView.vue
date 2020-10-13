<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListFetchMixin from '../mixins/ListFetchMixin.js';

export default {
   components: {
    ListItem,
  },
  mixins: [ListFetchMixin],
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