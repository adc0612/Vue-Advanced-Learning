<template>
  <li>
    <slot>
      <!-- NOTE: 등록하는 곳에서 정의할 화면 영역 -->
    </slot>
    <!-- {{item}} -->
  </li>
</template>

<script>
export default {
    // 내려오는 props값을 item배열에 받고 뿌려준다
    props: ['item'],
}
</script>