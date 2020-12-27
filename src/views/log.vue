<template>

    <div style="
    height: 1000px;
    width: 100%;
    background-position: center 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;"
        class="container-fluid"
         :style="{backgroundImage:`url(${getsrc('/log/nignt.jpg')})`}"
    >
        <div class="row no-gutters" style="">
            <div class="col-10 m-auto" style="height: 400px;text-align: center">
                <div style="height: 150px">

                </div>
                <div class="m-auto" style="width: 500px;">
                    <h1 style="color: white;font-size: 50px">用户登录</h1>
                </div>
            </div>
            <div class="col-10 row no-gutters m-auto" style="background-color: white;border-radius: 10px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">

                <div class="col-10 m-auto">
                    <div style="height: 50px">

                    </div>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model.number="ruleForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>

            </div>

        </div>


    </div>
</template>

<script>
    export default {
        name: "log",
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }
                callback();
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    username: '',
                    commit: false,
                },
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                    username: [
                        {validator: checkAge, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this;
                // console.log('dada');
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.get('/user.xml').then(res => {
                            var jsonObj = _this.$x2js.xml2js(res.data);
                            jsonObj.users.user.forEach(item => {
                                // console.log(item);
                                if (item.name === _this.ruleForm.username && item.password === _this.ruleForm.pass) {
                                    if (localStorage.getItem('name')) {
                                        localStorage.removeItem('name')
                                    }
                                    localStorage.setItem('name', item.name);
                                    _this.commit = true;
                                    _this.$router.push('/index')
                                }
                            });
                            if (_this.commit === false) {
                                this.$refs[formName].resetFields();
                                alert('用户名或密码错误')
                            }


                        });


                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();

            },
            getsrc: function (src) {
                return require("../assets/img" + src)
            },
        }
    }
</script>

<style scoped>

</style>