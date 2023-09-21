<script setup>
const media = useStrapiMedia();
const { findOne } = useStrapi();
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
import md from "markdown-it";
const renderer = md();

const classes = [{ text: "Manual", to: "" }];
if (route.params.id != runtimeConfig.public.manual_key) {
  navigateTo("/");
}
const manuals = useList("manuals", {
  populate: "*",
  sort: ["sequence:asc"],
});
await manuals.load();
</script>
<template>
  <div>
    <page-header title="Manual" :classes="classes"></page-header>
    <section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0">
      <div class="container mx-auto xl:pl-16 px-4">
        <div v-if="manuals.data">
          <div v-for="(m, idx) in manuals.data" :key="idx">
            <div class="font-bold text-xl">
              {{ idx + 1 + "." }}{{ m.attributes.title }}
            </div>
            <div
              class="whitespace-pre-wrap"
              v-html="renderer.render(m.attributes.content)"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
