<template>
    <div class="kait-component">
        <div :class="{'kait-input-wrapper relative my-3':true, [`kait-input-${color}`]: true, 'is-input-icon':icon, 'kait-input-placeholder': placeholder, 'is-focus': isFocus}" v-if="placeholder">
            <input 
                v-on:input="updateValue($event.target.value)" class='kait-input border border-gray-400 rounded-sm px-3 py-2 w-full transition duration-200' 
                @focus="isFocus=true" 
                @blur="isFocus=false"
                :disabled='disabled'
                :type="type"
                :value="value"
                >
            <span :class="{'kait-placeholder absolute cursor-text select-none text-xs w-full px-3 pointer-events-none text-gray-600 duration-200':true, 'opacity-0': value!==''}">{{ placeholder }}</span>
            <i :class="{[icon]:true, 'kait-input-icon absolute px-2 border-r border-gray-400': true}" v-if="icon"></i>
        </div>
        <div :class="{'kait-input-wrapper relative my-3 mt-4':true, [`kait-input-${color}`]: true, 'is-input-icon':icon,  'is-label-placeholder': labelPlaceholder, 'is-focus': isFocus}" v-else-if="labelPlaceholder">
            <input 
                v-on:input="updateValue($event.target.value)" class='kait-input border border-gray-400 rounded-sm px-3 py-2 w-full transition duration-200' 
                @focus="isFocus=true" 
                @blur="isFocus=false"
                :disabled='disabled'
                :type="type"
                :value="value"
                >
            <span :class="{'kait-placeholder absolute cursor-text select-none text-xs w-full px-3 pointer-events-none text-gray-600 duration-200':true, 'stick': value!=='' }">{{ labelPlaceholder }}</span>
            <i :class="{[icon]:true, 'kait-input-icon absolute px-2 border-r border-gray-400': true}" v-if="icon"></i>
        </div>
        <div :class="{'kait-input-wrapper relative mt-3 mb-1':true, [`kait-input-${color}`]: true, 'is-input-icon':icon, 'kait-input-label': label, 'is-focus': isFocus}" v-else-if="label ">
            <span :class="{'kait-label  cursor-text select-none text-xs w-full pointer-events-none text-gray-700 duration-200':true}">{{ label }}</span>
            <input 
                v-on:input="updateValue($event.target.value)" class='kait-input mt-1 border border-gray-400 rounded-sm px-3 py-2 w-full transition duration-200' 
                @focus="isFocus=true" 
                @blur="isFocus=false"
                :type="type"
                :value="value"
                >
            <i :class="{[icon]:true, 'kait-input-icon absolute px-2 border-r border-gray-400': true}" v-if="icon"></i>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        disabled: {
            required: false,
            type: Boolean,
            default: false,
        },
        placeholder: {
            required: false,
            type: String
        },
        label: {
            required: false,
            type: String,
        },
        labelPlaceholder: {
            required: false,
            type: String
        },
        icon: {
            required: false,
            type: String,
        },
        color: {
            required: false,
            default: 'primary',
            validator: function (value) {
                return ['primary', 'success', 'warning', 'danger', 'dark'].indexOf(value) !== -1
            }
        },
        value: {
            type: String,
            default: '',
        },
        type: {
            required: false,
            default: 'text',
            validator: function (value) {
                return ['text', 'email', 'number', 'url', 'password'].indexOf(value) !== -1
            }
        }
    },
    data() {
        return {
            isFocus: false,
        }
    },
    watch: {
        isFocus() {
            if(this.isFocus) this.$emit('focus');
            else this.$emit('blur');
        }
    },
    methods: {
        updateValue(value) {
            this.value = value;
            this.$emit('input', value)
        }
    }
    
}
</script>
<style lang="scss">
@import "@/assets/scss/components/_input";
</style>