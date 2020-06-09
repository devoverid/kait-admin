<template>
    <div class='error-page'>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
    .error {
        min-height: 100vh;
        background: linear-gradient(120deg, #396afc, #2948ff);
        h1 {
            text-shadow: 2px 2px 5px #ddd;
            font-size: 10rem;
        }
    }
    body {
        background-color: #000;
    }
</style>