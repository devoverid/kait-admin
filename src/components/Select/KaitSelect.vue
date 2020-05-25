<template>
    <div class='kait-component'>
        <div :class="{'kait-select': true, [`kait-select-${color}`]:true, 'is-focus':focus}">
            <v-select 
                :options="options" 
                :label="label"
                v-model="data"
                :placeholder="placeholder"
                @search:focus="onFocus"
                @search:blur="onBlur"
                :multiple="multiple"
                :searchable="true"
                :filterable="filterable"
                @search="onSearch"
               >
                <template slot="no-options">
                    <slot name="no-options"></slot>
                </template>
                <template slot="option" slot-scope="option">
                    <slot name="option" :option="option"></slot>
                </template>
                <template slot="selected-option" slot-scope="option">
                    <slot name="selected-option" :option="option"></slot>
                </template>
            </v-select>
        </div>
    </div>
</template>
<script>
import vSelect from 'vue-select'
export default {
    mounted() {
        console.log(this.options);
    },
    data() {
        return {
            data: '',
            focus: false,
        }
    },
    props: {
        label: {
            required: false,
            type: String,
        },
        options: {
            required: false,
            type: Array
        },
        placeholder: {
            required: false,
            type: String
        },
        color: {
            required:false,
            type: String,
            default: 'primary'
        },
        transition: {
            required:false,
        },
        multiple: {
            required:false,
            type: Boolean,
        },
        searchable: {
            required:false,
            type: Boolean,
            default: true,
        },
        filterable: {
            required: false,
            type: Boolean
        }
    },
    methods: {
        onFocus() {
            this.focus = true;
        },
        onBlur() {
            this.focus = false;
        },
        onSearch(search, loading) {
            this.$emit('search', search, loading);
        }
    },
    watch: {
        data() {
            this.$emit('input', this.data);
        }
    },
    components: {
        vSelect
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/_select";
</style>