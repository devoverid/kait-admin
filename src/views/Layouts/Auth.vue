<template>
    <div class='auth'>
        <div class="flex h-screen ">
            <div class="w-full md:w-3/10 lg:w-3/10 xl:w-3/10 h-screen bg-white shadow-xl px-8 pt-16">
                <div >
                    <div class="logo mt-12">
                        <img src="@/assets/images/logo/logo.png" alt="" srcset="">
                    </div>
                    <transition name="slide" mode='out-in'>
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
            <div class="hidden md:block md:w-7/10">
                <div class="bg-wrapper overflow-hidden relative">
                    <div class="auth-menu absolute top-0 left-0 right-0 px-8 py-5">
                        <ul class='inline-flex'>
                            <li class='mr-4'><router-link to="/" class='text-gray-400 hover:text-white'>Home</router-link></li>
                            <li class='mr-4'><router-link to="/auth/login" class='text-gray-400 hover:text-white'>Login</router-link></li>
                            <li><router-link to="/auth/register" class='text-gray-400 hover:text-white'>Register</router-link></li>
                        </ul>
                    </div>
                    <div class="bg w-full h-screen bg-cover bg-no-repeat bg-center" :style="{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,0.5)), url('+require('@/assets/images/background/auth.jpg')+')'}"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    

    .auth-menu {
        z-index: 999;
    }

    .bg-wrapper {
        background-color: rgba(0,0,0,.5);
    }
    .bg {
        transform: scale(2);
        animation-name: bg;
        animation-duration: 60s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    .logo img {
        height: 50px;
    }
    @keyframes bg {
        0% {
            transform: scale(2) translateY(20%);
        }
        25% {
            transform: scale(2) translateY(0);
        }
        50% {
            transform: scale(2) translateY(-20%)
        }
        75% {
            transform: scale(2) translateY(0%)
        }
        100% {
            transform: scale(2) translateY(20%)
        }
    }
</style>