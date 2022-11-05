<template>
    <div class="content">
        <div class="contentWrap p-20">
            <ul class="breadcrumb">
                <li>
                    <a href="#content-start" class="point-light ml-10" id="content-start" accesskey="C">:::</a>
                </li>
                <li>
                    <span class="breadcrumb">&nbsp;目前位置&nbsp;>&nbsp;
                        <span class="text-primary">即期外匯匯率</span>
                    </span>
                </li>
            </ul>
            <h2>
                即期外匯匯率表</h2>
            <div class="oneTable">
                <div>
                    <span></span>
                </div>
                <ul class="oneTableWrap">
                    <li>
                        <div class="data">
                            <img src="@/assets/img/clock.svg" alt="" class="dataPic">
                            <span class="dataTitle">資料日期：
                                <span class="dataTitle-date">{{ new Date() }}</span>
                                <span class="dataTitle-time">{{ }}</span>
                            </span>
                        </div>
                        <table class="baseTable">
                            <thead>
                                <tr>
                                    <td scope="col" width="50%" align="center">類別</td>
                                    <td scope="col" width="25%" align="right">買入</td>
                                    <td scope="col" width="25%" align="right">賣出</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr 
                                    v-for="(exchangeRate, index) in exchangeRates"
                                    :key="index"
                                >
                                    <td scope="row">{{ exchangeRate.currency }}</td>
                                    <td align="right">{{ exchangeRate.buy }}</td>
                                    <td align="right">{{ exchangeRate.sell }}</td>
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
    name: 'ForexRate',
    data(){
        return {
            exchangeRates:
            [
                {
                    currency: "人民幣(CNY)",
                    buy: 4.424,
                    sell: 4.474
                },
                {
                    currency: "澳幣(AUD)",
                    buy: 20.25,
                    sell: 20.45
                },
                {
                    currency: "歐元(EUR))",
                    buy: 30.94,
                    sell: 31.34
                },
                {
                    currency: "日圓(JPY)",
                    buy: 0.2176,
                    sell: 0.2216
                },
                {
                    currency: "泰銖(THB)",
                    buy: 0.821,
                    sell: 0.861
                },
                {
                    currency: "港幣(HKD)",
                    buy: 4.017,
                    sell: 4.077
                },
                {
                    currency: "紐西蘭幣(NZD)",
                    buy: 17.66,
                    sell: 17.9
                },
                {
                    currency: "瑞士法郎(CHF)",
                    buy: 32.09,
                    sell: 32.29
                },
                {
                    currency: "南非幣(ZAR)",
                    buy: 1.7,
                    sell: 1.8
                },
                {
                    currency: "瑞典幣(SEK)",
                    buy: 2.838,
                    sell: 2.898
                },
                {
                    currency: "加拿大幣(CAD)",
                    buy: 22.89,
                    sell: 23.07
                },
                {
                    currency: "美元(USD)",
                    buy: 31.72,
                    sell: 31.82
                },
                {
                    currency: "新加坡幣(SGD)",
                    buy: 22.05,
                    sell: 22.21
                },
                {
                    currency: "墨西哥披索(MXN)",
                    buy: 1.537,
                    sell: 1.617
                },
                {
                    currency: "英鎊(GBP)",
                    buy: 35.26,
                    sell: 35.66
                }
            ]
        }
    }
}

</script>