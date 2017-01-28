<template>
    <div class="ui inverted menu">
        <div class="item">
            <img src="/logo.png" class="logo">
        </div>
        <a class="item" v-for="page in pages" :href="page.url">{{page.name}}</a>
        <a class="right aligned item" href="/logout">
            <i class="sign out icon"></i>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            pages: {
                default: function () {
                    return [];

                }
            }
        }
    }
</script>
<style>
.logo{
width:1.8em;
}
</style>