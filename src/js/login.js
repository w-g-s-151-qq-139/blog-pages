import storage from "@/js/storage";
import qs from "qs"
import $ from 'jquery'

function userLogin(){
    const th = this

    // confirm(th.name+th.password)
    if('' == th.name||'' == th.password){
        confirm('账号或密码不能为空！')
    }else{
        $("#loginButton").attr('disabled',true);
        this.$http.post('/api/login',qs.stringify({'name':th.name,'password':th.password})).then(
            function (response) {
                confirm(response.data.message)
                console.log(response.data.resultData)
                storage.set('access_token',response.data.resultData.access_token)
                storage.set('user_id',response.data.resultData.user.id)
                th.$router.push({path:'/'})
            })
    }
}
function login2(){

    window.open('http://localhost:8080/register','_self')
}
export default {
    userLogin,
    login2
}