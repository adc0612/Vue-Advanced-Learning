<template>
  <div>
    <ul>
      <!-- <item>아이템 1</item>
      <item>아이템 2</item>
      <item>아이템 3</item>
      <item>아이템 4</item>
      <item>아이템 5</item> -->
      <!-- items안에 있는 수만큼 v-for를 돌려준다. -->
      <!-- props로 items안에있는 item을 하나씩 Item.vue로 넘겨서 하나씩 표현한다. -->
      <!-- <item v-for="item in items" :key="item.id" :item="item"></item> -->
      <!-- 이렇게 이용하면 slot으로 이용하는것 -->
      <!-- <item v-for="item in items" :key="item.id">{{item}}</item> -->
      <!-- slot으로 이용하면 유동적으로 component 이용 가능 -->
      <item>
        아이템 1 
      </item>
      <item>
        아이템 2
        <button>Click me</button>
      </item>
      <item>
        아이템 3
        <img src="./assets/logo.png" alt="Logo" width="100px">
      </item>
      <item>
        <div style="color: blue; font-size:20px;">아이템 4</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';
export default {
  components: {
    Item,
  },
  data(){
    return{
      items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5']
    }
  },
}
</script>