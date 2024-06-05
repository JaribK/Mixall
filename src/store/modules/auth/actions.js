import { REGISTER_ACTION, SET_USER_TOKEN_DATA_MUTATION,GET_USER_TOKEN_GETTER } from "@/store/storeconstants";
import { LOGIN_ACTION, LOGOUT_ACTION } from "@/store/storeconstants";
import axios from "axios";
import swal from "sweetalert2";
import { mapGetters } from "vuex";

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
                const Toast = swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = swal.stopTimer;
                      toast.onmouseleave = swal.resumeTimer;
                    }
                });
                  Toast.fire({
                    icon: "success",
                    title: "สมัครสมาชิกสำเร็จ!"
                });
            })
            .catch((error) => {
                if (error.response.status === 409){
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
                context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                    user: response.data.user,
                    token: response.data.token,
                });
                const Toast = swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = swal.stopTimer;
                      toast.onmouseleave = swal.resumeTimer;
                    }
                });
                  Toast.fire({
                    icon: "success",
                    title: "เข้าสู่ระบบสำเร็จ!"
                });
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

    async [LOGOUT_ACTION](context) {
        await axios.post(host + "api/logout",{},
        {
            headers: {
                Authorization: `Token ${context.getters[GET_USER_TOKEN_GETTER]}`,
            },
        })
            .then((response) => {
                context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                    user: null,
                    token: null,
                });
                const Toast = swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = swal.stopTimer;
                      toast.onmouseleave = swal.resumeTimer;
                    }
                });
                  Toast.fire({
                    icon: "success",
                    title: "ออกจากระบบสำเร็จ!"
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },
};