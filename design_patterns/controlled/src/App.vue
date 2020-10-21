<template>
  <div id="app">
    <!-- controlled component -->
    <!-- component를 세밀한 단위로 사용하고 싶을 때 유용 -->
    <!-- checkbox를 component화 했지만 상태는 상단에서 조정하고 싶을 떄 -->

    <!-- 밑에 처럼 그냥 props으로 checked 값을 CheckBox.vue컴포넌트로 내렸을 때 -->
    <!-- 클릭하기전에는 에러가 안나지만 checkbox를 클릭 한 순간 에러가 난다 -->
    <!-- 이유는 checkbox를 클릭한 순간 내려준 props값이 바뀌므로 하위컴포넌트에서 props값이 바뀌게 된다. -->
    <!-- 하위 컴포넌트에서는 props값을 바꾸면 컴포넌트 통신에 위배되므로 에러를 발생시킨다. -->
    <!-- <check-box :checked="checked"></check-box> -->

    <!-- props말고 v-model로 내린다. -->
    <!-- v-medel은 내부적으로 input이벤트와 value값으로 조작 됨 -->
    <!-- 받을때는 :value로 받고 @input 이벤트로 날린다. -->
    <!-- 즉 내릴떄는 :value라는 props로 내리고 올릴때는 @input event로 올린다. -->
    <check-box v-model="checked"></check-box>
  </div>
</template>

<script>
import CheckBox from './components/CheckBox.vue';
export default {
  components: {
    CheckBox,
  },
  data(){
    return{
      checked: false,
    }
  }
}
</script>

<style>
</style>
