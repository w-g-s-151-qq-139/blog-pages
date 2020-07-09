<template>

    <el-form ref="registerInfo" :model="registerInfo" label-width="20%" class="form" :rules="registerRules">

        <el-form-item label="账号" prop="name">
            <el-row>
                <el-col :span="23">
                    <el-input v-model="registerInfo.name" placeholder="请输入账号" clearable/>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
            <el-row>
                <el-col :span="23">
                    <el-input v-model="registerInfo.nickname" placeholder="请输入昵称" clearable/>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-row>
                <el-col :span="23">
                    <el-input type="password" v-model="registerInfo.password" placeholder="请输入密码" clearable/>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordAgain">
            <el-row>
                <el-col :span="23">
                    <el-input type="password" v-model="registerInfo.passwordAgain" placeholder="请再次输入密码" clearable/>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
            <el-row>
                <el-col :span="23">
                    <el-input v-model="registerInfo.phone" placeholder="请输入手机号" clearable/>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-row>
                <el-col :span="23">
                    <el-input v-model="registerInfo.email" placeholder="请输入邮箱" clearable/>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item prop="code" label="验证码">
            <el-row>
                <el-col :span="18">
                    <el-input v-model="registerInfo.code"/>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="register">
                        发送验证码
                    </el-button>
                </el-col>
            </el-row>
        </el-form-item>
        <el-row>
            <el-col :span="2" offset="11">
                <el-button @click="register">
                    注册
                </el-button>
            </el-col>
        </el-row>

    </el-form>
</template>

<script>
    import '../css/register.css'
    import register from "@/js/register";

    export default {
        name: "register",
        data() {
            var checkPhone = (rule,value,callback) => {
                let mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;


                if (!mobile.test(value)){
                    return callback(new Error('手机号错误'));
                }
            }
            return {
                registerInfo: {
                    name: '',
                    nickname: '',
                    password: '',
                    passwordAgain: '',
                    phone: '',
                    email: '',
                    code: ''
                },
                registerRules: {
                    name: [
                        {required: true, message: '此项为必填项', trigger: 'blur'},
                        {min: 5, max: 20, message: '5-20个字符', trigger: 'blur'}
                    ],
                    nickname: [
                        {max: 20, message: '最多20个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '此项为必填项', trigger: 'blur'},
                        {min: 5, max: 20, message: '5-20个字符', trigger: 'blur'}
                    ],
                    passwordAgain: [
                        {required: true, message: '此项为必填项', trigger: 'blur'},
                        {min: 5, max: 20, confirmed: this.password, message: '两次密码必须保持一致', trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, message: '此项为必填项', trigger: 'blur'},
                        {length: 11,validator: checkPhone, trigger: 'blur'},
                        {}
                    ],
                    email: [
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
                    ],
                    code: [
                        {required: true, message: '此项为必填项', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: register
    }
</script>

<style scoped>

</style>