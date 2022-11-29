<script>
import axios from 'axios'
import { Form, Field, ErrorMessage } from 'vee-validate';
import Details from '../Details/Details.vue'
import { defineRule } from 'vee-validate';
import moment from 'moment';

defineRule('required', value => {
  if (!value || !value.length) {
    return '❌ Necesita ingresar algún término de búsqueda';
  }
  return true;
});

defineRule('minLength', (value, limit) => {
  if (value.length < limit) {
    return `⚠️ El término de búsqueda debe ser de al menos ${limit} caracteres`;
  }
  return true;
});

export default {
    name: 'finder',
    components: {
        Form,
        Field,
        ErrorMessage,
        Details
    },
    data() {
        return {
            search: "",
            data: [],
            dates: [],
            resultsExist: true
        }
    },
    methods: {
        getData(values) {
            console.log(JSON.stringify(values, null, 2))

            // Reiniciar valores en segundas búsquedas
            this.data = []
            this.resultsExist = true

            this.search = values.search

            const apikey = "03688902f4484c859e95e2fdae559147"
            const input = values.search.replaceAll(" ", "+")
            const URL = 'https://newsapi.org/v2/everything?' +
                        'q=' + input + '&' +
                        'language=' + 'es' + '&' +
                        `searchIn=` + 'title' + '&' +
                        'sortBy=' + 'popularity' + '&' +
                        'apiKey=' + apikey
            
            axios.get(URL)
                .then(response =>{
                    // Verificando si la búsqueda entrega algún resultado
                    if(response.data.articles.length == 0){
                        this.resultsExist = false
                    } else {
                        this.data = response.data
                        response.data.articles.forEach(article => {
                            const formatDate = moment(article.publishedAt)
                            this.dates.push(formatDate.format('D MMMM YYYY'))
                        })
    
                        console.log('Se realizó la petición a:')
                        console.log(URL)
                        console.log(this.data)
                    }

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
    <Form @submit="getData" class="input-finder w-80 h-full p-2 border border-black border-solid flex gap-2 flex-wrap">
        <button
            class="flex-none pointer-events-auto"
            id="start-search"
            type="submit"
        >
            <img class="h-3/4" src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" alt="Ícono de lupa">
        </button>
        <Field 
            type="text"
            name="search"
            id=""
            placeholder="Buscar"
            rules="required|minLength:3"
            class="flex-auto"
        />
        <ErrorMessage name="search" />
    </Form>

    <div
        v-show="!resultsExist"
    >
        <p>Lo siento. El término "{{search}}" no arrojó algún resultado</p>
    </div>
    
    <div v-show="data.length != 0" class="results w-full border border-black border-solid">
      <p id="total-results" class="p-3">{{data.totalResults}} resultados para "{{search}}"</p>
        <router-link
            v-for="(article, index) in data.articles"
            :key="index"
            to="/details"
            class="result h-36 p-1 m-1 border-solid flex gap-3"
        >
            <img
            :src="article.urlToImage"
            alt=""
            class="w-1/6 flex-none"
            >
            <div class="result-info flex-auto">
                <h2 class="title text-xl mb-1">{{article.title}}</h2>
                <div class="owner flex">
                    <p class="source">{{article.source.name}}</p>
                    <span>&nbsp;-&nbsp;</span>
                    <p class="author italic">{{article.author}}</p>
                </div>
                <p class="date">{{dates[index]}}</p>
            </div>
        </router-link>
    </div>
</section>
</template>

<style>
#start-search {
    max-inline-size: 15px;
    max-block-size: 20px;
}
</style>