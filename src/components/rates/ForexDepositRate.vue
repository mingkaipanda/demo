<template>
        <div class="content">
        <div class="contentWrap p-20">
            <ul class="breadcrumb">
                <li>
                    <a href="" class="point-light ml-10" accesskey="C" id="content-start">:::</a>
                </li>
                <li>
                    <span class="breadcrumb">
                        &nbsp;目前位置&nbsp;>&nbsp;
                        <span class="text-primary">外幣存款利率</span>
                    </span>
                </li>
            </ul>
            <h2>外幣存款利率</h2>
            <div class="oneTable">
                <div>
                    <span></span>
                </div>
                <ul class="oneTableWrap">
                    <li>
                        <div class="space-between">
                            <div class="data">
                                <img src="@/assets/img/clock.svg" alt="" class="dataPic">
                                <span class="dataTitle">
                                    資料日期：
                                    <span id="dataTitle-date">{{ new Date()}}</span>
                                </span>
                            </div>
                            <div class="unit">單位： 年息%</div>
                        </div>
                        <table class="rwdTable">
                            <thead>
                                <tr width="100%">
                                    <th scope="rowgroup" rowspan="2" width="20%" align="center">幣別</th>
                                    <th scope="rowgroup" rowspan="2" width="20%" align="center">活期</th>
                                    <th scope="colgroup" colspan="10" width="60%" align="center">定期存款</th>
                                </tr>
                                <tr>
                                    <th scope="col" align="right">一週</th>
                                    <th scope="col" align="right">二週</th>
                                    <th scope="col" align="right">三週</th>
                                    <th scope="col" align="right">一月</th>
                                    <th scope="col" align="right">三月</th>
                                    <th scope="col" align="right">六月</th>
                                    <th scope="col" align="right">九月</th>
                                    <th scope="col" align="right">一年</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(foreignDepositRate, index) in foreignDepositRates"
                                    :key="index"
                                >
                                    <td scope="row" data-th="幣別" class="title">{{ foreignDepositRate.currency != null ? foreignDepositRate.currency : "-" }}</td>
                                    <td data-th="活期">{{ foreignDepositRate.currentDeposit != null ? foreignDepositRate.currentDeposit : "-" }}</td>
                                    <td data-th="一週">{{ foreignDepositRate.timedDeposit.oneWeek != null ? foreignDepositRate.timedDeposit.oneWeek : "-" }}</td>
                                    <td data-th="二週">{{ foreignDepositRate.timedDeposit.twoWeeks != null ? foreignDepositRate.timedDeposit.twoWeeks : "-" }}</td>
                                    <td data-th="三週">{{ foreignDepositRate.timedDeposit.threeWeeks != null ? foreignDepositRate.timedDeposit.threeWeeks : "-" }}</td>
                                    <td data-th="一月">{{ foreignDepositRate.timedDeposit.oneMonth != null ? foreignDepositRate.timedDeposit.oneMonth : "-" }}</td>
                                    <td data-th="三月">{{ foreignDepositRate.timedDeposit.threeMonths != null ? foreignDepositRate.timedDeposit.threeMonths : "-" }}</td>
                                    <td data-th="六月">{{ foreignDepositRate.timedDeposit.sixMonths != null ? foreignDepositRate.timedDeposit.sixMonths : "-" }}</td>
                                    <td data-th="九月">{{ foreignDepositRate.timedDeposit.nineMonths != null ? foreignDepositRate.timedDeposit.nineMonths : "-" }}</td>
                                    <td data-th="一年">{{ foreignDepositRate.timedDeposit.oneYear != null ? foreignDepositRate.timedDeposit.oneYear : "-" }}</td>
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
    name: 'ForexDespositeRate',
    data(){
        return {
            foreignDepositRates:
            [
                {
                    currency: "澳幣(AUD)",
                    currentDeposit: 0.45,
                    timedDeposit:
                    {
                        oneWeek: 0.6,
                        twoWeeks: 0.6,
                        threeWeeks: 0.6,
                        oneMonth: 0.75,
                        threeMonths: 0.95,
                        sixMonths: 1.2,
                        nineMonths: 1.3,
                        oneYear: 1.5
                    }
                },
                {
                    currency: "加拿大幣(CAD)",
                    currentDeposit: 0.6,
                    timedDeposit:
                    {
                        oneWeek: null,
                        twoWeeks: null,
                        threeWeeks: null,
                        oneMonth: 1.1,
                        threeMonths: 1.25,
                        sixMonths: 1.4,
                        nineMonths: 1.6,
                        oneYear: 1.8
                    }
                },
                {
                    currency: "瑞士法郎(CHF)",
                    currentDeposit: 0.001,
                    timedDeposit:
                    {
                        oneWeek: null,
                        twoWeeks: null,
                        threeWeeks: null,
                        oneMonth: 0.001,
                        threeMonths: 0.001,
                        sixMonths: 0.001,
                        nineMonths: 0.001,
                        oneYear: 0.001
                    }
                },
                {
                    currency: "人民幣(CNY)",
                    currentDeposit: 0.08,
                    timedDeposit:
                    {
                        oneWeek: 0.25,
                        twoWeeks: 0.25,
                        threeWeeks: 0.25,
                        oneMonth: 0.8,
                        threeMonths: 0.9,
                        sixMonths: 1.2,
                        nineMonths: 1.2,
                        oneYear: 1.2
                    }
                },
                {
                    currency: "歐元(EUR)",
                    currentDeposit: 0.01,
                    timedDeposit:
                    {
                        oneWeek: 0.02,
                        twoWeeks: 0.02,
                        threeWeeks: 0.02,
                        oneMonth: 0.1,
                        threeMonths: 0.15,
                        sixMonths: 0.25,
                        nineMonths: 0.3,
                        oneYear: 0.35
                    }
                },
                {
                    currency: "英鎊(GBP)",
                    currentDeposit: 0.35,
                    timedDeposit:
                    {
                        oneWeek: null,
                        twoWeeks: null,
                        threeWeeks: null,
                        oneMonth: 0.55,
                        threeMonths: 0.65,
                        sixMonths: 0.8,
                        nineMonths: 0.9,
                        oneYear: 1
                    }
                },
                {
                    currency: "港幣(HKD)",
                    currentDeposit: 0.1,
                    timedDeposit:
                    {
                        oneWeek: 0.15,
                        twoWeeks: 0.15,
                        threeWeeks: 0.15,
                        oneMonth: 0.35,
                        threeMonths: 0.6,
                        sixMonths: 0.8,
                        nineMonths: 1,
                        oneYear: 1.1
                    }
                },
                {
                    currency: "日圓(JPY)",
                    currentDeposit: 0.001,
                    timedDeposit:
                    {
                        oneWeek: 0.001,
                        twoWeeks: 0.001,
                        threeWeeks: 0.001,
                        oneMonth: 0.001,
                        threeMonths: 0.001,
                        sixMonths: 0.001,
                        nineMonths: 0.001,
                        oneYear: 0.001
                    }
                },
                {
                    currency: "墨西哥披索(MXN)",
                    currentDeposit: 2.4,
                    timedDeposit:
                    {
                        oneWeek: 4,
                        twoWeeks: 4.2,
                        threeWeeks: 4.3,
                        oneMonth: 4.9,
                        threeMonths: 5.1,
                        sixMonths: 5.2,
                        nineMonths: 5.4,
                        oneYear: 5.5
                    }
                },
                {
                    currency: "紐西蘭幣(NZD)",
                    currentDeposit: 0.55,
                    timedDeposit:
                    {
                        oneWeek: 0.7,
                        twoWeeks: 0.7,
                        threeWeeks: 0.7,
                        oneMonth: 1,
                        threeMonths: 1.15,
                        sixMonths: 1.3,
                        nineMonths: 1.45,
                        oneYear: 1.6
                    }
                },
                {
                    currency: "瑞典幣(SEK)",
                    currentDeposit: 0.001,
                    timedDeposit:
                    {
                        oneWeek: null,
                        twoWeeks: null,
                        threeWeeks: null,
                        oneMonth: 0.1,
                        threeMonths: 0.15,
                        sixMonths: 0.2,
                        nineMonths: 0.3,
                        oneYear: 0.35
                    }
                },
                {
                    currency: "新加坡幣(SGD)",
                    currentDeposit: 0.05,
                    timedDeposit:
                    {
                        oneWeek: null,
                        twoWeeks: null,
                        threeWeeks: null,
                        oneMonth: 0.25,
                        threeMonths: 0.35,
                        sixMonths: 0.4,
                        nineMonths: 0.45,
                        oneYear: 0.55
                    }
                },
                {
                    currency: "泰銖(THB)",
                    currentDeposit: 0.1,
                    timedDeposit:
                    {
                        oneWeek: null,
                        twoWeeks: null,
                        threeWeeks: null,
                        oneMonth: 0.15,
                        threeMonths: 0.25,
                        sixMonths: 0.3,
                        nineMonths: 0.35,
                        oneYear: 0.4
                    }
                },
                {
                    currency: "美元(USD)",
                    currentDeposit: 0.7,
                    timedDeposit:
                    {
                        oneWeek: 1,
                        twoWeeks: 1,
                        threeWeeks: 1,
                        oneMonth: 1.85,
                        threeMonths: 2.3,
                        sixMonths: 2.7,
                        nineMonths: 2.9,
                        oneYear: 3.1
                    }
                },
                {
                    currency: "南非幣(ZAR)",
                    currentDeposit: 1.4,
                    timedDeposit:
                    {
                        oneWeek: 2.5,
                        twoWeeks: 2.5,
                        threeWeeks: 2.5,
                        oneMonth: 4.1,
                        threeMonths: 4.1,
                        sixMonths: 3.9,
                        nineMonths: 3.9,
                        oneYear: 3.9
                    }
                }
            ]
        }
    }
}

</script>