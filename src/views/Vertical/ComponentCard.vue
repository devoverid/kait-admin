<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Card</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Card Title</kait-card-header>
                    <kait-card-body>
                        This is some text within a card body. 
                    </kait-card-body>
                    <kait-card-footer>
                        Card Footer
                    </kait-card-footer>
                </kait-card>
                <kait-card>
                    <kait-card-header>Action Buttons</kait-card-header>
                    <kait-card-body>
                        This is some text within a card body. 
                    </kait-card-body>
                    <kait-card-footer class='text-right'>
                        <button class="btn btn-primary">Submit</button>
                    </kait-card-footer>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                
                <kait-card>
                    <kait-card-header>Links</kait-card-header>
                    <kait-card-body>
                        This is some text within a card body. 
                    </kait-card-body>
                    <kait-card-footer>
                        <a href="#" class="mr-2">Open Link</a>
                        <a href="#" class="mr-2">Another Link</a>
                    </kait-card-footer>
                </kait-card>
                <kait-card>
                    <kait-card-header>Another Footer</kait-card-header>
                    <kait-card-body>
                        This is footer with <code>.bg-gray-100</code>. 
                    </kait-card-body>
                    <kait-card-footer class='bg-gray-100'>
                        <a href="#" class="mr-2">Open Link</a>
                        <a href="#" class="mr-2">Another Link</a>
                    </kait-card-footer>
                </kait-card>
            </div>
        </div>
        <h2 class="section-title">Card Variants</h2>
        <p class="section-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum</p>
        <div class="row">
            <div class="col-md-3 col-12">
                <kait-card>
                    <img class="w-full" src="@/assets/images/card-top.jpg" alt="Sunset in the mountains">
                    <kait-card-body>
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="bg-white text-gray-600 tracking-wide mb-0">
                            This is a card with image. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </kait-card-body>
                    <kait-card-footer>
                        <a href="http://"><kait-badge type='light' class='font-semibold mr-2 transition duration-150 hover:text-white hover:bg-gray-700'>#photography</kait-badge></a>
                        <a href="http://"><kait-badge type='light' class='font-semibold mr-2 transition duration-150 hover:text-white hover:bg-gray-700'>#travel</kait-badge></a>
                        <a href="http://"><kait-badge type='light' class='font-semibold mr-2 transition duration-150 hover:text-white hover:bg-gray-700'>#winter</kait-badge></a>
                    </kait-card-footer>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>
                        <h6 class='mb-0'>Show/hide</h6>
                        <template v-slot:card-action>
                            <div class='ml-auto'>
                                <kait-button size="sm" @click.native="toggleCard"><i class="fas fa-minus"></i></kait-button>
                            </div>
                        </template>
                    </kait-card-header>
                    <transition name="slide">
                        <div v-if="showCard">
                            <kait-card-body>
                                <p class="text-sm mb-2"> You can show or hide this card. </p>
                            </kait-card-body>
                            <kait-card-footer>
                                Card footer
                            </kait-card-footer>
                        </div>
                    </transition>
                </kait-card>
                <transition name="fade">
                    <kait-card v-show="!dismissed">
                        <kait-card-header>
                            <h6 class='mb-0'>Dismissable</h6>
                            <template v-slot:card-action>
                                <div class='ml-auto'>
                                    <kait-button size="sm" @click.native="fadeOut()"><i class="fas fa-times"></i></kait-button>
                                </div>
                            </template>
                        </kait-card-header>
                            <div >
                                <kait-card-body>
                                    <p class="text-sm mb-2"> You can dismiss this card. </p>
                                </kait-card-body>
                                <kait-card-footer>
                                    Card footer
                                </kait-card-footer>
                            </div>
                    </kait-card>
                </transition>
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