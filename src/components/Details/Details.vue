<script>
export default {
    name: 'details',
    props: [
        'title',
        'date',
        'image',
        'author',
        'description',
        'content',
        'url'
    ]
}
</script>

<template>
    <h2>{{ title }}</h2>
    <p>{{ date }}</p>
    <img :src="image" alt="">
    <p>{{ author }}</p>
    <p>{{ description }}</p>
    <p>{{ content }}</p>
    <a :href="url">Ver la noticia completa</a>
</template>