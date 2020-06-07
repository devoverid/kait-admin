<template>
    <div class='todo py-5 px-5 relative select-none hover:bg-gray-100 hover:cursor-pointer'>
        <div class="row">
            <div class="col-12 text-left mb-3">
                <span class="text-white rounded-md px-3 py-2 text-center text-xl inline-block align-middle" :style="`background-color: ${backgroundColor}`">
                    <i :class='icon'></i>
                </span>
            </div>
            <div class="col-12">
                <h6 class='font-bold mb-1'>{{this.title}}</h6>
                <p class="text-gray-600 text-xs">{{desc}}</p>
                <span class="goto absolute text-gray-400 font-light text-xl"><i class="fas fa-chevron-right"></i></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["title", "desc", "icon", "backgroundColor"]
}
</script>
<style lang="scss">
    .todo {
        i {
            width: 20px;
        }
        .goto {
            top: 2rem;
            right: 20px;
        }
        &:not(:last-child) {
            border-bottom: 1px solid #ddd
        }
    }
</style>