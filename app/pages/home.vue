<template>
    <div class=''>
        <div class="sidebar"></div>
        <el-row class="content">
            <el-col :span="24">
                123
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        props: ['pages'],
        data() {
            return {}
        },
        components: {
        }
    }
</script>

<style>
    body{
        margin:0;
    }
    .el-menu-vertical{
        position: absolute;
        left: 0;
        top: 57px;
        width:205px;
        background-color: lightskyblue;
        border-left-width: 0;
        height: 700px;
    }
    .content{
        margin-left: 210px;
        top: 57px;
    }
    .sidebar{
        left: 0;
        top: 0;
        height: 57px;
        background-color: lightskyblue;
    }
</style>