<template>
    <div class="error flex justify-center items-center">
        <div class="error-msg">
            <h1 class='text-center text-white'>401</h1>
            <p class='text-white text-center'>You are unauthorized access this page.</p>
            <div class="flex justify-center mt-5">
                <kait-button color="light" variant="outline" @click="$router.go(-1)">Go Back</kait-button>
            </div>
        </div>
    </div>
</template>