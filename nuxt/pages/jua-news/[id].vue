<script setup>
const media = useStrapiMedia();
const { findOne } = useStrapi();
const route = useRoute();
import md from "markdown-it";
const renderer = md();
const { data } = await findOne("news", route.params.id, {
  populate: "*",
});
const classes = [
  { text: "News", to: "/jus-news" },
  { text: data.attributes.title, to: "" },
];
</script>
<template>
  <div>
    <page-header :title="data.attributes.title" :classes="classes"></page-header>
    <section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0">
      <div class="container mx-auto xl:pl-16 px-4">
        <div
          v-html="renderer.render(data.attributes.content)"
        />
      </div>
    </section>
  </div>
</template>
