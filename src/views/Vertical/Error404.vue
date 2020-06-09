<template>
    <div class="error flex justify-center items-center">
        <div class="error-msg">
            <h1 class='text-center text-white'>404</h1>
            <p class='text-white text-center'>The page you were looking not found.</p>
            <div class="flex justify-center mt-5">
                <kait-button color="light" variant="outline" @click="$router.go(-1)">Go Back</kait-button>
            </div>
        </div>
    </div>
</template>