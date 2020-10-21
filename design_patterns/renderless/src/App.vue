<template>
  <div>
<!-- renderless 컴포넌트는 templete 없이 즉 표현을 하지않는 component -->
<!-- renderless는 한 컴포넌트에서 axios통한 data가져오기 data(){}, created{}를 다른 컴포넌트로 분리해서 쓸 때 유용 -->
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
    <!-- FetchData.vue에서 $scoedSlots으로 선언한 response와, loading 접근 -->
      <div slot-scope="{response, loading}">
        <!-- slot- scope 선안 한 태그 내에서만 response와 loading 접근 가능 -->
        <!-- loading값이 false면 가져온 데이터 뿌려주고 아니면 loading.. 글씨 표현  -->
        <div v-if="!loading">
          <p>name: {{response.name}}</p>
          <p>name: {{response.email}}</p>
        </div>
        <div v-if="loading">
          loading....
        </div>
      </div>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue'
export default {
  components: {
    FetchData
  },
}
</script>