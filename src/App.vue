<script>
// import { RouterLink, RouterView } from 'vue-router'

import Carrousel from "./components/Carrousel/Carrousel.vue"
import Finder from "./components/Finder/Finder.vue"

export default {
    name: "app",
    components: { Carrousel, Finder }
}
</script>

<template>
<h1 class="text-8xl font-serif">Periódico Digital</h1>

<Carrousel />

<Finder />
</template>