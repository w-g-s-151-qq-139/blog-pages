<template>
    <div>
        <div class="forget-first" ref="forget_first">
            <div class="form-son">
                <p class="email">邮箱:</p>
                <p class="email-scan-p">
                    <input type="text" v-model="email" placeholder="请输入邮箱" clearable class="email-scan el-input"/>
                </p>
            </div>
            <div class="form-son">
                <p class="code-p">
                    <input type="text" v-model="code" placeholder="请输入验证码" clearable class="code"/>
                </p>
                <p class="sendCode"><button class="el-button">发送验证码</button></p>
            </div>
            <div class="form-son">
                <el-button type="primary" @click="firstToSecond" class="button-size">确认修改密码</el-button>
            </div>
        </div>
        <div class="forget-second" ref="forget_second">

        </div>
    </div>
</template>

<script>
    import "../css/forget.css"
    import forget from "@/js/forget";
    export default {
        name: "forget",
        methods: forget,
        data(){
            return {
                email: '',
                code: ''
            }
        }
    }
</script>

<style scoped>

</style>