<template>
    <div class="kait-component">
        <div :class="{'table w-full table-auto border-collapse':true, 'table-hover': type=='hover', 'table-striped': type=='striped', 'table-bordered': type=='bordered', 'table-no-border': type=='no-border'}">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
    props: ['type']
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/_table";


</style>