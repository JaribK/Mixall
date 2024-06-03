<template>
    <div>
        <div class="navbar bg-[#1d232a] w-full flex justify-between px-40">
            <div>
                <router-link to="/" id="brand" class="text-3xl font-normal mx-4 text-[#8a8e94] hover:text-gray-300 hover:duration-500 cursor-pointer">Mixallz</router-link>
                <router-link to="/" class="text-lg text-[#8a8e94] hover:text-gray-300 hover:duration-500 mx-4"><i class="fa-solid fa-house mr-2"></i>หน้าแรก</router-link>
            </div>
            <div>
                <router-link to="/login" class="text-lg text-[#8a8e94] hover:text-gray-300 hover:duration-500 mx-4"><i class="fa-solid fa-right-to-bracket mr-2"></i>เข้าสู่ระบบ</router-link>
                <router-link to="/register" class="text-lg text-[#8a8e94] hover:text-gray-300 hover:duration-500 mx-4 "><i class="fa-solid fa-user-plus mr-2"></i>สมัครสมาชิก</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
            }
        },
    }
</script>