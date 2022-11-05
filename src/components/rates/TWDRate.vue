<template>
    <div class="content">
        <div class="contentWrap p-20">
            <ul class="breadcrumb">
                <li>
                    <a href="#content-start" class="point-light ml-p10" accesskey="C" id="content-start">:::</a>
                </li>
                <li>
                    <span class="breadcrumb">
                        &nbsp;目前位置&nbsp;>&nbsp;
                        <span class="text-primary">臺幣存放款利率</span>
                    </span>
                </li>
            </ul>
            <h2>臺幣存放款利率</h2>
            <div class="twoTable">
                <div>
                    <span></span>
                </div>
                <ul class="twoTableWrap">
                    <li>
                        <div class="data">
                            <img src="@/assets/img/clock.svg" alt="" class="dataPic">
                            <span class="dataTitle">
                                資料日期：
                                <span id="dataTitle-date">{{ new Date()}}</span>

                            </span>
                        </div>
                        <table class="baseTable">
                            <thead>
                                <tr>
                                    <th scope="rowgroup" rowspan="2" width="44%" align="center">類別</th>
                                    <th scope="col" width="28%" align="right">機動利率</th>
                                    <th scope="col" width="28%" align="right">固定利率</th>
                                </tr>
                                <tr>
                                    <th scope="col" align="right">年息%</th>
                                    <th scope="col" align="right">年息%</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for = "(TWDDepositRate, index) in TWDDepositRates"
                                    :key="index"
                                    :class="(TWDDepositRate.specific) ? 'bg-primary-2' : ''
                                ">
                                    <td>{{ TWDDepositRate.category }}</td>
                                    <td>{{ TWDDepositRate.floatRate }}</td>
                                    <td>{{ TWDDepositRate.fixedRate }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <div class="data">
                            <img src="@/assets/img/clock.svg" alt="" class="dataPic">
                            <span class="dataTitle">
                                資料日期：
                                <span id="dataTitle-date">{{ new Date() }}</span>
                            </span>
                        </div>
                        <table class="baseTable">
                            <thead>
                                <tr>
                                    <th scope="rowgroup" rowspan="2" width="44%" align="center">類別</th>
                                    <th scope="col" width="28%" align="right">機動利率</th>
                                    <th scope="col" width="28%" align="right">固定利率</th>
                                </tr>
                                <tr>
                                    <th scope="col" align="right">年息%</th>
                                    <th scope="col" align="right">年息%</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(TWDRate, index) in TWDRates"
                                    :key="index"
                                >
                                    <template v-if="TWDRate.specific">
                                        <td>{{ TWDRate.category }}</td>
                                        <td align="right">{{ TWDRate.floatRate }}</td>
                                        <td colspan="1" align="right">{{ TWDRate.fixedRate == null ? '-' : TWDRate.fixedRate}}</td>
                                    </template>
                                    <template v-else>
                                        <td>{{ TWDRate.category }}</td>
                                        <td colspan="2" align="right">{{ TWDRate.floatRate }}</td>
                                    </template>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/rate/base.css"></style>
<style scoped src="@/assets/css/rate/accessibility.css"></style>

<script>

export default {
    name: 'TWDRate',
    data() {
        return {
            TWDDepositRates:
            [
                {
                    "category": "支票存款",
                    "floatRate": "不計息",
                    "fixedRate": "不計息",
                    "specific": false
                },
                {
                    "category": "活期存款",
                    "floatRate": 0.260,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "活期儲蓄存款",
                    "floatRate": 0.340,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "定期存款一個月",
                    "floatRate": 0.850,
                    "fixedRate": 0.850,
                    "specific": true
                },
                {
                    "category": "定期存款三個月",
                    "floatRate": 0.905,
                    "fixedRate": 0.905,
                    "specific": true
                },
                {
                    "category": "定期存款六個月",
                    "floatRate": 1.050,
                    "fixedRate": 1.070,
                    "specific": true
                },
                {
                    "category": "定期存款九個月",
                    "floatRate": 1.190,
                    "fixedRate": 1.210,
                    "specific": true
                },
                {
                    "category": "定期存款一年期",
                    "floatRate": 1.310,
                    "fixedRate": 1.330,
                    "specific": true
                },
                {
                    "category": "定期存款二年期",
                    "floatRate": 1.320,
                    "fixedRate": 1.330,
                    "specific": true
                },
                {
                    "category": "定期存款三年期",
                    "floatRate": 1.330,
                    "fixedRate": 1.330,
                    "specific": true
                },
                {
                    "category": "定期儲蓄存款一年期",
                    "floatRate": 1.340,
                    "fixedRate": 1.360,
                    "specific": false
                },
                {
                    "category": "定期儲蓄存款13個月",
                    "floatRate": 1.350,
                    "fixedRate": 1.370,
                    "specific": false
                },
                {
                    "category": "定期儲蓄存款二年期",
                    "floatRate": 1.350,
                    "fixedRate": 1.370,
                    "specific": false
                },
                {
                    "category": "定期儲蓄存款三年期",
                    "floatRate": 1.360,
                    "fixedRate": 1.380,
                    "specific": false
                },
                {
                    "category": "大額定期存款一個月",
                    "floatRate": 0.250,
                    "fixedRate": 0.260,
                    "specific": true
                },
                {
                    "category": "大額定期存款三個月",
                    "floatRate": 0.260,
                    "fixedRate": 0.270,
                    "specific": true
                },
                {
                    "category": "大額定期存款六個月",
                    "floatRate": 0.280,
                    "fixedRate": 0.300,
                    "specific": true
                },
                {
                    "category": "大額定期存款九個月",
                    "floatRate": 0.300,
                    "fixedRate": 0.310,
                    "specific": true
                },
                {
                    "category": "大額定期存款一年期",
                    "floatRate": 0.330,
                    "fixedRate": 0.340,
                    "specific": true
                },
                {
                    "category": "大額定期存款二年期",
                    "floatRate": 0.400,
                    "fixedRate": 0.400,
                    "specific": true
                },
                {
                    "category": "大額定期存款三年期",
                    "floatRate": 0.420,
                    "fixedRate": 0.420,
                    "specific": true
                },
                {
                    "category": "大額定期儲蓄存款一年期",
                    "floatRate": 0.400,
                    "fixedRate": 0.400,
                    "specific": false
                },
                {
                    "category": "大額定期儲蓄存款13個月",
                    "floatRate": 0.400,
                    "fixedRate": 0.400,
                    "specific": false
                },
                {
                    "category": "大額定期儲蓄存款二年期",
                    "floatRate": 0.400,
                    "fixedRate": 0.400,
                    "specific": false
                },
                {
                    "category": "大額定期儲蓄存款三年期",
                    "floatRate": 0.420,
                    "fixedRate": 0.420,
                    "specific": false
                },
                {
                    "category": "薪資轉帳活期儲蓄存款",
                    "floatRate": 0.380,
                    "fixedRate": null,
                    "specific": true
                },
                {
                    "category": "證券戶活期存款",
                    "floatRate": 0.005,
                    "fixedRate": null,
                    "specific": true
                },
                {
                    "category": "證券戶活期儲蓄存款",
                    "floatRate": 0.005,
                    "fixedRate": null,
                    "specific": true
                },
                {
                    "category": "專戶活期存款",
                    "floatRate": 0.000,
                    "fixedRate": null,
                    "specific": true
                }
            ],
            TWDRates:
            [
                {
                    "category": "信用卡最高利率",
                    "floatRate": 15.000,
                    "fixedRate": null,
                    "specific": true
                },
                {
                    "category": "信用卡次高利率",
                    "floatRate": 14.880,
                    "fixedRate": null,
                    "specific": true
                },
                {
                    "category": "信用卡次低利率",
                    "floatRate": 7.880,
                    "fixedRate": null,
                    "specific": true
                },
                {
                    "category": "信用卡最低利率",
                    "floatRate": 5.880,
                    "fixedRate": null,
                    "specific": true
                },
                {
                    "category": "一個月定儲利率指數",
                    "floatRate": 1.210,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "三個月定儲利率指數",
                    "floatRate": 1.210,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "竹南信月基準利率",
                    "floatRate": 2.470,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "竹南信基準利率",
                    "floatRate": 2.470,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "竹南信一個月定儲利率指數",
                    "floatRate": 1.220,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "竹南信三個月定儲利率指數",
                    "floatRate": 1.220,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "竹南信基本放款利率=竹南信基準利率+4.88%",
                    "floatRate": 7.350,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "嘉義四信基準利率",
                    "floatRate": 2.208,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "嘉義四信三個月定儲利率指數",
                    "floatRate": 1.208,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "嘉義四信基本放款利率=嘉義四信基準利率+3.5%",
                    "floatRate": 5.708,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "月基準利率",
                    "floatRate": 2.590,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "基準利率",
                    "floatRate": 2.590,
                    "fixedRate": null,
                    "specific": false
                },
                {
                    "category": "基本放款利率=基準利率+4%",
                    "floatRate": 6.590,
                    "fixedRate": null,
                    "specific": false
                }
            ]
        }
    }    
}

</script>

<style scoped>



</style>