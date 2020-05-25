// CommitChart.js
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['labels', 'data', 'tooltip', 'backgroundColors'],
  data() {
    return {
      htmlLegend:null
    }
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        datasets: [
          {
            data: this.data,
            backgroundColor: this.backgroundColors,
            weight: 100,
            label: 'Dataset 1',
          },
        ],
        labels: this.labels,
      },
      {
        cutoutPercentage: 70,
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: {
          },
        },
        legend: {
          display: false,
          // position: 'right',
          // align: 'left',
          // labels: {
          //   boxWidth: 10,
          //   usePointStyle: true,
          //   padding: 30,
          // },
        },
        title: {
          display: false,
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      }
    )

        this.$store.commit('SET_DOUGHNUT_LEGEND', this.generateLegend());
        
        console.log(this.htmlLegend)
  },
}
