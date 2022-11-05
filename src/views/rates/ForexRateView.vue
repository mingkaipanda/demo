<template>
    <NavBar />
    <ForexRate />
</template>

<script>

import ForexRate from '@/components/rates/ForexRate.vue'
import NavBar from '@/components/rates/shared/NavBar.vue'

export default {
    components: {
        ForexRate,
        NavBar
    }
}
</script>