<script setup>
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
</script>
<template>
    <div class="overflow-hidden">
        <Navbar/>
        <div id="body" class="h-[900px] w-full flex flex-col bg-gradient-to-r from-blue-700 via-violet-500 to-sky-500 background-animate">
            <div id="content1" class="w-full flex flex-col items-center py-10 drop-shadow-2xl">
                <div id="login" class="animate-fade-up animate-once animate-delay-200 animate-ease-in-out bg-white h-fit w-[800px] rounded-b-lg border border-slate-400 rounded-lg">
                    <div id="login-title" class="border-b-slate-600 w-[798.72px] flex justify-start items-center text-white bg-[#1d232a] rounded-t-lg h-[50px] text-lg"><i class="fa-solid fa-right-to-bracket ml-8 mr-2"></i>เข้าสู่ระบบ</div>
                    <div id="login-content" class="flex flex-col justify-center items-center py-4 w-full">
                        <form @submit.prevent="Login">
                            <label class="form-control w-fit my-auto pt-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-user mr-2"></i>ชื่อผู้ใช้</span>
                              </div>
                              <input type="text" v-model="username" placeholder="Username" class="input input-bordered w-[700px] text-lg" required/>
                            </label>
                            <label class="form-control w-fit my-auto py-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-lock mr-2"></i>รหัสผ่าน</span>
                              </div>
                                <input type="password" v-model="password" placeholder="Password" class="input input-bordered w-[700px] text-lg" required/>
                            </label>
                            <div id="button">
                              <button class="btn btn-primary w-[700px] text-lg mt-10"><i class="fa-solid fa-right-to-bracket"></i>เข้าสู่ระบบ</button>
                              <div id="sub-button" class="mt-2">
                                <router-link to="/forgot-password">
                                  <button class="btn btn-error w-[345px] text-lg mb-10 mr-[10px]"><i class="fa-solid fa-key"></i>ลืมรหัสผ่าน?</button>
                                </router-link>
                                <router-link to="/register">
                                  <button class="btn btn-warning w-[345px] text-lg mb-10"><i class="fa-solid fa-circle-xmark"></i>ยังไม่ได้สมัครสมาชิก?</button>
                                </router-link>
                              </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer class="place-content-end w-full" />
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert2';
import { mapActions } from 'vuex';
import { LOGIN_ACTION } from '@/store/storeconstants';
    export default {
        name: 'LoginPage',
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions('auth', {
                login: LOGIN_ACTION
            }),
            async Login() {
                await this.login({ username: this.username, password: this.password });
                this.$router.push('/')
            }
        }
    }
</script>

<style>
    .background-animate {
        background-size: 400%;

        -webkit-animation: AnimationName 3s ease infinite;
        -moz-animation: AnimationName 3s ease infinite;
        animation: AnimationName 3s ease infinite;
    }

    @keyframes AnimationName {
        0%,
        100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }   
    }

</style>