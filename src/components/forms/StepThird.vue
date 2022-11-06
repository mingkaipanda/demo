<template>
    <div id="Step3">
        <section class="content">
            <div class="content__wrap container">
                <h2 class="font__ch--headTitle">請確認您所填寫的資料</h2>
                <h2 class="font__en--headTitle">Please verify your remittance information</h2>

                <div class="remittanceDate pt20">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch gray-7">匯款日期</p>
                            <p class="font__en gray-7">Remittance Date</p>
                        </div>
                        <div class="pc-contentWrap w100">{{ $store.state.applyDate }}</div>
                    </div>
                </div>

                <div class="remittanceCurrency pt20">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch gray-7">匯款幣別及金額</p>
                            <p class="font__en gray-7">Remittance Currency and Amount</p>
                        </div>
                        <div class="pc-contentWrap w100">
                            <span id="CURR_CODE" class="font__ch">{{ $store.state.ddlCURR }}</span>
                            <span id="AMOUNT" class="font__ch">{{  }}</span>
                        </div>
                    </div>
                </div>

                <h2 class="font__ch--title">受款人資料</h2>
                <h2 class="font__en--title">Beneficiary Information</h2>

                <div class="BeneficiaryAccountNo pt20">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch gray-7">受款人帳號</p>
                            <p class="font__en gray-7">Beneficiary Account No.</p>
                        </div>
                        <div class="pc-contentWrap w100">
                            <span id="BENEF_ACCOUNT" class="font_ch">{{ $store.state.benefName }}</span>
                        </div>
                    </div>
                </div>


                <div class="BeneficiaryName pt20">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch gray-7">受款人名稱</p>
                            <p class="font__en gray-7">Beneficiary Name</p>
                        </div>
                        <div class="pc-contentWrap w100">
                            <span id="BENEF_NAME" class="font__ch">{{ $store.state.benefName }}</span>
                        </div>
                    </div>
                </div>
                <div class="beneficiaryNature pt20">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch gray-7">受款人身分別</p>
                            <p class="font__en gray-7">Beneficiary Nature</p>
                        </div>
                        <div class="pc-contentWrap w100">
                            <span id="BENEF_NATURE" class="font__ch">{{ $store.state.NatureData }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    

</template>

<script>
export default {

}
</script>

<style scoped src="@/assets/css/forms/forexProcess-3.css" />
<style scoped src="@/assets/css/forms/forexProcess-4.css" />
<style scoped>

*{
    text-align: left;
    
}

</style>
