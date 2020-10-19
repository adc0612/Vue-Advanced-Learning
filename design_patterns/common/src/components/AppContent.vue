<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item }}
      </li>
    </ul>
    <!-- 원래 methods안에서 emit해서 이벤트를 올리는데 밑에처럼 간단하게도 가능 -->
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
    //   props validation
    // 꼭 String만들어오게 되어있고 다른 속성값이 들어오면 error 발생
    // required: true하면 필수 값으로 지정
      type: Array,
      required: true,
    },
  },
}
</script>