<template>
    <div class="home">
        <el-row>
            <el-col   :span="24">
            <div class="head">Today Status</div>
            </el-col>
        </el-row>
        <el-row type="flex" class="cards" justify="center">
            <el-col  class="card"  :span="6" v-for="item in labels">
                <el-card :class="item.class"  url="#">
                    <div class="card-label">{{item.name}}</div>
                    <hr>
                    <div class="card-label">{{item.data}}</div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
            <hr>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
            <LineChart></LineChart>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import LineChart from '../widgets/LineChart';
    export default {
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('created');
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
        },
        updated() {
            console.log('updated');
        },
        activated() {
            console.log('activated');
        },
        deactivated() {
            console.log('deactivated');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
        },
        destroyed() {
            console.log('destroyed');
        },
        data() {
            return {
                labels: [{
                    name: 'Unhandle',
                    data: '31',
                    url: '',
                    class: 'unhandle-ticket'
                }, {
                    name: 'Handling',
                    data: '35',
                    url: '',
                    class: 'handling-ticket'
                }, {
                    name: 'All',
                    data: '67',
                    url: '',
                    class: 'all-ticket'
                }, {
                    name: 'Failed',
                    data: '1',
                    url: '',
                    class: 'failed-ticket'
                }]
            }
        },
        components: {
            LineChart
        }
    }
</script>
<style scoped>
    .card {
        margin-left: 50px;
        margin-right: 50px;
    }
    
    .cards {
        margin-top: 10px;
        margin-bottom: 20px;
    }
    
    .head {
        margin-top: 10px;
        text-align: center;
    }
    
    .unhandle-ticket {
        background-color: #41dcdc;
    }
    
    .handling-ticket {
        background-color: #48ff56;
    }
    
    .all-ticket {
        background-color: #2c60f0
    }
    
    .failed-ticket {
        background-color: #e40000;
    }
</style>