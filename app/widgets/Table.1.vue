<template>
    <el-table
    :data="rows"
    stripe
    style="width:100%">
    <el-table-column
      :prop="column.prop"
      :label="column.label" 
      v-for="column in columns">
    </el-table-column>
    </el-table>
</template>

<script>
    export default {
        props: ['columns', 'rows', 'options'],
        data() {
            return {};
        }
    }
</script>
<style>

</style>