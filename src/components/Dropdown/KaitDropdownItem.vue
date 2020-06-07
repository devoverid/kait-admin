<template>
    <div class="kait-component">
        <router-link :to="url" class='block px-4 py-3 hover:bg-gray-200' @click="$emit('click')">
            <div class='kait-dropdown-item '>
                <slot/>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        url: {
            type: String
        },
    }
}
</script>