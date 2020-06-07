<template>
    <div class="kait-component">
        <div class="table-responsive" v-if="responsive">
            <table :class="{'table w-full table-auto border-collapse':true, 'table-hover': type=='hover', 'table-striped': type=='striped', 'table-bordered': type=='bordered', 'table-no-border': type=='no-border'}">
                <slot/>
            </table>
        </div>
        <table v-else :class="{'table w-full table-auto border-collapse':true, 'table-hover': type=='hover', 'table-striped': type=='striped', 'table-bordered': type=='bordered', 'table-no-border': type=='no-border'}">
            <slot/>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String
        },
        responsive: {
            type: Boolean,
            default:true
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/_table";
</style>