<template>
    <div id="app">
        <transition name="fadein" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>
<style lang="scss">
    .fadein-enter-active,
    .fadein-leave-active {
        transition: all .2s;
    }
    .fadein-leave {
        opacity: 1;
    }
    .fadein-leave-to {
        opacity: 0;
    }
    .fadein-enter {
        opacity: 0;
    }
    .fadein-enter-to {
        opacity: 1;
    }
</style>