<script setup>
const route = useRoute();
const dayjs = useDayjs();
const { find } = useStrapi();
const media = useStrapiMedia();

const news = useList("news", {
  populate: "*",
  sort: ["publish_date:desc"],
});

await news.load();
</script>
<template>
  <Head>
    <Title>JUA Union of Asia</Title>
  </Head>
  <div class="flex flex-col">
    <div class="bg-red-500">
      <div
        class="mx-auto container h-24 flex items-center justify-center md:justify-normal md:pl-10"
      >
        <div class="text-3xl text-white font-bold">JUA News</div>
      </div>
    </div>
    <div class="mt-6 container mx-auto p-4 md:p-0 mb-12">
      <div class="flex flex-col md:flex-row gap-3">
        <div class="flex flex-col gap-3">
          <div class="gap-3" v-for="(data, index) in news.data" :key="index">
            <div
              class="flex flex-col md:flex-row gap-3 items-center"
              v-if="index % 2 == 1"
            >
              <img
                class="w-80 object-cover rounded-[4rem]"
                :src="media + data.attributes.banner.data.attributes.url"
              />
              <div class="flex flex-col">
                <div class="text-3xl font-bold">{{ data.attributes.title }}</div>
                <div class="text-lg line-clamp-2">
                  {{ data.attributes.description }}
                </div>
                <div class="text-sm text-gray-500">
                  {{
                    dayjs(news.data[0].attributes.publish_date).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div v-for="(data, index) in news.data" :key="index">
            <div
              class="flex flex-col gap-3 md:flex-row items-center"
              v-if="index % 2 == 1"
            >
              <img
                class="w-80 object-cover rounded-[4rem]"
                :src="media + data.attributes.banner.data.attributes.url"
              />
              <div class="flex flex-col">
                <div class="text-3xl font-bold">{{ data.attributes.title }}</div>
                <div class="text-lg line-clamp-2">
                  {{ data.attributes.description }}
                </div>
                <div class="text-sm text-gray-500">
                  {{
                    dayjs(news.data[0].attributes.publish_date).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
