<template>
    <div>
        <subMenu :pages='pages'></subMenu>
        <dataTable :url='url' :buttons='buttons' :columnDefs='columnDefs'></dataTable>
        <div class='ui modal'>
            <div class='header'>
                转移订单
            </div><div class="ui form">
            <div class="grouped fields">
                <div class='field' v-for='intePort in intePorts'>
                <div class="ui radio checkbox">
                    <input type="radio" :name="intePort.name" :data="intePort._id">
                    <label>{{intePort.name}}</label>
                </div>
                </div>
            </div>
            </div>
            <div class='actions'>
                <div class='ui button'>取消</div>
                <div class='ui button submit'>提交</div>
            </div>
        </div>
    </div>
</template>

<script>
    import dataTable from '../widgets/dataTable.vue';
    import subMenu from '../widgets/subMenu.vue';
    import $http from '../methods/http';

    export default {
        props: ['pages'],
        beforeCreate() {
            var self = this;
            $http.Get({
                url: '/api/order/interface'
            }).then(function(res) {
                if (res.code === 1) {
                    self.intePorts = res.data;
                }
            });
        },
        mounted() {
            $('a.ui.button.violet.transfer').on('click', function(e) {
                $('.ui.modal').modal('show');
            });
            $('.ui.button.submit').on('click', function(e) {
                var data_id = [];
                $("tr.active").each(function(index, element) {
                    if ($(element).children()) {
                        data_id[index] = $(element).children().eq(0).html();
                    }
                });
                var data = {
                    transfer_id: $('input[type=radio]:checked').attr('data'),
                    transfer_name: $('input[type=radio]:checked').attr('name'),
                    data_id
                };
                var url = '/api/order';
                $http.Patch({
                    url,
                    data
                }).then(function(res) {
                    if (res.code) {
                        $('.ui.modal').modal('hide');
                        window.location = '#/redirect/order/unmark';
                    }
                });
            });
            $('a.ui.button.green.success').on('click', function(e) {
                var data_id = [];
                $("tr.active").each(function(index, element) {
                    if ($(element).children()) {
                        data_id[index] = $(element).children().eq(0).html();
                    }
                });
                var data = {
                    state: 1,
                    data_id
                };
                var url = '/api/order';
                $http.Patch({
                    url,
                    data
                }).then(function(res) {
                    if (res.code) {
                        window.location = '#/redirect/order/unmark';
                    }
                });
            });
            $('a.ui.button.red.fail').on('click', function(e) {
                var data_id = [];
                $("tr.active").each(function(index, element) {
                    if ($(element).children()) {
                        data_id[index] = $(element).children().eq(0).html();
                    }
                });
                var data = {
                    state: 2,
                    data_id
                };
                var url = '/api/order';
                $http.Patch({
                    url,
                    data
                }).then(function(res) {
                    if (res.code) {
                        window.location = '#/redirect/order/unmark';
                    }
                });
            });
            $('a.ui.button.teal.remark').on('click', function(e) {
                var data_id = [];
                $("tr.active").each(function(index, element) {
                    if ($(element).children()) {
                        data_id[index] = $(element).children().eq(0).html();
                    }
                });
                var data = {
                    mark: 1,
                    data_id
                };
                var url = '/api/order';
                $http.Patch({
                    url,
                    data
                }).then(function(res) {
                    if (res.code) {
                        window.location = '#/redirect/order/unmark';
                    }
                });
            });
        },
        data() {
            return {
                intePorts: [],
                url: '/api/order?state=0&mark=0&transfer_id=0',
                buttons: [{
                    text: 'Excel',
                    extend: 'excelHtml5',
                    className: 'ui button'
                }, {
                    text: '不分页',
                    className: "ui button btn-set-all"
                }, {
                    text: '标记',
                    className: 'ui button teal remark'
                }, {
                    text: '转移',
                    className: 'ui button violet transfer'
                }, {
                    text: '成功',
                    className: 'ui button green success'
                }, {
                    text: '失败',
                    className: 'ui button red fail'
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
                }]
            }
        },
        components: {
            dataTable,
            subMenu
        }
    }
</script>