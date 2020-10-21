<script>
// renderless 컴포넌트는 templete 없이 즉 표현을 하지않는 component
// 이 컴포넌트 data provider component
import axios from 'axios';
export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
    // 상위 컴포넌트에서 props로 내린 url을 담아 axios get을 해서 가져온다.
    // 밑은 비동기 처리

      .then(response => {
        this.response = response.data;
        // data loading이 끝났디고 해서 loading = false
        this.loading = false;
      })
      .catch(error => {
        alert('[ERROR] fetching the data', error);
        console.log(error);
      });
  },
  render() {
    // 기본적으로 render 라는 하는 것은 컴포넌트 표현하는 것
    // 밑에는 보여주는것 말고 response하고 loading만
    // component 선언 한 곳에서 표현
    // $scoedSlots 덕분에 선언한 컴포넌트에서 response와, loading 접근 가능
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
}
</script>