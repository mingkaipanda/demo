<template>
    <TodoFlow />
    <StepThird />
</template>

<script>

import TodoFlow from '@/components/forms/shared/TodoFlow.vue'
import StepThird from '@/components/forms/StepThird.vue'

export default{
    name: 'StepThirdView',
    components: {
        TodoFlow,
        StepThird
    }
}

</script>
