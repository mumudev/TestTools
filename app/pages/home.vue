<template>
    <div class='home'>
    </div>
</template>

<script>
    import $http from '../methods/http'
    $http.Get('/v1/api/user');
    export default {
        props: ['pages'],
        data() {
            return {}
        },
        components: {
        }
    }
</script>