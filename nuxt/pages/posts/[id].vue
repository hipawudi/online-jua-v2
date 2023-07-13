<script setup>
import { marked } from "marked";
const dayjs = useDayjs()
const media = useStrapiMedia()
const { findOne } = useStrapi()

const route = useRoute()

const { data } = await findOne("posts", route.params.id, {
  populate: '*',
})
</script>

<template>
    <article class="container mx-auto p-4">

        <div class="h-72 rounded-lg overflow-clip mb-12">
          <img class="w-full h-full object-cover" :src="media + data.attributes.cover.data.attributes.url" />
        </div>

        <header>
          <h1 class="text-4xl mb-6 lg:text-5xl font-bold">
            <nuxt-link :to="`/posts/${data.id}`">{{ data.attributes.title }}</nuxt-link>
          </h1>
          <span class="text-md text-gray-500">
            {{  dayjs(data.attributes.date).format('YYYY-MM-DD') }}
          </span>
        </header>

        <div class="prose py-20" v-html="marked.parse(data.attributes.content)"></div>
      </article>
    
</template>