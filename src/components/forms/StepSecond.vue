


<template>
        <section class="content">
            <div class="content__wrap container">
                <div class="d-flex flex-column align-right">
                    <p class="font__ch">
                        <span class="content__mark">*</span> 為必填欄位
                    </p>
                    <p class="font__en">
                        <span class="content__mark">*</span> = Required Field
                    </p>
                </div>
                <p class="font__ch content__alert pt20">中文中文中文中文中文中文中文中文中文中文</p>
                <p class="font__en content__alert">ABCDEFGHIJKLMN</p>
    
                <div class="remittanceDate pt20">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch">匯款日期
                                <span class="content__mark">*</span>
                            </p>
                            <p class="font__en">Remittance Date
                                <span class="content__mark">*</span>
                            </p>
                        </div>
                        <div class="pc-contentWrap w100">
                            <div class="half">
                                <input v-model="applyDate" type="date" id="txtAPPLY_DATE" class="inputText max380 hasDatepicker" placeholder="請輸入匯款日期 Please enter remittance date.">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="remittanceCurrency pt20">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch">
                                匯款幣別及金額
                                <span class="content__mark">*</span>
                            </p>
                            <p class="font__en">
                                Remittance Currency and Amount
                                <span class="content__mark">*</span>
                            </p>
                        </div>
                        <div class="pc-contentWrap w100">
                            <div class="half">
                                <div class="mx200 w100">
                                    <select v-model="ddlCURR" name="ddlCURR_CODE" id="ddlCURR_CODE" class="inputSelect w100">
                                        <option v-for="(ddlCUUR, index) in ddlCURRS" :value="ddlCUUR.value" :key="index">{{ ddlCUUR.text }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="font__ch--title">受款人資料</h2>
                <h2 class="font__en--title">Beneficiary Information</h2>
    
                <div class="beneficiaryAccount pt40">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch">受款人帳號
                                <span class="content__mark">*</span>
                            </p>
                            <p class="font__en">Beneficiary Account No.
                                <span class="content__mark">*</span>
                            </p>
                        </div>
                        <div class="pc-contentWrap w100">
                            <div class="half">
                                <input v-model="benefAccount" type="text" name="txtBENEF_ACCOUNT" id="txtBENEF_ACCOUNT" class="inputText max380 js-inputCheck toupper" maxlength="32">
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="beneficiaryName pt20">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch">受款人名稱
                                <span class="content__mark">*</span>
                            </p>
                            <p class="font__en">Beneficiary Name
                                <span class="content__mark">*</span>
                            </p>
                        </div>
                        <div class="pc-contentWrap w100">
                            <div class="half">
                                <input v-model="benefName" type="text" name="txtBENEF_NAME" id="txtBENEF_NAME" class="inputText max380 js-inputCheck toupper">
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="beneficiaryNature pt20">
                    <div class="half">
                        <div class="pc-titleWrap w100">
                            <p class="font__ch">受款人身分別
                                <span class="content__mark">*</span>
                            </p>
                            <p class="font__en">Beneficiary Nature
                                <span class="content__mark">*</span>
                            </p>
                        </div>
                        <div class="pc-contentWrap w100">
                            <div class="between">
                                <div v-for="(benefNature, index) in benefNatures" :key="index">
                                    <input v-model="Nature" type="radio" :id="index" :value="benefNature.value" name="rbtnBENEF_NATURE" @click="getNature(benefNature.value)">
                                    <label :for="index" :id="index" class="radio__label">
                                        <span></span>
                                        <div class="radio__wrap">
                                            <p class="font__ch">{{ benefNature.nature__ch }}</p>
                                            <p class="font__en">{{ benefNature.nature__en }}</p>
                                        </div>
                                    </label>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <div class="btn mt60">
            <div class="btn__wrap">
                <router-link to="/Forms/StepThird" class="btn__normal" v-on:click="saveData()">
                        <p class="font__ch">下一步</p>
                        <p class="font__en">Next</p>
                </router-link>
            </div>
        </div>
    
    
    </template>
    
    <script>
    
    export default {
        data(){
            return{
                applyDate: "",
                ddlCURR: "",
                benefAccount: "",
                benefName: "",
                Nature: "",
                NatureData: "",
                ddlCURRS:[
                    {
                        text: "SELECT 請選擇",
                        value: null
                    },
                    {
                        text: "AUD 澳幣",
                        value: "AUD 澳幣"
                    },
                    {
                        text: "CAD 加拿大幣",
                        value: "CAD 加拿大幣"
                    },
                    {
                        text: "CHF 瑞士法郎",
                        value: "CHF 瑞士法郎"
                    },
                    {
                        text: "CNY 人民幣",
                        value: "CNY 人民幣"
                    },
                    {
                        text: "EUR 歐元",
                        value: "EUR 歐元"
                    },
                    {
                        text: "GBP 英鎊",
                        value: "GBP 英鎊"
                    },
                    {
                        text: "HKD 港幣",
                        value: "HKD 港幣"
                    },
                    {
                        text: "JPY 日圓",
                        value: "JPY 日圓"
                    },
                    {
                        text: "MXN 墨西哥披索",
                        value: "MXN 墨西哥披索"
                    },
                    {
                        text: "NZD 紐西蘭幣",
                        value: "NZD 紐西蘭幣"
                    },
                    {
                        text: "SEK 瑞典幣",
                        value: "SEK 瑞典幣"
                    },
                    {
                        text: "SGD 新加坡幣",
                        value: "SGD 新加坡幣"
                    },
                    {
                        text: "THB 泰銖",
                        value: "THB 泰銖"
                    },
                    {
                        text: "USD 美元",
                        value: "USD 美元"
                    },
                    {
                        text: "ZAR 南非幣",
                        value: "ZAR 南非幣"
                    }
    
                ],
                benefNatures:[
                    {
                        nature__ch: "民間",
                        nature__en: "Non-government",
                        value: "1"
                    },
                    {
                        nature__ch: "政府",
                        nature__en: "Government",
                        value: "2"
                    },
                    {
                        nature__ch: "公營事業",
                        nature__en: "Public Enterprise",
                        value: "3"
                    }
                ]
            }
        },
        methods: {
            saveData(){
                this.$store.state.applyDate = this.applyDate,
                this.$store.state.ddlCURR = this.ddlCURR,
                this.$store.state.benefAccount = this.benefAccount,
                this.$store.state.benefName = this.benefName,
                this.$store.state.Nature = this.NatureData,
                this.$store.state.step2 = true
            },
            getNature(data){
                if(data == "1"){
                    this.$store.state.NatureData = "民間 Non-government"
                }
                else if(data == "2"){
                    this.$store.state.NatureData = "政府 Government"
                }
                else if(data == "3"){
                    this.$store.state.NatureData = "公營事業 Public Enterprise"
                }
            }
        }
    
    }
    
</script>
<style scoped src="@/assets/css/forms/forexProcess-2.css" />
<style scoped>
    *{
        text-align: justify;
    }
    p{
        margin: 0;
    }
    .mt-60{
        margin: 60px;
    }
</style>