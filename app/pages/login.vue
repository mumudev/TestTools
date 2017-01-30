<template>
    <div class="login">
        <div class="form">
            <el-form :model="loginForm" ref="loginForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="名称">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submitForm('loginForm')" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import http from '../methods/http';
    export default {
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm(formName) {
                let username = this.loginForm.username;
                let password = this.loginForm.password;
                this.$refs[formName].validate((valid) => {
                    if (!valid) {
                        return false;
                    }
                    http.login({ username, password }).then((data) => {
                        if (data.code === 1) {
                            alert('Login success!');
                        }
                    });
                });
            }
        },
        components: {
        }
    }
</script>

<style>
.login {
   width: 500px;
   position: fixed;
   border: 1px solid #eaeefb;
   border-radius: 4px;
   transition: .2s;
   margin-bottom: 24px;
}
.form{
   padding: 24px;
}
</style>