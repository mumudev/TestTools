<template>
  <div class='home'>
    <subMenu :pages='pages'></subMenu>
  </div>
</template>

<script>
  import subMenu from '../widgets/subMenu.vue'

  export default {
    props: ['pages'],
    data() {
      return {
      }
    },
    components: {
      subMenu
    }
  }
</script>