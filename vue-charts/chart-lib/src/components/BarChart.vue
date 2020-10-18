<template>
  <div>
      <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// install 한 것을 들고와야 되므로 import 한다.
// import할때 package.json에 보면 이름이 있기때문에 같은이름으로 써줘야 한다.
// import Chart from 'chart.js'

export default {
    //컴포넌트 속성 && 인스턴스 옵션
    // App.vue에서 받아온 propsdata를 props에 연결 후 사용
    props: ['propsdata'],
    mounted(){
        // var ctx = document.getElementById('barChart').getContext('2d');
        // vue의 reference 속성 이용
        var ctx = this.$refs.barChart.getContext('2d');
        var myChart = new this.$_Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsdata
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            },
            // 차트 한 부분을 클릭 했을 때 $emit으로 이벤트를 발생시켜 상위 컴포넌트인 app.vue에 전달
            onClick: function(){
                this.$emit('refresh:chart');
            }
        });
    },
}
</script>

<style>

</style>