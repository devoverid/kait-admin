<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Input</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Default Input</kait-card-header>
                    <kait-card-body>
                        <kait-input placeholder="Placeholder"/>
                        <kait-input placeholder="Disabled" disabled/>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Label Placeholder</kait-card-header>
                    <kait-card-body class='flex'>
                        <div class="w-1/2 pr-2">
                            <kait-input label-placeholder="Username" />
                        </div>
                        <div class="w-1/2">
                            <kait-input label-placeholder="Password"/>
                        </div>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Icon</kait-card-header>
                    <kait-card-body class='flex'>
                        <div class="w-1/2 pr-2">
                            <kait-input label-placeholder="Username" icon="fas fa-user"/>
                        </div>
                        <div class="w-1/2">
                            <kait-input label-placeholder="Password" icon="fas fa-lock" type="password" color="danger"/>
                        </div>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Label</kait-card-header>
                    <kait-card-body>
                        <kait-input label="Username"/>
                        <kait-input label="Password"/>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Color</kait-card-header>
                    <kait-card-body>
                        <div class="flex">
                            <div class="w-1/3 pr-2">
                                <kait-input label="Primary" color="primary"/>
                            </div>
                            <div class="w-1/3 pr-2">
                                <kait-input label="Success" color="success"/>
                            </div>
                            <div class="w-1/3">
                                <kait-input label="Danger" color="danger"/>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-1/2 pr-2">
                                <kait-input label="Warning" color="warning"/>
                            </div>
                            <div class="w-1/2">
                                <kait-input label="Dark" color="dark"/>
                            </div>
                        </div>
                    </kait-card-body>
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
            showCard: true,
            dismissed: false,
        }
    },
    methods: {
        toggleCard() {
            this.showCard = !this.showCard;
        },
        fadeOut() {
            this.dismissed=true;
        }
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