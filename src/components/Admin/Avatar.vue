<template>
    <img :src="src"  :class='`avatar avatar-${size}`'/>
</template>
<script>
export default {
    props: ['src', 'size'],
}
</script>
<style lang="scss">
    .avatar {
        @apply rounded-full shadow-md
    }
    .avatar-small {
        @apply w-8 h-8;
    }
    .avatar-medium {
        @apply w-12 h-12;
    }
    .avatar-large {
        @apply w-16 h-16;
    }
</style>