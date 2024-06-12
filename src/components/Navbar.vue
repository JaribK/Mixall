<template>
    <div>
        <div class="navbar bg-[#1d232a] w-full flex justify-between px-96">
            <div>
                <router-link to="/" id="brand" class="text-3xl font-normal mx-4 text-[#8a8e94] hover:text-gray-300 hover:duration-500 cursor-pointer">Mixallz</router-link>
                <router-link to="/" class="text-lg text-[#8a8e94] hover:text-gray-300 hover:duration-500 mx-4"><i class="fa-solid fa-house mr-2"></i>หน้าแรก</router-link>
            </div>
            <div v-if="!isAuthenticated">
                <router-link to="/login" class="text-lg text-[#8a8e94] hover:text-gray-300 hover:duration-500 mx-4" ><i class="fa-solid fa-right-to-bracket mr-2"></i>เข้าสู่ระบบ</router-link>
                <!-- <router-link to="/register" class="text-lg text-[#8a8e94] hover:text-gray-300 hover:duration-500 mx-4 "><i class="fa-solid fa-user-plus mr-2"></i>สมัครสมาชิก</router-link> -->
            </div>
            <div v-else>
                <div @click="showDetailsPointsofUsers()" class="text-lg text-[#8a8e94] hover:text-gray-300 hover:duration-500 mx-4 cursor-pointer"><i class="fa-solid fa-coins mr-2"></i> {{ thisUserPoints }} </div>
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="text-lg text-[#8a8e94] hover:text-gray-300 hover:duration-500 mx-4 cursor-pointer" @click="toggleDropdown"><i class="fa-solid fa-user mr-2"></i>{{ user.username }}</div>
                    <ul v-if="isDropdownOpen" tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-60 mt-4">
                        <li><div @click="redeemCode" class="text-lg text-[#8a8e94] hover:text-white hover:bg-[#1d232a] hover:duration-500 cursor-pointer"><i class="fa-solid fa-gift mr-2"></i>กรอกโค้ดรับรางวัล</div></li>
                        <li><div @click.prevent="Logout" class="text-lg text-red-600 hover:text-white hover:bg-red-600 hover:duration-500 cursor-pointer"><i class="fa-solid fa-sign-out mr-2"></i>ออกจากระบบ</div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { GET_USER_GETTER, IS_USER_AUTHENTICATED_GETTER, LOGOUT_ACTION, GET_USER_TOKEN_GETTER } from '@/store/storeconstants';
import swal from 'sweetalert2';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
    export default {
        name: 'Navbar',
        data() {
            return {
                isDropdownOpen: false,
                Code: '',
                thisUserPoints: ''
            }
        },
        mounted() {
            this.getUserPoints();
        },
        computed: {
            ...mapGetters('auth', {
                isAuthenticated: IS_USER_AUTHENTICATED_GETTER,
                user: GET_USER_GETTER,
                token: GET_USER_TOKEN_GETTER
            })
        },
        methods: {
            ...mapActions('auth', {
                logout: LOGOUT_ACTION
            }),
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen;
            },
            async Logout() {
                swal.fire({
                    title: 'ยืนยันการออกจากระบบ',
                    text: 'คุณต้องการออกจากระบบใช่หรือไม่?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'ใช่, ออกจากระบบ',
                    cancelButtonText: 'ไม่, ยกเลิก',
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.logout();
                        this.$router.push('/login');
                    } else {}
                })
            },

            async getUserPoints() {
                await axios.get(`http://localhost:8000/users/${this.user.id}/`)
                    .then((response) => {
                        this.thisUserPoints = response.data.points;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },

            showDetailsPointsofUsers() {
                if (this.thisUserPoints === 0) {
                    swal.fire({
                        title: 'แต้มของคุณ',
                        text: 'คุณยังไม่มีแต้ม',
                        icon: 'info',
                        confirmButtonText: 'ปิด'
                    });
                } else {
                    swal.fire({
                        title: 'แต้มของคุณ',
                        text: `คุณมีแต้มทั้งหมด ${this.thisUserPoints} แต้ม`,
                        icon: 'info',
                        confirmButtonText: 'ปิด'
                    });
                }
            },

            async redeemCode() {
                const { value: code } = await swal.fire({
                    title: 'กรอกโค้ดรับรางวัล',
                    input: 'text',
                    inputLabel: 'โค้ดรับรางวัล',
                    inputPlaceholder: 'กรอกโค้ดที่นี่...',
                    showCancelButton: true,
                    confirmButtonText: 'ยืนยัน',
                    cancelButtonText: 'ยกเลิก',
                    inputValidator: (value) => {
                        if (!value) {
                            return 'กรุณากรอกโค้ดรับรางวัล';
                        }
                    }
                });
                
                if (code) {
                    try {
                        this.Code = code;
                        const response = await axios.post('http://localhost:8000/code/redeem/', {
                            code: this.Code
                        }, { 
                            headers: {
                                Authorization: `Token ${this.token}` 
                            } 
                        });
                        if (response.data.success) {
                            swal.fire({
                                title: 'แลกโค้ดรับรางวัลสำเร็จ',
                                text: response.data.success,
                                icon: 'success',
                                confirmButtonText: 'ปิด'
                            });
                            this.getUserPoints();
                        }
                    } catch (error) {
                        swal.fire({
                            title: 'แลกโค้ดรับรางวัลไม่สำเร็จ',
                            text: error.response.data.error,
                            icon: 'error',
                            confirmButtonText: 'ปิด'
                        });
                    }
                } 
            }
    }
}
</script>