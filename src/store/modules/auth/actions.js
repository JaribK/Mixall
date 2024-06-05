import { 
    REGISTER_ACTION, 
    SET_USER_TOKEN_DATA_MUTATION, 
    GET_USER_TOKEN_GETTER, 
    LOGIN_ACTION, 
    LOGOUT_ACTION,
    AUTO_LOGIN_ACTION
} from "@/store/storeconstants";
import axios from "axios";
import swal from "sweetalert2";

const host = "http://localhost:8000/";

export default {
    async [REGISTER_ACTION](context, payload) {
        const postData = {
            username: payload.username,
            password: payload.password,
            email: payload.email,
        };
        try {
            await axios.post(host + "api/register", postData);
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
        } catch (error) {
            if (error.response && error.response.status === 409) {
                swal.fire({
                    title: 'Error',
                    text: error.response.data.error,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    },

    async [LOGIN_ACTION](context, payload) {
        const postData = {
            username: payload.username,
            password: payload.password,
        };
        try {
            const response = await axios.post(host + "api/login", postData);
            const resData = {
                user: response.data.user,
                token: response.data.token,
            };
            localStorage.setItem("user_data", JSON.stringify(resData));
            context.commit(SET_USER_TOKEN_DATA_MUTATION, resData);
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
        } catch (error) {
            if (error.response && [400, 403, 404, 409].includes(error.response.status)) {
                swal.fire({
                    title: 'Error',
                    text: error.response.data.error,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    },

    async [LOGOUT_ACTION](context) {
        try {
            await axios.post(host + "api/logout", {}, {
                headers: {
                    Authorization: `Token ${context.getters[GET_USER_TOKEN_GETTER]}`,
                },
            });
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                user: null,
                token: null,
            });
            localStorage.removeItem("user_data");
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
        } catch (error) {
            console.error('Logout error:', error);
        }
    },

    [AUTO_LOGIN_ACTION](context) {
        const user_data = localStorage.getItem("user_data");
        if (user_data) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, JSON.parse(user_data));
        }
    },
};