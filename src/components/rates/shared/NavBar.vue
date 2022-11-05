<template>
    <div class="navTabs">
        <div class="container">
            <a class="point-light ml-10" href="#navTabs" accesskey="L" id="navTabs">:::</a>
            <div class="navTabsWrap ml-10">
                <router-link v-for="(nav, index) in navs"  
                            :to=nav.url 
                            :title=nav.text class="nav-btn" 
                            :class="[nav.url == this.$route.path ? 'nav-btn-active' : '']"
                            :key="index"
                >
                    {{ nav.text }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/rate/base.css"></style>
<style scoped src="@/assets/css/rate/accessibility.css"></style>

<script>
export default {
    data(){
        return {
            navs: [
                {
                    text: "臺幣存放款利率",
                    url: "/RateIndex/TWDRate"
                },
                {
                    text: "外幣存款利率",
                    url: "/RateIndex/ForexDepositRate"
                },
                {
                    text: "即期外匯匯率",
                    url: "/RateIndex/ForexRate"
                }
            ]
        }
    }
}

</script>