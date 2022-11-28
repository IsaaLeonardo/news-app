<script>
import axios from 'axios'

export default {
    name: 'finder',
    data() {
        return {
            search: "",
            data: []
        }
    },
    methods: {
        async getData() {
            const apikey = "03688902f4484c859e95e2fdae559147"
            const input = this.search.replaceAll(" ", "+")
            const URL = 'https://newsapi.org/v2/everything?' +
                        'q=' + input + '&' +
                        'language=' + 'es' + '&' +
                        `searchIn=` + 'title' + '&' +
                        'sortBy=' + 'popularity' + '&' +
                        'apiKey=' + apikey

            axios.get(URL)
                .then(response =>{
                    this.data = response.data
                    console.log('Se realizó la petición a:')
                    console.log(URL)
                    console.log(this.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
}
</script>

<template>
<section id="everything" class="w-full max-w-2xl mt-3 flex flex-col items-center gap-3">
    <div class="input-finder w-80 h-10 p-2 border border-black border-solid flex gap-2">
        <input 
            type="text"
            name=""
            id=""
            placeholder="Buscar"
            class="flex-auto"
            v-model.trim="search"
            @keyup.enter="getData"
        />
        <button
            class="flex-none"
            id="start-search"
            @click="getData"
        >
            <img class="h-3/4" src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" alt="Ícono de lupa">
        </button>
    </div>

    <div v-show="data.length != 0" class="results w-full border border-black border-solid">
      <p id="total-results" class="p-3">{{data.totalResults}} resultados para "{{search}}"</p>
        <div
            v-for="(article, index) in data.articles"
            :key="index"
            class="result h-36 p-3 border border-red-500 border-solid flex gap-3"
        >
            <img
            :src="article.urlToImage"
            alt=""
            class="w-1/6"
            >
            <div class="result-info">
                <h2 class="title text-xl mb-1">{{article.title}}</h2>
                <div class="owner flex">
                    <p class="source">{{article.source.name}}</p>
                    <span>&nbsp;-&nbsp;</span>
                    <p class="author italic">{{article.author}}</p>
                </div>
                <p class="date">{{article.publishedAt}}</p>
            </div>
        </div>
    </div>
</section>
</template>