<template>
    <div>
        <subMenu :pages='pages'></subMenu>
        <dataTable :url='url' :buttons='buttons' :columnDefs='columnDefs'></dataTable>
    </div>
</template>

<script>
    import dataTable from '../widgets/dataTable.vue';
    import subMenu from '../widgets/subMenu.vue';
    export default {
        props: ['pages', 'dataTable'],
        mounted() {
            var self = this;
            this.$date_label = $('<label id="date_label"></label>');
            var nowDate = new moment().format('YYYY-MM-DD');
            this.$date_label.html(nowDate);
            $('.ui.button.blue.date').after(this.$date_label);
            $('.ui.button.blue.date').daterangepicker({
                singleDatePicker: true,
                format: "YYYY-MM-DD",
                calender_style: "picker_1"
            }, function(start, end, label) {
                var url = '/api/order?Submit_date=' + end.format('YYYY-MM-DD') + '&transfer=1';
                self.$children[1].datatable.ajax.url(url).load();
                self.$date_label.html(end.format('YYYY-MM-DD'));
            });
        },
        beforeCreate() {
            var nowDate = new moment().format('YYYY-MM-DD');
            this.url = '/api/order?Submit_date=' + nowDate + '&transfer=1';
        },
        data() {
            return {
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
                }, {
                    data: "Submit_date",
                    name: '提交时间',
                    targets: 1
                }, {
                    data: "handle_date",
                    name: '处理时间',
                    targets: 2
                }, {
                    data: "submitorderid",
                    name: '订单号',
                    targets: 3
                }, {
                    data: "loginname",
                    name: '代理商名称',
                    targets: 4
                }, {
                    data: "prodid",
                    name: '商品ID',
                    targets: 5
                }, {
                    data: "phone",
                    name: '充值号码',
                    targets: 6
                }, {
                    data: "phone_location",
                    name: '号码归属地',
                    targets: 7
                }, {
                    data: "num",
                    name: '流量',
                    targets: 8
                }, {
                    data: "state",
                    name: '状态',
                    targets: 9
                }, {
                    data: "transfer_name",
                    name: '转移商家',
                    targets: 10
                }, {
                    data: "transfer_state",
                    name: '状态',
                    targets: 11
                }, {
                    data: "transfer_msg",
                    name: '信息',
                    targets: 12
                }]
            }
        },
        components: {
            dataTable,
            subMenu
        }
    }
</script>