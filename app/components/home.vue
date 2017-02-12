<template>
    <div class="home">
        <el-row>
            <el-col :span="3" v-for="(o, index) in 4" :offset="index > 0 ? 1 : 0">

                <el-card :body-style="{ padding: '0px' }">
                    <img class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        components: {
        }
    }

</script>