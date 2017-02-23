<template>
    <div class="order">
        <WTable :columns='data.columns' :rows='data.rows' :options='data.options' :methods='methods'></WTable>
    </div>
</template>

<script>
    import WTable from '../widgets/Table';
    import request from '../methods/request';
    export default {
        beforeCreate() {
            request.user.get().then(res => {
                this.data.rows = res.data;
            });
        },
        data() {
            return {
                data: {
                    columns: [{
                        prop: 'username',
                        label: 'username'
                    }, {
                        prop: 'password',
                        label: 'password'
                    }],
                    rows: [{
                        username: 'mumudeveloper',
                        password: '123456'
                    }]
                },
                methods: {
                    get() {
                    },
                    create() {

                    },
                    update() {

                    },
                    delete() {

                    }
                },
                computed:{
                    getData(){
                        return this.$store.state.data;
                    }
                }
            }
        },
        components: {
            WTable
        }
    }
</script>