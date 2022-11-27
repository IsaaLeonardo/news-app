<script>
import axios from 'axios'

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
    methods: {
        previous(){
            console.log("pa'trás")
            
            // articles[0] retorna el arreglo con la información deseada
            articles[0].forEach(article => console.log(article))
        },
        next(){
            console.log("pa'lante")

            // articles retorna un arreglo de un elemento, lo cual no es deseado
            articles.forEach(article => console.log(article))
        }
    },
    data(){
        return {
            articles
        }
    },
}
</script>

<template>
<section id="highlights" class="flex justify-center items-center w-full">
    <button id="button-previous" class="w-1/12" @click="previous">
        <img src="https://cdn-icons-png.flaticon.com/512/130/130882.png">
    </button>
    <div v-for="(article, index) in articles[0]" :key="index" class="w-9/12">
        <div
        class="highlight-show text-sky-400 bg-cover bg-center bg-no-repeat flex flex-col items-end place-content-end"
        :style="{ 'background-image': 'url(' + article.urlToImage + ')' }">
            <p class="title text-6xl font-serif">{{ article.title }}</p>
            <p class="author text-2xl italic">{{ article.author }}</p>
            <p class="source">{{ article.source.name }}</p>
        </div>
    </div>
    <button id="button-next" class="w-1/12" @click="next">
        <img src="https://cdn-icons-png.flaticon.com/512/130/130884.png">
    </button>
</section>
</template>