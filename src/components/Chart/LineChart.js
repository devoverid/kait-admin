// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ["labels","data","tooltip","borderColor"],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            label: this.tooltip,
            backgroundColor: 'transparent',
            borderColor: this.borderColor,
            borderWidth: 3,
            borderCapStyle: 'round',
            lineDashOffset: 0,

            pointBorderWidth: 100,
            pointBorderColor: 'transparent',
            pointRadius: 3,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: 'rgba(63,82,227,1)',
          },
        ],
      },
      {
        layout: {
          padding: {
            left: -10,
            top: 10,
          },
        },
        tooltips: {
          intersect: false,
          titleFontFamily: 'Helvetica',
          titleMarginBottom: 10,
          xPadding: 10,
          yPadding: 10,
          cornerRadius:3,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                drawBorder: false,
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
        },
      }
    )
  }
}