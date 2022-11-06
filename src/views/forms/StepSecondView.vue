<template>
    <TodoFlow />
    <StepSecond />
</template>

<script>

import StepSecond from '@/components/forms/StepSecond.vue'
import TodoFlow from '@/components/forms/shared/TodoFlow.vue'


export default {
    name: 'StepSecondView',
    components: {
        StepSecond,
        TodoFlow
    }
}
</script>
