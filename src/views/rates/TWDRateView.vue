<template>
    <NavBar />
    <TWDRate />
</template>

<script>

import TWDRate from '@/components/rates/TWDRate.vue'
import NavBar from '@/components/rates/shared/NavBar.vue'

export default {
    components: {
        TWDRate,
        NavBar
    }
}

</script>