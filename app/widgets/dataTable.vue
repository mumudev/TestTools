<template>
    <div class="order">
        <table id='datatable' class="ui celled table" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th v-for="column in columnDefs" :class='column.class'>{{column.name}}</th>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['url', 'columnDefs', 'buttons'],
        watch: {
            url: function () {
                console.log(1);
            }
        },
        ready() {
            this.$watch('url', function (newVal, oldVal) {
                console.log('newVal');//这里再感受下值拿到了没
            });
        },
        mounted() {
        },
        components: {
        },
    }
</script>
<style>
    tr.even{
        background-color: #f9f9f9;
    }
</style>