<script>
import axios from 'axios'
import Details from '../Details/Details.vue'

const apikey = "03688902f4484c859e95e2fdae559147"
const country = "VE"
const URL = 'https://newsapi.org/v2/top-headlines?' +
            'country=' + country + '&' +
            'apiKey=' + apikey

let articles = []

axios.get(URL)
    .then(response => {
        const data = response.data
        articles.push(data.articles)
    })
    .catch((error) => {
        console.log(error)
    })

export default {
    name: 'carrousel',
    components: { Details },
    methods: {
        previous(){
            if(this.visibleItem == 0){
                this.visibleItem = 10;
            } else {
                this.visibleItem--
            }
        },
        next(){
            if(this.visibleItem == 10){
                this.visibleItem = 0;
            } else {
                this.visibleItem++
            }
        }
    },
    data(){
        return {
            articles,
            visibleItem: 0
        };
    },
}
</script>

<template>
<section id="highlights" class="flex justify-center items-center w-full">

    <button id="button-previous" class="w-16" @click="previous">
        <img src="https://cdn-icons-png.flaticon.com/512/130/130882.png">
    </button>

    <router-link
        v-for="(article, index) in articles[0]"
        :key="index"
        :index="index"
        v-show="visibleItem == index"
        to="/details"
        class="w-9/12 max-w-3xl h-96"
    >
        <div
        class="highlight-show h-full text-right text-sky-400 bg-cover bg-center bg-no-repeat flex flex-col items-end place-content-end"
        :style="{ 'background-image': 'url(' + article.urlToImage + ')' }">
            <p class="title w-9/12 text-4xl pt-44 font-serif">{{ article.title }}</p>
            <p class="author text-2xl italic">{{ article.author }}</p>
            <p class="source">{{ article.source.name }}</p>
        </div>
    </router-link>

    <button id="button-next" class="w-16" @click="next">
        <img src="https://cdn-icons-png.flaticon.com/512/130/130884.png">
    </button>

</section>
</template>

<style>
.highligh-show {
    block-size: 40vh;
}
</style>