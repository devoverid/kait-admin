<template>
    <div :class="{'progress h-2': true, 'flex items-center': withLabel}">
        <div :class="{'bg-gray-400 rounded-md relative h-2 h-full':true, 'w-full': !withLabel, 'w-94/100': withLabel}">
            <div :class="{'progress-bar absolute left-0 top-0 bottom-0 rounded-md':true,[`progress-${color}`]: true, 'progress-bar-striped':striped}" :style="`width:${percentage}%`"></div>
        </div>
        <div class="w-6/100 text-right text-sm text-gray-600" v-if="withLabel" >{{ percentage }}%</div>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            required: true,
            type: String
        },
        percentage: {
            required: true,
            type: Number,
        },
        withLabel: {
            required: false,
            type: Boolean
        },
        striped: {
            required: false,
            type: Boolean
        }
    },
    computed: {
        getWidth() {
            return `width: ${this.percentage}`
        }
    }
}
</script>