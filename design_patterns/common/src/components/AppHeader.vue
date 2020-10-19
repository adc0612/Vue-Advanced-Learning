  
<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    //   props validation
    // 꼭 String만들어오게 되어있고 다른 속성값이 들어오면 error 발생
    title: String,
  }
}
</script>