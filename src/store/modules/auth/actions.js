import { REGISTER_ACTION } from "@/store/storeconstants";
import { LOGIN_ACTION } from "@/store/storeconstants";
import axios from "axios";
import swal from "sweetalert2";

const host = "http://localhost:8000/"

export default {
    async [REGISTER_ACTION](context, payload) {
        let postData = {
            username: payload.username,
            password: payload.password,
            email: payload.email,
        };
        await axios.post(host + "api/register", postData)
            .then((response) => {
                swal.fire({
                    title: 'สำเร็จ!',
                    text: 'สมัครสมาชิกสำเร็จ!',
                    icon: 'success',
                    confirmButtonText: 'ปิด'
                })
            })
            .catch((error) => {
                if (error.response.status == 409){
                    swal.fire({
                        title: 'Error',
                        text: error.response.data.error,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            });
    },
    async [LOGIN_ACTION](context, payload) {
        let postData = {
            username: payload.username,
            password: payload.password,
        };
        await axios.post(host + "api/login", postData)
            .then((response) => {
                swal.fire({
                    title: 'สำเร็จ!',
                    text: 'เข้าสู่ระบบสำเร็จ!',
                    icon: 'success',
                    confirmButtonText: 'ปิด'
                })
            })
            .catch((error) => {
                if (error.response.status == 400 || error.response.status == 404 || error.response.status == 403 || error.response.status == 409){
                    swal.fire({
                        title: 'Error',
                        text: error.response.data.error,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            });
    },
};