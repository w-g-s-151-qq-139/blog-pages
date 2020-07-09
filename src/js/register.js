import axios from "axios";
import storage from "@/js/storage";


function sendCode() {
    axios.post('http://localhost:8089/register/sendCode').then(
        function (response) {
            storage.set('code', response.data.data.code)
        }
    )
}
function register() {
    //let registerFormData = {};
    confirm(JSON.stringify(this.registerInfo))

}


export default {
    register,
    sendCode
}