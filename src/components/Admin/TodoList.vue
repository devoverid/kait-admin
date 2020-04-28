<template>
    <div class='todo'>
        <div class="row">
            <div class="col-2 text-center ">
                <span class="icon align-middle" :style="`background-color: ${backgroundColor}`">
                    <i :class='icon'></i>
                </span>
            </div>
            <div class="col-9">
                <h6 class='todo-title'>{{this.title}}</h6>
                <p class="todo-desc">{{desc}}</p>
                <span class="goto"><i class="fas fa-chevron-right"></i></span>
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
        @apply py-5 px-5 relative select-none;
        .icon {
            @apply text-white rounded-md px-3 py-2 text-center text-xl inline-block;
        }
        i {
            width: 20px;
        }
        .col-2 {
            @apply px-0 
        }
        .todo-title {
            @apply font-bold mb-1
        }
        .todo-desc {
            @apply text-gray-600 text-xs
        }
        .goto {
            @apply absolute text-gray-400 font-light text-xl;
            top: 2rem;
            right: 20px;
        }
        &:not(:last-child) {
            border-bottom: 1px solid #ddd
        }
        // &:first-child {
        //     @apply pt-0;
        // }
        &:hover {
            @apply bg-gray-100 cursor-pointer;
        }
    }
</style>