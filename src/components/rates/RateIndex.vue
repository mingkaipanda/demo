<template>
    <div class="content">
        <div class="contentWrap my-50">
            <div class="landingWrap">
                <img src="@/assets/img/kv.jpeg" alt="" class="landingWrapPic">
            </div>
            <a href="" class="point-light ml-10">:::</a>
        </div>
        <div class="list">
            <ul class="listWrap">
                <li class="listTitle"
                    v-for="(content, index) in contents"
                    :key=index
                    >
                    <h1>{{ content.title }}</h1>
                    <ul class="listBtnWrap">
                        <li 
                            v-for = "(button, index) in content.buttons"
                            :key="index"
                            >
                            <router-link :to="button.url" class="btn">
                                {{ button.text}}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>    
</template>

<!-- <style scoped src="@/assets/css/rate/main.css"></style> -->
<style scoped src="@/assets/css/rate/base.css"></style>
<style scoped src="@/assets/css/rate/accessibility.css"></style>

<script>

export default {
    name: 'RateIndex',
    data() {
        return {
            contents: 
            [
                {
                    title: "利率匯率資訊",
                    buttons: 
                    [
                        {
                            text: "臺幣存放款利率",
                            url: "/RateIndex/TWDRate"
                        },
                        {
                            text: "外幣存款利率",
                            url: "/RateIndex/ForexDepositeRate"
                        },
                        {
                            text: "即期外匯匯率",
                            url: "/RateIndex/ForexRate"
                        }
                    ]
                },
                {
                    title: "OOOOOO",
                    buttons: 
                    [
                        {
                            text: "OOOOOO",
                            url: "/RateIndex/TWDRate"
                        },
                        {
                            text: "OOOOOO",
                            url: "/RateIndex/ForexDepositeRate"
                        },
                        {
                            text: "OOOOOO",
                            url: "/RateIndex/ForexRate"
                        }
                    ]
                },
                {
                    title: "OOOOOO",
                    buttons:
                    [
                        {
                            text: "OOOOOO",
                            url: "/RateIndex/TWDRate"
                        },
                        {
                            text: "OOOOOO",
                            url: "/RateIndex/ForexDepositeRate"
                        },
                        {
                            text: "OOOOOO",
                            url: "/RateIndex/ForexRate"
                        }
                    ]
                }
            ]
        }
    }
}

</script>