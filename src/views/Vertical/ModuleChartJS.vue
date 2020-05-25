<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>ChartJS</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>
                        Line Chart
                    </kait-card-header>
                    <kait-card-body class='no-pad'>
                        <line-chart :height='100' :labels="lineChart1.labels" :data="lineChart1.data" :tooltip="lineChart1.tooltipText" :borderColor="lineChart1.borderColor"/>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>
                        Line Chart With Legend
                    </kait-card-header>
                    <kait-card-body class='no-pad'>
                        <line-chart :height='100' :labels="lineChart1.labels" :data="lineChart1.data" :tooltip="lineChart1.tooltipText" :borderColor="'#D64737'" :legend="true" legendPosition="top"/>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>
                        DoughnutChart
                    </kait-card-header>
                    <kait-card-body>
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-6">
                                <doughnut-chart  :labels="doughnutChart.labels" :backgroundColors="doughnutChart.backgroundColors" :data="doughnutChart.data"/>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-3 flex align-items-center">
                                <div class="legend" v-html="doughnutLegend"></div>
                            </div>
                        </div>
                    </kait-card-body>
                </kait-card>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash';
import LineChart from './../../components/Vendor/Chart/LineChart';
import DoughnutChart from './../../components/Vendor/Chart/DoughnutChart'

export default {
    components: {
        DoughnutChart, LineChart
    },
    data() {
        return {
            lineChart1: {
                tooltipText: "Total Users",
                labels: ['27 Apr 2020','28 Apr 2020','29 Apr 2020','30 Apr 2020','31 Apr 2020','01 May 2020','02 May 2020','03 May 2020','04 May 2020'],
                data: [50, 61, 55, 72, 50, 90, 52, 65, 41],
                borderColor: '#3057FE',
            },
            doughnutChart: {
                labels: ['SMKN 10', 'SMKN 24', 'SMKN 51', 'SMKN 26', 'SMKN 1'],
                data: [10,20,30,40,50],
                backgroundColors: ['rgba(243, 156, 18,.8)', 'rgba(54, 100, 253,.8)', 'rgba(192, 57, 43,.8)', 'rgba(42, 74, 255,.8)', 'rgba(22, 160, 133,.8)']
            }
        }
    },
    computed: {
        doughnutLegend() {
            return this.$store.state.doughnutLegend;
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/plugins/chart/_chartjs";
</style>