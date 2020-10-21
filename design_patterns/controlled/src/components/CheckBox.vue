<template>
  <!-- <input type="checkbox" v-model="checked"> -->
  <input type="checkbox" :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
    // @input 이벤트
    // :value props
    props: 
    // ['checked'],
    ['value'],
    methods:{
        toggleCheckBox(){
            this.$emit('input', !this.value);
        }
    }
}
</script>

<style>

</style>