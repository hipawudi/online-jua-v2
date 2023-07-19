<script setup>
const route = useRoute();
const dayjs = useDayjs();
const { find } = useStrapi();
const media = useStrapiMedia();

const news = useList("news", {
  populate: "*",
  sort: ["publish_date:desc"],
  pagination: {
    start: 0,
    limit: 4,
  },
});
const event_images = useList("event-images", {
  populate: "*",
});
const results = useList("results", {
  populate: "*",
});
const events = useList("events", {
  populate: "*",
});

await news.load();
await event_images.load();
await results.load();
await events.load();
</script>

<template>
  <Head>
    <Title>Index</Title>
  </Head>
  <div class="container mx-auto p-4 md:pl-10 flex flex-col gap-12">
    <section>
      <div class="text-red-500 font-bold text-2xl mb-4">Latest News</div>
      <div
        class="flex flex-col md:flex-row gap-12"
        v-motion-fade-visible
        v-if="news.data != []"
      >
        <div class="md:w-2/5">
          <div class="flex flex-col gap-3">
            <img
              class="h-80 object-cover rounded-[4rem] shadow-lg"
              :src="media + news.data[0].attributes.banner.data.attributes.url"
            />
            <div class="text-4xl font-bold">{{ news.data[0].attributes.title }}</div>
            <div class="text-lg line-clamp-4">
              {{ news.data[0].attributes.description }}
            </div>
            <div class="text-sm text-gray-500">
              {{
                dayjs(news.data[0].attributes.publish_date).format("YYYY-MM-DD HH:mm:ss")
              }}
            </div>
          </div>
        </div>
        <div class="md:w-3/5">
          <div class="flex flex-col gap-6">
            <div v-for="(data, idx) in news.data" :key="idx">
              <div class="flex flex-col md:flex-row items-center" v-if="idx != 0">
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
    </section>
    <section>
      <div class="flex flex-col md:flex-row">
        <div
          class="flex flex-col md:w-1/3 gap-3"
          v-motion-roll-visible-left
          v-if="results.data != []"
        >
          <div class="text-red-500 font-bold text-2xl mb-4">JUA Results</div>
          <div v-for="(result, idx) in results.data" :key="idx">
            <div class="flex items-center">
              <img
                class="h-16 object-cover"
                :src="media + result.attributes.banner.data.attributes.url"
              />
              <div class="flex flex-col">
                <div class="text-lg font-bold">{{ result.attributes.title }}</div>
                <div class="text-sm text-gray-500">
                  {{ dayjs(result.attributes.publish_date).format("YYYY-MM-DD") }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:w-1/3 gap-3" v-motion-roll-visible-top>
          <div class="text-red-500 font-bold text-2xl mb-4">JUA Events</div>
          <div v-for="(event, idx) in events.data" :key="idx">
            <div class="flex items-center">
              <img
                class="h-16 object-cover"
                :src="media + event.attributes.banner.data.attributes.url"
              />
              <div class="flex flex-col">
                <div class="text-lg font-bold">{{ event.attributes.title }}</div>
                <div class="text-sm font-bold">{{ event.attributes.type }}</div>
                <div class="text-sm text-gray-500">
                  {{ dayjs(event.attributes.publish_date).format("YYYY-MM-DD") }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:w-1/3 gap-3" v-motion-roll-visible-right>
          <div class="text-red-500 font-bold text-2xl mb-4">Video</div>
          <div>
            <iframe
              class="sm:w-96 w-80 h-80"
              src="https://www.youtube.com/embed/26IzsMUXn3s?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=26IzsMUXn3s"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
    <section v-motion-fade-visible class="mb-4">
      <div class="text-red-500 font-bold text-2xl mb-4">JUA Gallery</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-1">
        <div v-for="(event_image, idx) in event_images.data" :key="idx">
          <div class="w-full">
            <img
              class="w-full h-80 object-cover rounded-none"
              :class="
                (idx == 0 ? 'md:rounded-tl-[4rem] ' : '') +
                (idx == 2 ? 'md:rounded-tr-[4rem] ' : '') +
                (idx == 6 ? 'md:rounded-bl-[4rem] ' : '') +
                (idx == 8 ? 'md:rounded-br-[4rem] ' : '')
              "
              :src="media + event_image.attributes.content.data.attributes.url"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  <section v-motion-fade-visible>
    <div class="bg-red-500">
      <div class="flex flex-col sm:flex-row mx-auto container min-h-64 items-center p-4">
        <div
          class="text-white font-bold text-6xl md:text-7xl mb-4 text-center md:text-left"
        >
          Meet Our Partners
        </div>
        <div class="sm:w-4/5 flex flex-wrap text-white">
          <div class="flex flex-col items-center w-1/3 mb-4">
            <img class="w-24 h-24" src="/partners/s2.jpg" />
            <div class="text-center">International Judo Federation</div>
          </div>
          <div class="flex flex-col items-center w-1/3">
            <img class="w-24 h-24" src="/partners/s1.jpg" />
            <div class="text-center">International Olympic Committee</div>
          </div>
          <div class="flex flex-col items-center w-1/3">
            <img class="w-24 h-24" src="/partners/s2.jpg" />
            <div class="text-center">IJF World Ranking</div>
          </div>
          <div class="flex flex-col items-center w-1/3">
            <img class="w-24 h-24" src="/partners/s3.jpg" />
            <div class="text-center">IJF Back Number</div>
          </div>
          <div class="flex flex-col items-center w-1/3">
            <img class="w-24 h-24" src="/partners/s7.jpg" />
            <div class="text-center">JUA Calendar</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
