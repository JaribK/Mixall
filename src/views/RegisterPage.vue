<script setup>
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
</script>
<template>
    <div class="overflow-hidden">
        <Navbar/>
        <div id="body" class="h-[900px] w-full flex flex-col bg-gradient-to-r from-blue-700 via-violet-500 to-sky-500 background-animate">
            <div id="content1" class="w-full flex flex-col items-center py-10 drop-shadow-2xl">
                <div id="register" class="animate-fade-up animate-once animate-delay-200 animate-ease-in-out bg-white h-fit w-[800px] rounded-b-lg border border-slate-400 rounded-lg">
                    <div id="register-title" class="border-b-slate-600 w-[798.72px] flex justify-start items-center text-white bg-[#1d232a] rounded-t-lg h-[50px] text-lg"><i class="bi bi-person-plus-fill ml-8 mr-2"></i>สมัครสมาชิก</div>
                    <div id="register-content" class="flex flex-col justify-center items-center py-4 w-full">
                        <form @submit.prevent="Register">
                            <label class="form-control w-fit my-auto pt-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-user mr-2"></i>ชื่อผู้ใช้</span>
                              </div>
                              <input v-model="username" maxlength="50" type="text" placeholder="Username" class="input input-bordered w-[700px] text-lg" required/>
                            </label>
                            <label class="form-control w-fit my-auto pt-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-lock mr-2"></i>รหัสผ่าน</span>
                              </div>
                                <input v-model="password" maxlength="50" type="password" placeholder="Password" class="input input-bordered w-[700px] text-lg" required/>
                            </label>
                            <label class="form-control w-fit my-auto pt-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-lock mr-2"></i>ยืนยันรหัสผ่าน</span>
                                </div>
                                <input v-model="confirm_password" maxlength="50" type="password" placeholder="Confirm Password" class="input input-bordered w-[700px] text-lg" required/>
                            </label>
                            <label class="form-control w-fit my-auto pt-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-envelope mr-2"></i>อีเมล</span>
                                </div>
                                <input v-model="email" maxlength="50" type="email" placeholder="Email" class="input input-bordered w-[700px] text-lg" required/>
                            </label>
                            <div id="button">
                                <button class="btn btn-primary w-[700px] text-lg mt-10"><i class="fa-solid fa-right-to-bracket"></i>สมัครสมาชิก</button>
                                <div id="sub-button" class="mt-2">
                                  <router-link to="/login">
                                    <button class="btn btn-success w-[345px] text-lg mb-10 mr-[10px]"><i class="fa-solid fa-user-check"></i>มีหรือเป็นสมาชิกอยู่แล้ว?</button>
                                  </router-link>
                                  <router-link to="/forgot-password">
                                    <button class="btn btn-info w-[345px] text-lg mb-1"><i class="fa-solid fa-circle-info"></i>เงื่อนไขการสมัครสมาชิก</button>
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
import {mapActions} from 'vuex';
import { REGISTER_ACTION } from '@/store/storeconstants';
    export default {
        name: 'RegisterPage',
        data() {
            return {
                username: '',
                password: '',
                confirm_password: '',
                email: '',
            }
        },
        methods: {
            ...mapActions('auth',{
              register: REGISTER_ACTION
            }),
            Register(){
              swal.fire({
                title: 'ยืนยันการสมัครสมาชิก',
                text: 'คุณต้องการสมัครสมาชิกใช่หรือไม่?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'ใช่, สมัครสมาชิก',
                cancelButtonText: 'ไม่, ยกเลิก',
              }).then((result) => {
                  if(result.isConfirmed){
                    if (this.password !== this.confirm_password) {
                      swal.fire({
                          title: 'ผิดพลาด!',
                          text: 'รหัสผ่านไม่ตรงกัน',
                          icon: 'error',
                          confirmButtonText: 'ปิด'
                      })
                    } else if (this.password.length < 8) {
                      swal.fire({
                          title: 'ผิดพลาด!',
                          text: 'รหัสผ่านต้องมีความยาวมากกว่า 8 ตัวอักษร',
                          icon: 'error',
                          confirmButtonText: 'ปิด'
                      })
                    } else if (this.username.length < 6) {
                      swal.fire({
                          title: 'ผิดพลาด!',
                          text: 'ชื่อผู้ใช้ต้องมีความยาวมากกว่า 6 ตัวอักษร',
                          icon: 'error',
                          confirmButtonText: 'ปิด'
                      })
                    } else if (!this.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/)) {
                      swal.fire({
                          title: 'ผิดพลาด!',
                          text: 'รหัสผ่านต้องประกอบด้วยตัวอักษรพิมพ์เล็ก พิมพ์ใหญ่ ตัวเลข และอักขระพิเศษ',
                          icon: 'error',
                          confirmButtonText: 'ปิด',
                          footer: 'มีตัวอักษรพิเศษที่กำหนด : @ $ ! % * ? & _ -'
                      })
                    } else if (!this.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                      swal.fire({
                          title: 'ผิดพลาด!',
                          text: 'รูปแบบอีเมลไม่ถูกต้อง',
                          icon: 'error',
                          confirmButtonText: 'ปิด'
                      })
                    } else {
                      this.register({username: this.username, password: this.password, email: this.email})
                      this.$router.push('/login')
                    }
                  }
              })
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