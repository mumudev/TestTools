<template>
    <div class='home'>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <subMenu :pages='pages'></subMenu>
    </div>
</template>

<script>
    import subMenu from '../widgets/subMenu.vue'
    import $http from '../methods/http'
    $http.Get('/v1/api/user');
    export default {
        props: ['pages'],
        data() {
            return {}
        },
        components: {
            subMenu
        }
    }
</script>