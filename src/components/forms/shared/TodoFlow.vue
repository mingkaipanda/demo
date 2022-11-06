<template>
    <div class="steps container">
        <ul class="steps__list">
            <li class="steps__name" v-for="(step, index) in steps" :key="index" :class="[ step.todo ? '' : 'todo']">
                <div class="steps__num">{{ step.stepNum }}</div>
                <div class="steps__wrap">
                    <p class="steps__ch">{{ step.stepCh }}</p>
                    <p class="steps__en">{{ step.stepEn }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="text/css" src="@/assets/css/forms/forexProcess-2.css"></style>
<style scoped>
    p{
        margin: 0;
    }
</style>

<script>

export default {
    data(){
        return {
            steps:[
                {
                    stepNum: 1,
                    stepCh: "OOOO",
                    stepEn: "XXXX",
                    todo: this.$store.state.step1
                },
                {
                    stepNum: 2,
                    stepCh: "OOOO",
                    stepEn: "XXXX",
                    todo: this.$store.state.step2
                },
                {
                    stepNum: 3,
                    stepCh: "OOOO",
                    stepEn: "XXXX",
                    todo: this.$store.state.step3
                }
            ]
        }
    },
}

</script>