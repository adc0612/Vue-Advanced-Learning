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

/* _base.scss */
body, button, form, h1, h2, input, li, ol, p, select, table, td, textarea, th, ul, fieldset {
	margin: 0;
	padding: 0;
}
body, button, h1, h2, h3, h4, h5, h6, input, select, table, textarea {
	font-size: 16px;
	font-family: Dotum, '돋움', Helvetica, "Apple SD Gothic Neo", sans-serif;
}

button, input {
	border-radius: 0;
}

fieldset, img {
	border: 0;
}

ol, ul {
	list-style: none;
}

address, em {
	font-style: normal;
}

a {
	color: #000;
	text-decoration: none;
}

a:hover {
	text-decoration: none;
}

ol, ul {
	list-style: none;
}


.page-enter-active, .page-leave-active{
  transition: opacity .5s;
}
.page-enter, .page-leave-to{
  opacity: 0;
}
</style>
