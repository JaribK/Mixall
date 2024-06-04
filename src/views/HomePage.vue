<script setup>
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
</script>
<template>
    <div class="overflow-hidden">
        <Navbar/>
        <div id="body" class="h-fit w-full flex flex-col bg-gradient-to-r from-blue-700 via-violet-500 to-sky-500 background-animate">
            <div id="content1" class="flex justify-center h-[400px] flex-col items-center my-auto transition hover:translate-y-1 hover:scale-110 duration-500">
                <div id="title" class="animate-fade-up animate-once animate-delay-200 animate-ease-in-out text-9xl text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Mixallz</div>
                <div id="description" class="animate-fade-up animate-once animate-delay-200 animate-ease-in-out text-lg text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">I want to do everythings that i want.</div>
            </div>
            <div id="content2" class="w-full flex flex-col items-center pb-10 drop-shadow-2xl">
                <div id="users-stats-box" class="animate-fade-up animate-once animate-delay-200 animate-ease-in-out bg-white h-fit w-[800px] rounded-b-lg border border-slate-400 rounded-lg">
                    <div id="users-stats-box-title" class="border-b-slate-600 w-[798.72px] flex justify-start items-center text-white bg-[#1d232a] rounded-t-lg h-[50px] text-lg"><i class="bi bi-people-fill ml-8 mr-2"></i>Users Stats</div>
                    <div id="table-users-stats" class="flex justify-center items-center py-6">
                        <table class="border-collapse w-[750px] h-[100px]">
                          <thead class="h-[50px]">
                            <tr class="text-black text-xl">
                              <th class="border border-slate-300 font-medium w-[32.5%] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"><i class="fa-solid fa-circle-plus mr-2"></i>สมัครสามชิกล่าสุด</th>
                              <th class="border border-slate-300 font-medium w-[35%] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"><i class="fa-solid fa-globe mr-2"></i>จำนวนสมาชิกที่ออนไลน์</th>
                              <th class="border border-slate-300 font-medium w-[32.5%] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"><i class="fa-solid fa-users mr-2"></i>จำนวนสมาชิกทั้งหมด</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="text-center text-black text-xl h-[50px]">
                                <td class="border border-slate-300">John Doe</td>
                                <td class="border border-slate-300">5</td>
                                <td class="border border-slate-300">10</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id="content3" class="w-full flex flex-col items-center pb-10 drop-shadow-2xl">
                <div id="users-stats-box" class="animate-fade-up animate-once animate-delay-200 animate-ease-in-out bg-white h-fit w-[800px] rounded-b-lg border border-slate-400 rounded-lg">
                    <div id="users-stats-box-title" class="border-b-slate-600 w-[798.72px] flex justify-start items-center text-white bg-[#1d232a] rounded-t-lg h-[50px] text-lg"><i class="fa-solid fa-sitemap ml-8 mr-2"></i>Features & Systems</div>
                    <div id="table-users-stats" class="flex justify-center items-center py-6">
                        <table class="border-collapse w-[750px] h-fit">
                          <thead class="h-[50px] text-black">
                              <tr class="text-xl">
                                <th class="border border-slate-300 font-medium w-[7%] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">#</th>
                                <th class="border border-slate-300 font-medium w-[46.5%] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"><i class="bi bi-app-indicator mr-2"></i>ระบบ</th>
                                <th class="border border-slate-300 font-medium w-[46.5%] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"><i class="fa-solid fa-chart-simple mr-2"></i>สถานะ</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="text-center text-black text-xl h-[50px]">
                                <td class="border border-slate-300">1</td>
                                <td class="border border-slate-300">Login</td>
                                <td class="border border-slate-300 text-yellow-400">กำลังดำเนินการ</td>
                            </tr>
                            <tr class="text-center text-black text-xl h-[50px]">
                                <td class="border border-slate-300">2</td>
                                <td class="border border-slate-300">Register</td>
                                <td class="border border-slate-300 text-yellow-400">กำลังดำเนินการ</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id="content4" class="w-full flex flex-col items-center pb-10 drop-shadow-2xl">
                <div id="discord-box" class="animate-fade-up animate-once animate-delay-200 animate-ease-in-out bg-white h-[800px] w-[800px] rounded-b-lg border border-slate-400 rounded-lg">
                    <div id="discord-title" class="border-b-slate-600 w-[798.72px] flex justify-start items-center text-white bg-[#1d232a] rounded-t-lg h-[50px] text-lg"><i class="bi bi-discord ml-8 mr-2"></i>Join our Discord!</div>
                    <div id="discord-content" class="flex justify-center items-center pt-12">
                        <iframe src="https://discord.com/widget?id=953880163102375987&theme=dark" width="650" height="650" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
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