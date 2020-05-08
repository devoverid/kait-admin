<template>
    <div>
        <transition name="fade" v-if="dismissable">
            <div :class="{'px-4 py-3 mb-3 rounded-md shadow-md text-sm relative alert-dismissable':true, [`alert-`+type]: (type!=='')}" v-show="!dismissed">
                <div class='text-xl font-medium mb-2' v-if="title"><i :class="{[icon]:true, 'mr-1 text-normal':true}" v-if="icon"></i> {{ title }}</div>
                <i :class="icon" v-if="icon"></i>  <slot/>
                <button class=" absolute right-0 top-0 bottom-0 px-4 font-bold text-lg text-white-50" @click="dismissed=true">x</button>
            </div>
        </transition>
        <div :class="{'px-4 py-3 mb-3 rounded-md shadow-md text-sm relative':true, [`alert-`+type]: (type!=='')}" v-else>
            <div class='text-xl font-medium mb-2' v-if="title"><i :class="{[icon]:true, 'mr-1 text-normal':true}" v-if="icon"></i> {{ title }}</div>
            <i :class="{[icon]:true, 'mr-1 text-xs':true}" v-if="icon && !title"></i>  <slot/>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: "primary"
        },
        icon: {
            type: String,
            required: false
        },
        dismissable: {
            type: Boolean,
            required: false,
        },
        title: {
            type: String,
            required:false,
        }
    },
    data() {
        return {
            dismissed: false
        }
    }
}
</script>
<style lang="scss">
    
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>