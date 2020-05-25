<template>
    <div class='kait-component flex'>
        <div :class="{'kait-pagination flex justify-between': true, 'ml-auto': float=='right'}">
            <div :class="{'kait-pagination-prev bg-gray-300 px-3 py-2 rounded-tl-md rounded-bl-md hover:text-white cursor-pointer transition duration-300':true, 'mr-2': type=='simple', [`hover:bg-${color}`]: true}" @click="updateValue('min')"><i class="fas fa-chevron-left"></i></div>
            <div class="kait-pagination-numbers inline-flex mx-2" v-if="type!=='simple'">
                <div @click="updateValue('to', 1)" :class="{'bg-gray-300 px-3 py-2 cursor-pointer transition duration-300 select-none':true, [`hover:text-${color}`]: true}">1</div>
                <div  :class="{'bg-gray-300 px-3 py-2 cursor-pointer transition duration-300 select-none': true, [`hover:text-${color}`]: true}" >...</div>
                <div  :class="{'bg-gray-300 px-3 py-2 cursor-pointer transition duration-300 select-none': true, [`hover:text-${color}`]: true}" v-if="type=='long' && current-1 > 0" @click="updateValue('min')">{{current-1}}</div>
                <div  :class="{'bg-gray-300 px-3 py-2 cursor-pointer transition duration-300 select-none text-white': true, [`bg-${color}`]: true}">{{  current }}</div>
                <div  :class="{'bg-gray-300 px-3 py-2 cursor-pointer transition duration-300 select-none': true, [`hover:text-${color}`]: true}" v-if="type=='long' && current+1 <= total" @click="updateValue('plus')">{{current+1}}</div>
                <div  :class="{'bg-gray-300 px-3 py-2 cursor-pointer transition duration-300 select-none': true, [`hover:text-${color}`]: true}" >...</div>
                <div @click="updateValue('to', total)" :class="{'bg-gray-300 px-3 py-2 cursor-pointer transition duration-300 select-none': true, [`hover:text-${color}`]: true}">{{ total }}</div>
            </div>
            <div :class="{'kait-pagination-next bg-gray-300 px-3 py-2 rounded-tr-md rounded-br-md hover:text-white cursor-pointer transition duration-300': true, [`hover:bg-${color}`]: true}" @click="updateValue('plus')"><i class="fas fa-chevron-right"></i></div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.current=this.value;
    },
    props: {
        total: {
            type: Number,
            default: 1
        },
        value: {
            type: Number
        },
        type: {
            type: String,
            default: 'medium'
        },
        float: {
            type: String,
            default: 'left',
        },
        color: {
            type: String,
            default: 'primary',
        }
    },
    data() {
        return {
            current: 1,
        }
    },
    methods: {
        updateValue(ket, to) {
            if(this.current <= 1 && ket == 'min') {
                return;
            }
            else if(this.current == this.total && ket == 'plus') {
                return;
            }
            if(ket=='min') {
                this.current--;
                this.$emit('input', this.current);
                this.$emit('onPrevPage');
            }
            else if (ket=='plus') {
                this.current++;
                this.$emit('input', this.current);
                this.$emit('onNextPage');
            } else {
                this.current = to;
                this.$emit('input', this.current);
                this.$emit('onToPage');
            }

        }
    },
    watch: {
        value: function() {
            if(this.value > this.total || this.value < 1) {
                this.$emit('input', this.current);
                return;
            }
            this.current = this.value;
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/_pagination";
</style>