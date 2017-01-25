<template>
    <div>
        <subMenu :pages='pages'></subMenu>
        <dataTable :url='url' :buttons='buttons' :columnDefs='columnDefs'></dataTable>
        <div class='ui modal intePort'>
            <div class='header'>
                添加接口
            </div>
            <div class='ui form add-interface'>
                <div class='field' v-for='columns in columnDefs' :class='columns.className'>
                    <label>{{columns.name}}</label>
                    <input type='text' :name='columns.data' :placeholder='columns.name'>
                </div>
            </div>
            <div class='actions'>
                <div class='ui button'>取消</div>
                <div class='ui button submit.intePort'>提交</div>
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
        mounted() {
            $('a.ui.button.red.delete').on('click', function(e) {
                var data_id = [];
                $("tr.active").each(function(index, element) {
                    if ($(element).children()) {
                        data_id[index] = $(element).children().eq(0).html();
                    }
                });
                var data = {
                    data_id
                };
                var url = '/api/order/interface';
                $http.Patch({
                    url,
                    data
                });
            });
            $('a.ui.button.green.add').on('click', function(e) {
                $('.ui.modal.intePort').modal('show');
            });
            $('.ui.button.submit.intePort').on('click', function(e) {
                var data = {
                    name: $('input[name=name]').val(),
                    submit_url: $('input[name=submit_url]').val(),
                    query_url: $('input[name=query_url]').val(),
                    username: $('input[name=username]').val(),
                    key: $('input[name=key]').val(),
                };
                $http.Post({
                    url: '/api/order/interface',
                    data: data
                }).then(function(res) {
                    $('.ui.modal.intePort').modal('hide');
                    if (res.code) {
                        window.location = "#/redirect/order/interface";
                    } else {
                        window.location = "#/order/interface";
                    }
                });
            });
        },
        data() {
            return {
                url: '/api/order/interface',
                buttons: [{
                    text: '添加',
                    className: 'ui button green add'
                }, {
                    text: '删除',
                    className: 'ui button red delete transition hidden'
                }],
                columnDefs: [{
                    data: '_id',
                    name: 'id',
                    targets: 0,
                    className: 'transition hidden'
                }, {
                    data: 'name',
                    name: '接口名称',
                    targets: 1
                }, {
                    data: 'submit_url',
                    name: '提交地址',
                    targets: 2
                }, {
                    data: 'query_url',
                    name: '查询地址',
                    targets: 3
                }, {
                    data: 'username',
                    name: '用户名',
                    targets: 4
                }, {
                    data: 'key',
                    name: '密钥',
                    targets: 5
                }]
            }
        },
        components: {
            dataTable,
            subMenu
        }
    }
</script>
<style scoped>
    .add-interface {
        margin-top: 14px;
    }
</style>