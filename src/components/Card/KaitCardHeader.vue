<template>
    <div class='bg-white p-5 rounded-t-md font-bold text-gray-700 flex items-center self-center'>
        <slot/>
        <slot name="card-action" class='ml-auto'/>
    </div>
</template>
<script>
export default {
    name: 'KaitCardHeader',
    
}
</script>