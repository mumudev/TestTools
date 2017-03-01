<template>
    <div class='excelCompare'>
        <el-row>
            <el-col :span="24">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="Compare Excel" name="CompareExcel" />
                </el-tabs>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix describe">
                        对比两个Excel文件，不一致则标红
                    </div>
                    <el-upload multiple ref='upload' :data='data' action='/v1/api/upload' :file-list='fileList'>
                        <el-button slot='trigger' size='small' type='primary'>select</el-button>
                        <el-button style='margin-left: 10px;' size='small' type='success' @click='analysis'>Analysis</el-button>
                        <el-button style='margin-left: 10px;' size='small' type='info' @click='reset'>Reset</el-button>
                        <div slot='tip' class='el-upload__tip'>You can select two file at the same time.</div>
                    </el-upload>
                </el-card>
            </el-col>
            <el-col :span="18">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Result</span>
                        <el-button style='margin-left: 10px;' size='small' type='success' @click='resultDownload'>Download</el-button>
                    </div>

                    <div v-for="item in result.data" class="text item error">
                        {{item.msg}}
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import request from '../methods/request';
    import tools from '../methods/tools';
    export default {
        created() {
            this.getNewUuid();
        },
        data() {
            return {
                data: {},
                activeName: 'CompareExcel',
                fileList: [],
                result: {
                    url: '',
                    data: []
                }
            };
        },
        methods: {
            getNewUuid() {
                this.data.taskid = tools.getUuid();
            },
            reset() {
                request.task.reset(this.data.taskid).then((res) => {
                    if (res.code === 1) {
                        this.getNewUuid();
                        return this.fileList = [];
                    }
                    return false;
                });

            },
            handlePreview(file) {
                console.log(file);
            },
            analysis() {
                request.task.excelCompare(this.data.taskid).then((res) => {
                    if (res.code === 1) {
                        this.result = res.data;
                    }
                });
            },
            resultDownload() {
                window.open(this.result.url);
            },
            handleClick() {

            }
        }
    }

</script>
<style scoped>
    .describe {
        height: 200px;
    }
    
    .el-card {
        border: 1px solid #d1dbe5;
        border-radius: 4px;
        background-color: #fff;
        overflow: hidden;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
        height: 700px;
    }
</style>