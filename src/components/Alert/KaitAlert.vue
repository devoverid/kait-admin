<template>
    <div>
        <transition name="fade" v-if="dismissable">
            <div :class="{'px-4 py-3 mb-3 rounded-md shadow-md text-sm relative alert-dismissable':true, [`alert-`+color]: (color!=='')}" v-show="!dismissed">
                <div class='text-xl font-medium mb-2' v-if="title"><i :class="{[icon]:true, 'mr-1 text-normal':true}" v-if="icon"></i> {{ title }}</div>
                <i :class="icon" v-if="icon"></i>  <slot/>
                <button class=" absolute right-0 top-0 bottom-0 px-4 font-bold text-lg text-white-50" @click="dismiss()">x</button>
            </div>
        </transition>
        <div :class="{'px-4 py-3 mb-3 rounded-md shadow-md text-sm relative':true, [`alert-`+color]: (color!=='')}" v-else>
            <div class='text-xl font-medium mb-2' v-if="title"><i :class="{[icon]:true, 'mr-1 text-normal':true}" v-if="icon"></i> {{ title }}</div>
            <i :class="{[icon]:true, 'mr-1 text-xs':true}" v-if="icon && !title"></i>  <slot/>
        </div>
    </div>
</template>
<script>

/**
* Alert Component
* @displayName Kait Alert
*/
export default {
    props: {
        /**
         * The color for the button.
         * @values primary, secondary, success, danger, warning, dark, light, info
         */
        color: {
            type: String,
            default: "primary"
        },
        
        /**
         * The icon of for inside the button
         */
        icon: {
            type: String,
            required: false
        },
        
        /**
         * Is the alert dismissable?
         */
        dismissable: {
            type: Boolean,
            required: false,
        },

        /**
         * The heading title for the alert.
         */
        title: {
            type: String,
            required:false,
        }
    },
    data() {
        return {
            dismissed: false
        }
    },
    methods: {
        dismiss() {
            this.dismissed = true;
            /**
             * On close event.
             */
            this.$emit('onClose');
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/scss/components/_alert';
</style>