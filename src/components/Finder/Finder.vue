<script>
import axios from 'axios'

const apikey = "03688902f4484c859e95e2fdae559147"

const searchData = () => {
    const URL = 'https://newsapi.org/v2/everything?' +
                'q=' + 'búsqueda a realizar' + '&' +
                'apiKey=' + apikey
    

    axios.get(URL)
        .then(response =>{
            const data = response.data

            console.log('All ok')
            console.log(URL)

        })
        .catch(error => {
            console.log('All its not ok')
            console.log(URL)
        })
}

export default {
    name: 'finder',
    data() {
        return {
            search: ""
        }
    },
    methods: {
        searchData
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
            @keyup.enter="searchData"
        />
        <button
            class="flex-none"
            id="start-search"
            @click="searchData"
        >
            <img class="h-3/4" src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" alt="Ícono de lupa">
        </button>
    </div>

    <!-- El height debe ser cambiado por un valor relativo cuando empiece a cargar noticias -->
    <div class="results w-full h-96 border border-black border-solid">

    </div>
</section>
</template>