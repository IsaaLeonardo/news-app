<script>
import Carrousel from "./Carrousel/Carrousel.vue"
import Finder from "./Finder/Finder.vue"

export default {
    name: 'home',
    components: { Carrousel, Finder }
}
</script>

<template>
<Carrousel />
<Finder />
</template>