<template>
    <button :type="type" :class="{
        'btn px-3 py-2 rounded-sm transition duration-200 font-medium text-sm': true,
        [`btn-${color}`]:  variant=='default',
        [`btn-outline-`+color]: variant=='outline',
        [`btn-${size}`]: size
    }" @click="$emit('click')" v-waves>
        <i :class="{[icon]:true, 'mr-1':true, 'opacity-8':true}" v-if="icon"></i>
        <slot/>
    </button>
</template>
<script>
export default {
    props: {
        type: {
            required: false,
            default: 'button'
        },
        color: {
            required:false,
            default: 'primary'
        },
        icon: {
            required: false,
            type: String
        },
        variant: {
            required: false,
            default: 'default'
        },
        size: {
            required: false,
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/scss/components/_button.scss';
</style>