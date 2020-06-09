<template>
    <div class="kait-component">
        <table  :class="{'table not-responsive w-full table-auto border-collapse':true, 'table-hover': type=='hover', 'table-striped': type=='striped', 'table-bordered': type=='bordered', 'table-no-border': type=='no-border'}">
            <slot></slot>
            <tbody  v-if="paginate==true">
                <tr v-for="(row,index) in paginated" :key="index">
                    <slot name="row" :data="row">
                        <td>1</td>
                        <td>Ahmad Saugi</td>
                        <td>Superadmin</td>
                        <td>DKI Jakarta</td>
                        <td><kait-badge type='success' size='small'>Active</kait-badge></td>
                    </slot>
                </tr>
            </tbody>
        </table>
        <slot name="pagination" :totalPage="totalPage"></slot>
    </div>
</template>
<script>
export default {
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
        paginated() {
            return this.data.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
        },
        totalPage() {
            return Math.floor(this.data.length/this.perPage);
        }
    },
    props: {
        type: {
            type: String
        },
        data: {
            type: Array,
            default: [],
        },
        responsive: {
            type: Boolean,
            default: true
        },
        paginate:{
            type: Boolean,
            default: false,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
        serverSide: {
            type: Boolean,
            default: false
        },
        offset: {
            type: Number,
            required: false,
        },
        perPage: {
            type: Number,
            required:false,
        }
        
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/_table";
</style>