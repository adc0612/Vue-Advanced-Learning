<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in this.$store.state.news" :key="item.title" class="item-wrap">
        <div class="points">
          {{item.points}}
        </div>
        <div class="news-item">
          <p class="news-title">
            <a v-bind:href='item.url'>{{item.title}}</a>
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
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
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

    // bus.js로 Spinner 이벤트를 상위컴포넌트인 App.vue로 넘기기 위해 emit함
    bus.$emit('start:spinner');
    // 일부러 timeout3초를 걸어서 spinner가 보이게 적용되어있음
    setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
      .then(()=>{
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((error)=>{
        console.log(error);
      });
    },3000);
  },

  components: {
    ListItem,
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
.link-text > .txt{
  /* font-weight: 800; */
}
.link-text > .txt:hover{
  color: #159159;
}
</style>