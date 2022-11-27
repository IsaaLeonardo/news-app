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
            console.log(articles)
        },
        next(){
            console.log("pa'lante")
            console.log(articles)
        }
    },
    data(){
        return articles
    },
}
</script>

<template>
<section id="highlights" class="flex justify-center w-full">
    <button id="button-previous" class="w-1/12" @click="previous">
        <img src="https://cdn-icons-png.flaticon.com/512/130/130882.png">
    </button>
    <ul class="w-9/12">
        <li>
            <div
            class="highlight-show text-sky-400 bg-cover bg-center bg-no-repeat flex flex-col items-end place-content-end"
            style="background-image:url(https://picsum.photos/id/237/1000/1200); block-size: 40vw;">
                <p class="title text-6xl font-serif">España ganó</p>
                <p class="author text-2xl italic">Luis Enrique</p>
                <p class="source">Google News</p>
            </div>
        </li>
        <li>
            <div
            class="hidden highlight-show text-sky-400 bg-cover bg-center bg-no-repeat flex flex-col items-end place-content-end"
            style="background-image:url(https://picsum.photos/id/236/1000/1200); block-size: 40vw;">
                <p class="title text-6xl font-serif">España perdió</p>
                <p class="author text-2xl italic">Luis Enrique</p>
                <p class="source">Google News</p>
            </div>
        </li>
        <li>
        <div
        class="hidden highlight-show text-sky-400 bg-cover bg-center bg-no-repeat flex flex-col items-end place-content-end"
        style="background-image:url(https://picsum.photos/id/235/1000/1200); block-size: 40vw;">
            <p class="title text-6xl font-serif">España empató</p>
            <p class="author text-2xl italic">Luis Enrique</p>
            <p class="source">Google News</p>
        </div>
    </li>
    </ul>
    <button id="button-next" class="w-1/12" @click="next">
        <img src="https://cdn-icons-png.flaticon.com/512/130/130884.png">
    </button>
</section>
</template>