<template>
    <div :class="{'kait-component flex relative z-10':true, 'justify-start':position=='left','justify-end':position=='right'}">
        <div class="toggler">
            <slot name="toggler"></slot>
        </div>
        <transition :name="animation">
            <div class="kait-dropdown border border-gray-200 absolute bg-white rounded-sm overflow-hidden"  v-show="value">
                <slot name="dropdown"></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    mounted() {
    },
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        animation: {
            type: String,
            default: "slide-down"
        },
        position: {
            type: String,
            default: 'left'
        },
    },
    methods: {
        
    },
    watch: {
        value() {
            if(this.value==0) this.$emit("onClose")
            else this.$emit("onOpen")
        }  
    },
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/_dropdown";
</style>