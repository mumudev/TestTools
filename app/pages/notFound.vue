<template>
  <div class='not-found'>
    <subMenu :pages='pages'></subMenu>
    {{errMsg}}
  </div>
</template>

<script>
    import subMenu from '../widgets/subMenu.vue'
    export default {
        props: ['pages'],
        data() {
            return {
                errMsg: '404! Page not found!'
            }
        },
        components: {
            subMenu
        }
    }
</script>