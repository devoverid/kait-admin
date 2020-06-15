<template>
    <div :class="{'kait-component flex':true, 'items-center':verticalPosition=='center', 'items-start':verticalPosition=='top'}">
        <div :class="{'kait-avatar':true,[`kait-avatar-${size}`]:true, 'with-image': src, 'w-8 h-8':size=='small', 'w-12 h-12': size==undefined, 'w-16 h-16':size=='large'}" @click="$emit('click')">
            <img :src="src" :alt="text" class="rounded-full" v-if="src">
            <div :class="{'rounded-full w-full h-full relative':true,'text-base':size==undefined, 'text-xl': size=='large','text-sm': size=='small'}" :style="{backgroundColor: color} " v-else>
                <span v-if="text">{{text.charAt(0)}}</span>
                <i class="fas fa-user" v-else></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        src: {
            type: String,
        },
        text: {
            type: String,
        },
        color: {
            type: String,
            default: '#C3C3C3'
        },
        size: {
            type: String
        },
        verticalPosition: {
            type: String,
        }
    }
}
</script>
<style lang="scss">
@import "@/assets/scss/components/_avatar";
</style>