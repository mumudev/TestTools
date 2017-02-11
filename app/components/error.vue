<template>
  <div class='not-found'>
    {{errMsg}}
  </div>
</template>

<script>
    export default {
        data() {
            return {
                errMsg: '404! Page not found!'
            }
        },
        components: {
        }
    }
</script>