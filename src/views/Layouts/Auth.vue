<template>
    <div class='auth'>
        <div class="auth-wrapper w-100 min-h-screen pb-32">
            <transition name='slide' mode='out-in'>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<style lang="scss">
    @import "@/assets/scss/_variables";
    .auth-wrapper {
        background: $main-background;
    }
</style>