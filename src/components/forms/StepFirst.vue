<template>
    <section class="content my40">
        <div class="content__wrap container">
            <ul class="feature">
                <li>
                    <img src="" alt="" class="feature__img">
                    <div class="feature__wrap">
                        <p class="font__ch">線上預填表單，省時正確又快速！</p>
                        <p class="font__en">Advance entering your remittance information through iExchange, brings you efficient remittance services.</p>
                    </div>
                </li>
                <li>
                    <img src="" alt="" class="feature__img">
                    <div class="feature__wrap">
                        <p class="font__ch">表單送出後僅需攜帶「印鑑、身分證及第二證件」至指定分行即可快速辦理。</p>
                        <p class="font__en">After submitting the form, you’ll only need to bring ‘seal, ID, and secondary proof of ID’ to the intended branch for an efficient process.</p>
                    </div>
                </li>
            </ul>
            <div class="content__scroll">

            </div>
            <input type="checkbox" id="checkAgree" name="checkAgree" v-model="agree" />
            <label for="checkAgree" class="checkbox__label">
                <span></span>
                <div class="checkbox__wrap">
                    <p class="font__ch">我同意上述約定事項。</p>
                    <p class="font__en">I hereby declare that I have agreed the above terms and conditions.</p>
                </div>
            </label>

            <div></div>

            <div class="content__scroll mt40">

            </div>
            <input type="checkbox" id="checkKnow" name="checkKnow" v-model="know">
            <label for="checkKnow" class="checkbox__label">
                <span></span>
                <div class="checkbox__wrap">
                    <p class="font__ch">我已知悉上述約定事項。</p>
                    <p class="font__en">I hereby declare that I have review the above terms and conditions.</p>
                </div>
            </label>
            <div class="btn mt-60">
                <div class="btn__wrap">
                    <!-- <router-link to="/forms/StepSecond" id="lbtnCheck" class="btn__normal disabled" v-on:click="checkUserOk()"></router-link> -->
                    <router-link to="/forms/StepSecond" id="lbtnCheck" :class="[this.agree && this.know ? 'btn__normal' : 'btn__normal disabled']" v-on:click="checkUserOk()">
                        <p class="font__ch">確定</p>
                        <p class="font__en">Confirm</p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    data(){
        return {
            agree: false,
            know: false
        }
    },
    methods: {
        checkUserOk(){
            this.$store.state.step1 = true
        }
    }
}

</script>

<style scoped lang="text/css" src="@/assets/css/forms/forexProcess-1.css"></style>
<style scoped>
    *{
        text-align: justify;
    }
    header {
        margin: -10px;
    }
    p{
        margin: 0;
    }
    .mt-60{
        margin: 60px;
    }
</style>
