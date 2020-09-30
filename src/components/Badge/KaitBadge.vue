<template>
    <span :class="{'badge bg-gray-400 rounded-lg px-2  box-border py-1 mb-2 inline-block font-normal tracking-wide align-middle':true, [`badge-${type}`]:true}">
        <slot>aaa</slot>
    </span>
</template>
<script>
export default {
    props: {
        type: {
            required: false,
            default: "primary"
        }
    }
}
</script>