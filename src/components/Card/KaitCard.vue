<template>
    <div class="shadow-lg border border-gray-100 rounded-md overflow-hidden mb-4 bg-white">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'KaitCard',
}
</script>
<style lang="scss">
    @import '@/assets/scss/components/_card.scss';
</style>