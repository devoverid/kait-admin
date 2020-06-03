<template>
    <div class='kait-component'>
        <div :class="{'kait-checkbox':true, [`kait-checkbox-${color}`]:true}">
            <label :class="{'flex py-1 items-center':true, 'cursor-not-allowed':disabled}">
                <input type="checkbox" :name="name" :id="name" @change="handleChange()" v-model="checkbox" :disabled="disabled" class='kait-input-checkbox'>
                <span class='ml-2'>{{label}}</span>
            </label>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        if(typeof this.value == 'boolean') {
            this.checkbox = this.value;
        }
    },
    props: {
        id: {
            type: String,
            default: null,
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'primary'
        },
        label: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            required: true,
        },
        val: {
            type: String,
            required: true,
        },
        value: {
            default: false,
        }
    },
    data() {
        return {
            checkbox: false
        }
    },
    methods: {
        handleChange() {
            let emit;
            console.log(typeof this.value)
            if(typeof this.value == "boolean") {
                emit = this.checkbox;
            }else if(typeof this.value == "object") {
                console.log(this.value)
                let array = this.value;
                let index = array.indexOf(this.val);

                if(this.checkbox == true) {
                    if (index < 0) {
                        array.push(this.val);
                    }
                }else{
                    if (index > -1) {
                        array.splice(index, 1);
                    }
                }
                console.log(array)
            }
            //  this.$emit('input', emit);
             this.$emit('change');
         }
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/_checkbox";
</style>