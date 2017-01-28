<template>
    <div>
        <subMenu :pages='pages'></subMenu>
    </div>
</template>

<script>
    import subMenu from '../widgets/subMenu.vue';
    export default {
        props: ['pages', 'dataTable'],
        beforeCreate() {},
        data() {
            return {
                url: '/v1/api/order',
                buttons: [{
                    text: 'Excel',
                    extend: 'excelHtml5',
                    className: 'ui button'
                }, {
                    text: '日期',
                    className: 'ui button blue date'
                }],
                columnDefs: [{
                    data: '_id',
                    name: 'id',
                    targets: 0,
                    className: "transition hidden"
                }]
            }
        },
        components: {
            dataTable,
            subMenu
        }
    }
</script>