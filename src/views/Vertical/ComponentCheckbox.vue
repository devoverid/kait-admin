<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Checkbox</h3>
                </div>
                <div class="breadcrumb">
                </div>
            </div>  
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Basic Usage</kait-card-header>
                    <kait-card-body>
                        <kait-checkbox name="checkbox1" v-model="checkBox1" val="Vue" label="Vue"></kait-checkbox>
                        <kait-checkbox name="checkbox1" v-model="checkBox1" val="React" label="React"></kait-checkbox>
                        <kait-checkbox name="checkbox1" v-model="checkBox1" val="Angular" label="Angular"></kait-checkbox>
                        <kait-checkbox name="checkbox1" disabled val="disabled" label="Disabled"></kait-checkbox>
                    </kait-card-body>
                    <kait-card-footer>
                        You choosed:  {{checkBox1}}
                    </kait-card-footer>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Color</kait-card-header>
                    <kait-card-body>
                        <kait-checkbox name="checkboxColor" v-model="checkboxColor.primary" color="primary" val="primary" label="Primary"></kait-checkbox>
                        <kait-checkbox name="checkboxColor" v-model="checkboxColor.secondary" color="secondary" val="secondary" label="Secondary"></kait-checkbox>
                        <kait-checkbox name="checkboxColor" v-model="checkboxColor.success" color="success" val="success" label="Success"></kait-checkbox>
                        <kait-checkbox name="checkboxColor" v-model="checkboxColor.warning" color="warning" val="warning" label="Warning"></kait-checkbox>
                        <kait-checkbox name="checkboxColor" v-model="checkboxColor.danger" color="danger" val="danger" label="Danger"></kait-checkbox>
                        <kait-checkbox name="checkboxColor" v-model="checkboxColor.dark" color="dark" val="dark" label="Dark"></kait-checkbox>
                    </kait-card-body>
                    <kait-card-footer>
                    </kait-card-footer>
                </kait-card>
            </div>
        </div>
       
    </div>
</template>
<script>
import 'vue-waves-effect/dist/vueWavesEffect.css'

export default {
    data() {
        return {
            checkBox1: [],
            checkboxColor: {
                primary: true,
                secondary: true,
                warning: true,
                danger: true,
                success: true,
                dark: true,
            }
        }
    },
    methods: {
    }
}
</script>
<style lang="scss">
    
.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>