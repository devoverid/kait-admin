<template>
    <transition name="fade">
        <div :class="{
                'kait-component kait-modal-wrapper absolute top-0 left-0 right-0 bottom-0  w-100 h-screen flex':true, 
                'modal-center': position=='center', 
                'modal-top-left': position=='top-left',
                'modal-top-right': position=='top-right',
                'modal-top-center': position=='top-center',
                'modal-bottom-left': position=='bottom-right',
                'modal-bottom-right': position=='bottom-right',
                'modal-bottom-center': position=='bottom-center',
                }" v-show="open"  @click="closeModal($event)" :style="{background:background}">
            <div :class="{'kait-modal-container container relative':true, 
                            'mx-auto': ['center','top-center','bottom-center'].includes(position),
                            'ml-auto': ['top-right','bottom-right'].includes(position)}">
                <transition name='fade-slide-down'>
                    <div :class="{'kait-modal bg-white mx-auto rounded-md absolute': true,  'w=full': size=='lg', 'w-2/4': size=='md', 'w-1/3': size=='sm'}"  v-show="open">
                        <div class="modal-header p-5 font-semibold flex justify-between items-center">
                            <h6 class='mb-0'><slot name="modal-header"></slot></h6>
                            <slot name="modal-header-action">
                                <kait-button color='transparent'><a  @click.prevent="closeModal($event, true)" class=''><i class='fas fa-times'></i></a></kait-button>
                            </slot>
                        </div>
                        <div class="modal-body p-5">
                            <slot name="modal-body"></slot>
                        </div>
                        <div class="modal-footer p-5">
                            <slot name="modal-footer"></slot>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </transition>

</template>
<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: false,
            required: false,
        },
        position: {
            type: String,
            required: false,
            default: 'center'
        },
        background: {
            type: String,
            required: false,
            default: "rgba(0,0,0,.7)"
        },
        size: {
            type: String,
            required: false,
            default: "md",
            validator: function (value) {
                return ['sm','md','lg'].indexOf(value) !== -1
            }
        }
    },
    data() {
        return {
            whiteOpened: this.open,
        }
    },
    methods: {
        closeModal(event, force=false) {
            if(!document.querySelector('.kait-modal').contains(event.target)) {
                console.log('clicked outside modal')
                this.$emit('closeModal');
            }else if(force==true){
                this.$emit('closeModal');
            }
        }
    },
}
</script>
<style lang="scss">
    @import '@/assets/scss/components/_modal.scss';
</style>