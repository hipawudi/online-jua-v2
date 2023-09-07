<script setup>
const classes = [{ text: "News", to: "/jus-news" }];
const media = useStrapiMedia();
const dayjs = useDayjs();
const news = useList("news", {
  populate: "*",
});

await news.load();
</script>

<template>
  <div class="">
    <page-header :classes="classes" title="News"></page-header>
    <section
      class="bg-white py-2 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('/flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto xl:pl-16 px-4">
        <h3 class="mb-4 text-gray-900 font-bold tracking-tighter text-2xl">
          Latest JUA News
        </h3>
        <div class="flex flex-wrap justify-center"></div>
      </div>
    </section>

    <section class="bg-gray-50 py-4 2xl:pl-24 lg:pl-16 pl-0">
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="flex flex-wrap">
          <div
            class="w-full md:w-1/2 xl:w-1/4 p-3"
            v-for="(n, idx) in news.data"
            :key="idx"
          >
            <div
              class="bg-white border border-gray-100 shadow-dashboard rounded-md space-y-2"
            >
              <div class="flex flex-col justify-center items-center">
                <img
                  :src="media + n.attributes.banner.data.attributes.url"
                  alt=""
                  class="rounded shadow-md h-60 object-cover"
                />
              </div>
              <div class="flex flex-col p-2">
                <div class="text-sm">
                  {{ dayjs(n.attributes.publish_date).format("YYYY-MM-DD HH:mm:ss") }}
                </div>
                <div class="font-bold text-lg">{{ n.attributes.title }}</div>
                <div class="line-clamp-3">
                  {{ n.attributes.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
