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
            this.datatable = $('#datatable').DataTable({
                buttons: this.buttons,
                columnDefs: this.columnDefs,
                ajax: {
                    url: this.url
                },
                jQueryUI: false,
                "aaSorting": [
                    [1, "desc"]
                ],
                language: {
                    search: "查找",
                    zeroRecords: "没有匹配的数据",
                    infoEmpty: "没有符合条件的记录",
                    info: "第_PAGE_页/共 _PAGES_页",
                    lengthMenu: "_MENU_ 条/页",
                    infoFiltered: "(从 _MAX_条记录中过滤)",
                    paginate: {
                        "first": "首页 ",
                        "last": "末页",
                        "next": "下一页",
                        "previous": "上一页"
                    }
                },
                select: {
                    style: 'os',
                    className: 'active'
                },
                paging: true,
                autoWidth: true,
                bLengthChange: true, //改变每页显示数据数量
                pageLength: 10,
                processing: true, //是否显示加载中提示
                responsive: true
            });
            var self = this;
            $(".btn-set-all").on("click", function (e) {
                self.datatable.page.len(-1).draw();
            });
            this.$watch('url', function (newVal, oldVal) {
                console.log('newVal');//这里再感受下值拿到了没
            });
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