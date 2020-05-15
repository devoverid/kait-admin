<template>
    <div>
        <div class="title mt-24">
            <h1 class='font-semibold text-gray-700'>Sign up</h1>
            <p class='text-sm text-gray-600 tracking-wider'>Please fill the form below to create an account.</p>
        </div>
        <transition name='fade'>
        <kait-alert :type="success===true?'success':'danger'" class='mt-4' v-if="success!== null">{{ success===true?successMsg:failedMsg }}</kait-alert>
        </transition>
        <form class='mt-4' @submit.prevent="login">
            <div class="flex">
                <div class="w-1/2 pr-2">
                    <kait-input type="text" label="First Name" v-model="inputUsername"></kait-input>
                </div>
                <div class="w-1/2 pl-2">
                    <kait-input type="text" label="Last Name" v-model="inputUsername"></kait-input>
                </div>
            </div>
            <kait-input type="text" label="Email" v-model="inputPassword"></kait-input>
            <div class="flex">
                <div class="w-1/2 pr-2">
                    <kait-input type="password" label="Password" v-model="inputUsername"></kait-input>
                </div>
                <div class="w-1/2 pl-2">
                    <kait-input type="password" label="Confirm Password" v-model="inputUsername"></kait-input>
                </div>
            </div>
            <div class='mt-4'>
                <router-link to="/auth/login" class='float-left clear-both text-sm'> Have an account?</router-link>
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