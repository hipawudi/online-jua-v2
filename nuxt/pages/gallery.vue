<script setup>
const classes = [
  {
    text: "Gallery",
    to: "/gallery",
  },
];
const route = useRoute();
const media = useStrapiMedia();
const images = ref(
  useList("event-images", {
    populate: "*",
    pagination: {
      pageSize: 7,
      page: route.query.page,
    },
  })
);
await images.value.load();
function change(page) {
  images.value = useList("event-images", {
    populate: "*",
    pagination: {
      pageSize: 7,
      page: page,
    },
  });
  images.value.load();
}
</script>

<template>
  <div>
    <page-header :classes="classes" title="GALLERY"></page-header>
    <section class="bg-white lg:pl-16 2xl:pl-24 pl-0">
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="">
          <p class="mb-12 text-lg md:text-xl text-gray-500 font-medium">
            JUA all event photo gallery.
          </p>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 p-3" v-if="images.data[0]">
            <img
              class="w-full h-72 rounded-lg object-cover"
              :src="media + images.data[0].attributes.content.data.attributes.url"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/2 p-3" v-if="images.data[1]">
            <img
              class="w-full h-72 rounded-lg object-cover"
              :src="media + images.data[1].attributes.content.data.attributes.url"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/3 p-3" v-if="images.data[2]">
            <img
              class="w-full h-72 rounded-lg object-cover"
              :src="media + images.data[2].attributes.content.data.attributes.url"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/3 p-3" v-if="images.data[3]">
            <img
              class="w-full h-72 rounded-lg object-cover"
              :src="media + images.data[3].attributes.content.data.attributes.url"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/3 p-3" v-if="images.data[4]">
            <img
              class="w-full h-72 rounded-lg object-cover object-top"
              :src="media + images.data[4].attributes.content.data.attributes.url"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/2 p-3" v-if="images.data[5]">
            <img
              class="w-full h-72 rounded-lg object-cover"
              :src="media + images.data[5].attributes.content.data.attributes.url"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/2 p-3" v-if="images.data[6]">
            <img
              class="w-full h-72 rounded-lg object-cover"
              :src="media + images.data[6].attributes.content.data.attributes.url"
              alt=""
            />
          </div>
        </div>
        <pagination
          class="mt-12"
          :pagination="images.meta.pagination"
          @change-page="change"
        />
      </div>
    </section>
  </div>
</template>
