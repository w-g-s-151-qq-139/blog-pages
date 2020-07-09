<template>
    <div>
    <div class="loginForm">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark all">账号:</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-input type="text" v-model="name" placeholder="请输入账号" clearable class="all"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark all">密码:</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-input type="password" v-model="password" placeholder="请输入密码" clearable class="all"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="a-div"><a class=" all" href="/forget">忘记密码？</a></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-button type="primary" @click="userLogin" class=" all" id="loginButton">登录</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-button @click="login2" class=" all">注册</el-button>
            </el-col>
        </el-row>
    </div>
    </div>
</template>

<script>
    import "../css/login.css"
    import userLogin from "@/js/login";

    export default {
        name: "login",
        data(){
            return {
                name:'',
                password:''
            }
        },
        methods: userLogin
    }

</script>

<style scoped>

</style>