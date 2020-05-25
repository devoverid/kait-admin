<template>
    <div class='main-content dashboard'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
           <div class="col-md-3 col-12">
                <kait-card>
                    <div class="flex justify-between p-5 pb-0">
                        <div class="statistic">
                            <h5 class='text-gray-600 text-sm uppercase font-bold tracking-wider'>Users</h5>
                            <h1 class='font-medium tracking-tighter mb-0'>2,089</h1>
                        </div>
                        <div class="percentage">
                            <h4 class='text-green-600'>+20%</h4>
                        </div>
                    </div>
                    <line-chart :height='100' :labels="lineChart1.labels" :data="lineChart1.data" :tooltip="lineChart1.tooltipText" :borderColor="lineChart1.borderColor"/>
                </kait-card>
            </div>
            <div class="col-md-3 col-12">
                <kait-card>
                    <div class="flex justify-between p-5 pb-0">
                        <div class="statistic">
                            <h5 class='text-gray-600 text-sm uppercase font-bold tracking-wider'>Exams</h5>
                            <h1 class='font-medium tracking-tighter mb-0'>13</h1>
                        </div>
                        <div class="percentage">
                            <h4 class='text-red-600'>-10%</h4>
                        </div>
                    </div>
                    <line-chart :height='100' :labels="lineChart2.labels" :data="lineChart2.data" :tooltip="lineChart2.tooltipText" :borderColor="lineChart2.borderColor"/>
                </kait-card>
            </div>
            <div class="col-md-3 col-12">
                <kait-card>
                    <div class="flex justify-between p-5 pb-0">
                        <div class="statistic">
                            <h5 class='text-gray-600 text-sm uppercase font-bold tracking-wider'>Ongoing Exam</h5>
                            <h1 class='font-medium tracking-tighter mb-0'>3</h1>
                        </div>
                        <div class="percentage">
                            <h4 class='text-green-600'>+33%</h4>
                        </div>
                    </div>
                    <line-chart :height='100' :labels="lineChart3.labels" :data="lineChart3.data" :tooltip="lineChart3.tooltipText" :borderColor="lineChart3.borderColor"/>
                </kait-card>
            </div>
            <div class="col-md-3 col-12">
                <kait-card>
                    <div class="flex justify-between p-5 pb-0">
                        <div class="statistic">
                            <h5 class='text-gray-600 text-sm uppercase font-bold tracking-wider'>Online  Users</h5>
                            <h1 class='font-medium tracking-tighter mb-0'>524</h1>
                        </div>
                        <div class="percentage">
                            <h4 class='text-green-600'>+20%</h4>
                        </div>
                    </div>
                    <line-chart :height='100' :labels="lineChart4.labels" :data="lineChart4.data" :tooltip="lineChart4.tooltipText" :borderColor="lineChart4.borderColor"/>
                </kait-card>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6 col-12">
                <kait-card>
                    <kait-card-header>
                        School
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
            <div class="col-xl-3 col-12">
                <kait-card>
                    <kait-card-header>
                        To-do List
                    </kait-card-header>
                    <kait-card-body class='no-pad'>
                        <todo-list title="Initialize Server" icon="far fa-clock" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." backgroundColor="rgba(46, 82, 254,.8)"/>
                        <todo-list title="Create an Exam" icon="fas fa-file" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." backgroundColor="rgba(46, 82, 254,.8)"/>
                        <todo-list title="Import Data" icon="fas fa-download" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." backgroundColor="rgba(46, 82, 254,.8)"/>
                    </kait-card-body>                    
                </kait-card>
            </div>
            <div class="col-xl-3 col-12">
                <kait-card>
                    <kait-card-header>
                        Incoming Exam
                    </kait-card-header>
                    <kait-card-body class='no-pad'>
                        <div class="table-responsive">
                            <kait-table type="hover">
                                <tr>
                                    <td class='font-bold'>Math</td>
                                    <td>SMKN 10</td>
                                    <td><i class='far fa-clock'></i> 2h 10m 52s</td>
                                </tr>
                                <tr>
                                    <td class='font-bold'>English</td>
                                    <td>SMKN 26</td>
                                    <td><i class='far fa-clock'></i> 4h 05m 10s</td>
                                </tr>
                                <tr>
                                    <td class='font-bold'>B Indo</td>
                                    <td>SMKN 10</td>
                                    <td><i class='far fa-clock'></i> 6h 02m 52s</td>
                                </tr>
                                <tr>
                                    <td class='font-bold'>Science</td>
                                    <td>SMKN 10</td>
                                    <td><i class='far fa-clock'></i> 18h 54m 52s</td>
                                </tr>
                                <tr>
                                    <td class='font-bold'>PKN</td>
                                    <td>SMKN 10</td>
                                    <td><i class='far fa-clock'></i> 18h 54m 52s</td>
                                </tr>
                                <tr>
                                    <td class='font-bold'>IPS</td>
                                    <td>SMKN 10</td>
                                    <td><i class='far fa-clock'></i> 18h 54m 52s</td>
                                </tr>
                            </kait-table>
                        </div>
                    </kait-card-body>
                </kait-card>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-12"></div>
            <div class="col-md-4 col-12">
                <div class="card">
                    <div class="card-header">Recent Activities</div>
                    <div class="card-body no-pad">
                        <ul>
                            <li class='media'>
                                <avatar :src="require(`@/assets/images/avatar/avatar-s-23.png`)" size="large" class='mr-4'></avatar>
                                <div class="media-body">
                                    <div class="float-right">12m</div>
                                    <div class="media-title">Ahmad Saugi</div>
                                    <span class="media-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui quisquam perferendis ex officiis aspernatur</span>
                                </div>
                            </li>
                            <li class='media'>
                                <avatar :src="require(`@/assets/images/avatar/avatar-s-8.png`)" size="large" class='mr-4'></avatar>
                                <div class="media-body">
                                    <div class="float-right">12m</div>
                                    <div class="media-title">Sharen Alicia</div>
                                    <span class="media-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui quisquam perferendis ex officiis aspernatur</span>
                                </div>
                            </li>
                            <li class='media'>
                                <avatar :src="require(`@/assets/images/avatar/avatar-s-23.png`)" size="large" class='mr-4'></avatar>
                                <div class="media-body">
                                    <div class="float-right">12m</div>
                                    <div class="media-title">Bingung Gue</div>
                                    <span class="media-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui quisquam perferendis ex officiis aspernatur</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LineChart from './../../components/Vendor/Chart/LineChart';
import DoughnutChart from './../../components/Vendor/Chart/DoughnutChart'
import TodoList from './../../components/Misc/TodoList'
import Avatar from './../../components/Misc/Avatar';

export default {
    components: {
        LineChart, DoughnutChart, TodoList, Avatar
    },
    data() {
        return {
            lineChart1: {
                tooltipText: "Total Users",
                labels: ['27 Apr 2020','28 Apr 2020','29 Apr 2020','30 Apr 2020','31 Apr 2020','01 May 2020','02 May 2020','03 May 2020','04 May 2020'],
                data: [50, 61, 55, 72, 50, 90, 52, 65, 41],
                borderColor: '#3057FE',
            },
            lineChart2: {
                tooltipText: "Exams",
                labels: ['27 Apr 2020','28 Apr 2020','29 Apr 2020','30 Apr 2020','31 Apr 2020','01 May 2020','02 May 2020','03 May 2020','04 May 2020'],
                data: [8, 12, 5, 19, 2, 4, 12, 7, 9],
                borderColor: '#eb4d4b',
            },
            lineChart3: {
                tooltipText: "Ongoing Exam",
                labels: ['27 Apr 2020','28 Apr 2020','29 Apr 2020','30 Apr 2020','31 Apr 2020','01 May 2020','02 May 2020','03 May 2020','04 May 2020'],
                data: [2, 2, 2, 4, 2, 2, 3, 2, 3],
                borderColor: '#22a6b3',
            },
            lineChart4: {
                tooltipText: "Online Users",
                labels: ['27 Apr 2020','28 Apr 2020','29 Apr 2020','30 Apr 2020','31 Apr 2020','01 May 2020','02 May 2020','03 May 2020','04 May 2020'],
                data: [402, 552, 450, 450, 320, 600, 420, 700, 524],
                borderColor: '#f0932b',
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
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/plugins/chart/_chartjs";
</style>