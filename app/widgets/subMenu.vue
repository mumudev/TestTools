<template>
    <div class="ui inverted menu">
        <div class="item">
            <img src="/images/logo.png" class="logo" style="width:1.8em;" >
</div>
<a class="item" v-for="page in pages" :href="page.url">
            {{page.name}} 
        </a>
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