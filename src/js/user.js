import storage from "@/js/storage"
import qs from "qs"
import $ from "jquery"

function getUserInfo() {
    this.$http.post('/api/user/userInfo'
        ,qs.stringify({'id':storage.get('user_id')})
    ).then(
        function (response) {
            confirm("返回了")
            console.log(response.data)
        })
}

function userExit() {
    let id = storage.get('user_id')
    storage.removeAll()
    this.$http.post('/api/userExit'
        ,qs.stringify({'id':id})
    ).then(
        function (response) {
            confirm("返回了")
            console.log(response.data)
        })
}

function alterHeadPic() {
    if (this.$refs.new_image.files.length !== 0) {
        let formData = new FormData()
        formData.append('pic', this.$refs.new_image.files[0]);
        //单个文件进行上传
        this.$http.post('/api/user/alterHeadPic', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            //setTimeout(function () {
                //let path = require('../assets/upload/' + response.data.resultData.filename)
                //let imgPath = path.toString()
                $('#img').attr('src', "http://localhost:8089/images/"+response.data.resultData.filename)
            //f},1000)
        })
    }
}



export default {
    getUserInfo,
    userExit,
    alterHeadPic
}