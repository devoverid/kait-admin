<template>
    <div class="container mx-auto">
        <div class="flex">
            <div class="md:w-full px-5 lg:w-5/12 mx-auto">
                <kait-card class='mt-32'>
                    <kait-card-body class='py-12 px-8'>
                        <img src="@/assets/images/logo/logo.png" alt="Kait Logo"  class="w-48">
                        <h3 class='mt-12 text-4xl font-bold'>Sign In</h3>
                        <p class='mb-8 text-normal'>You must sign in before access to the main dashboard.</p>
                        <!-- <div class="w-24 h-1 bg-blue-600 mb-8"></div> -->
                        <!-- <p>Before continuing, please log in to your account and start creating</p> -->
                        <form>
                            <kait-input label-placeholder="Username" icon="fas fa-user"/>
                            <kait-input type="password" label-placeholder="Password" icon="fas fa-lock" class='mt-4'/>
                            <kait-checkbox label="Remember Me"></kait-checkbox>
                            <div class="overflow-hidden mt-8">
                                <kait-button color="primary" class='float-right'>Submit</kait-button>
                            </div>

                            <p class='text-center mt-8'>Don't have an account? <router-link to="/auth/register">Register now.</router-link></p>
                        </form>
                    </kait-card-body>
                </kait-card>
                <p class='text-white text-center mt-8'>Copyright &copy; 2020 Komunitas IT Mengajar</p>
            </div>
        </div>
    </div>
</template>