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
                        <form action="">
                            <label class="form-control w-fit my-auto pt-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-user mr-2"></i>ชื่อผู้ใช้</span>
                              </div>
                              <input type="text" placeholder="Username" class="input input-bordered w-[700px] text-lg" />
                            </label>
                            <label class="form-control w-fit my-auto pt-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-lock mr-2"></i>รหัสผ่าน</span>
                              </div>
                                <input type="password" placeholder="Password" class="input input-bordered w-[700px] text-lg" />
                            </label>
                            <label class="form-control w-fit my-auto pt-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-lock mr-2"></i>ยืนยันรหัสผ่าน</span>
                                </div>
                                <input type="password" placeholder="Confirm Password" class="input input-bordered w-[700px] text-lg" />
                            </label>
                            <label class="form-control w-fit my-auto pt-4">
                              <div class="label">
                                <span class="label-text text-black text-lg"><i class="fa-solid fa-envelope mr-2"></i>อีเมล</span>
                                </div>
                                <input type="email" placeholder="Email" class="input input-bordered w-[700px] text-lg" />
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