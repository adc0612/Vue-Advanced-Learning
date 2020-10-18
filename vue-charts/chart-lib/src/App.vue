<template>
  <div>
      <h1>Chart.js</h1>
      <bar-chart v-on:refresh:chart="refreshChart" v-bind:propsdata="chartDataSet"></bar-chart>
      <line-chart></line-chart>
  </div>
</template>

<script>
// BarChart component들고오기
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue'

export default {
    //컴포넌트 속성 && 인스턴스 옵션
    // 컴포넌트 등록
    components:{
        BarChart,
        LineChart,
    },
    data(){
        return {
            // chartDataSet은 Backend에서 데이터를 들고왔다는 가정
            chartDataSet: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
            }]
        }
    },
    methods: {
        // BarChart.vue에서 발생된 event를 여기서 지정해서 발생시킨다.
        refreshChart() {
            this.chartDataSet = [10,20];
        },
    },
    created() {
        // Backend에서 데이터를 가져온다는 가정
        // axios.get('charts/line/1')
        // .then(response => {
        //         this.chartDataSet = response.data;
        //         return response;
        //     })
        // .catch(error => console.log(error));
    },
}
</script>

<style>

</style>