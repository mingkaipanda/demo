<template>
    <TodoFlow />
    <StepFirst />
</template>

<script>

import StepFirst from '@/components/forms/StepFirst.vue'
import TodoFlow from '@/components/forms/shared/TodoFlow.vue'

export default {
    name: 'StepFirstView',
    components: {
        StepFirst,
        TodoFlow
    }
}

</script>
