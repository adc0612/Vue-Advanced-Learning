<template>
  <div id="app">
    <!-- 밑에 건 Camel Case 기법이고 Vue에서 Strongly recommend 하는 방법 (둘 다 되긴된다.) -->
    <!-- <ToolBar></ToolBar> -->
    <!-- 밑에 건 Kebab 기법이고 Essential recommend방식이지만 vsCode에서 편하게 사용하려고 이렇게 한다.  -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components:{
    ToolBar,
  },
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}

.page-enter-active, .page-leave-active{
  transition: opacity .5s;
}
.page-enter, .page-leave-to{
  opacity: 0;
}
</style>
