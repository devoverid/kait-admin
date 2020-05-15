<template>
    <div>
        <div class="title mt-24">
            <h1 class='font-semibold text-gray-700'>Sign in</h1>
            <p class='text-sm text-gray-600 tracking-wider'>You must sign in to continue to KAIT.</p>
        </div>
        <transition name='fade'>
        <kait-alert :type="success===true?'success':'danger'" class='mt-4' v-if="success!== null">{{ success===true?successMsg:failedMsg }}</kait-alert>
        </transition>
        <form class='mt-4' @submit.prevent="login">
            <kait-input type="text" label="Username" v-model="inputUsername"></kait-input>
            <kait-input type="text" label="Password" v-model="inputPassword"></kait-input>
            <div class='mt-4'>
                <router-link to="/auth/forgot-password" class='float-left clear-both text-sm'> Forgot your password?</router-link>
                <kait-button type="submit" class='float-right ' color="primary">Submit</kait-button>
            </div>
        </form>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputUsername: '',
            inputPassword: '',
            username: 'admin',
            password: 'admin',
            success: null,
            successMsg: "Login success. We will redirecting you in seconds",
            failedMsg: "Login failed. Please check your credentials"
        }
    },
    methods: {
        login() {
            if(this.inputUsername == this.username && this.inputPassword == this.password) {
                this.success = true;

                setTimeout(() => {
                    this.$router.push("/")
                }, 2000);
            }else{
                this.success = false;
            }
        }
    }

}
</script>
<style lang="scss">
    .logo img {
        height: 50px;
    }
</style>