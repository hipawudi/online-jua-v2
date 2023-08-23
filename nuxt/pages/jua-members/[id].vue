<script setup>
const media = useStrapiMedia();
const { findOne } = useStrapi();

const route = useRoute();

const { data } = await findOne("jua-members", route.params.id, {
  populate: "*",
});
const classes = [
  { text: "JUA Members", to: "/jua-members" },
  { text: data.attributes.title, to: "" },
];
</script>

<template>
  <div>
    <page-header :title="data.attributes.title" :classes="classes"></page-header>
    <section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0">
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="mb-4">
          <img
            :src="media + data.attributes.member_image.data.attributes.url"
            class="w-40 shadow-lg"
          />
        </div>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex flex-col text-gray-500 text-lg">
            <div class="flex gap-6">
              <div class="w-16">Title</div>
              <div class="text-black font-bold">{{ data.attributes.title }}</div>
            </div>
            <div class="flex gap-6">
              <div class="w-16">Address</div>
              <div class="text-black font-bold">{{ data.attributes.address }}</div>
            </div>
            <div class="flex gap-6">
              <div class="w-16">Phone</div>
              <div class="text-black font-bold">{{ data.attributes.phone }}</div>
            </div>
            <div class="flex gap-6">
              <div class="w-16">Web</div>
              <div class="text-black font-bold">{{ data.attributes.web }}</div>
            </div>
            <div class="flex gap-6">
              <div class="w-16">Email</div>
              <div class="text-black font-bold">{{ data.attributes.email }}</div>
            </div>
          </div>
          <div class="grow md:text-right text-left">
            <div
              class="flex md:justify-end justify-start gap-6 md:flex-row flex-row-reverse"
            >
              <div class="flex flex-col">
                <div class="text-lg text-gray-500">President</div>
                <div class="text-lg font-bold">{{ data.attributes.president }}</div>
              </div>
              <div class="w-28 h-32">
                <img
                  v-if="data.attributes.president_image.data != null"
                  :src="media + data.attributes.president_image.data.attributes.url"
                  class="w-28 h-32 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
