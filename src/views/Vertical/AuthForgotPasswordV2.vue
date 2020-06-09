<template>
    <div>
        <div class="title mt-24">
            <h1 class='font-semibold text-gray-700'>Forgot Password</h1>
            <p class='text-sm text-gray-600 tracking-wider'>Enter your email and we will send you reset password link</p>
        </div>
        <transition name='fade'>
            <kait-alert :type="success===true?'success':'danger'" class='mt-4' v-if="success!== null">{{ success===true?successMsg:failedMsg }}</kait-alert>
        </transition>
        <form class='mt-4' @submit.prevent="success=true">
            <kait-input type="text" label-placeholder="Email" v-model="inputUsername" class='mt-8'></kait-input>
            <div class='mt-4'>
                <kait-button type="submit" class='float-right ' color="primary">Submit</kait-button>
            </div>
        </form>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputEmail: '',
            success: null,
            successMsg: "Please check your email and follow the link to reset password",
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