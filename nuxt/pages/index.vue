<script setup>
const route = useRoute();
const dayjs = useDayjs();
const { find } = useStrapi();
const media = useStrapiMedia();
const eventTags = [
  { title: "IJF Ranking Tournaments" },
  { title: "World Judo Championships" },
  { title: "JUA Meetings" },
  { title: "Zonal Championships" },
  { title: "AYJC & AJJC" },
  { title: "Olympic" },
  { title: "Member Events" },
  { title: "Asioan Judo Championships" },
];
const tagId = ref(0);
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
    <Title>JUA Union of Asia</Title>
  </Head>
  <div class="container mx-auto p-4 md:pl-10 flex flex-col gap-12 max-w-screen">
    <section>
      <div class="text-red-500 font-bold text-2xl mb-4">Latest News</div>
      <div class="flex flex-col md:flex-row gap-12" v-if="news.data != []">
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
    <section v-motion-roll-top>
      <div class="flex flex-col gap-3">
        <div class="text-red-500 font-bold text-2xl mb-4">JUA Events</div>
        <div class="flex mb-2 flex-nowrap items-center overflow-x-auto eventTagBar">
          <div class="mb-2 mr-2 md:mr-6" v-for="(tag, idx) in eventTags" :key="idx">
            <button
              :class="tagId == idx ? 'bg-red-500 text-white' : 'text-gray-700'"
              class="whitespace-nowrap py-2.5 px-5 text-sm text-white rounded-full transition duration-100 font-bold uppercase"
            >
              {{ tag.title }}
            </button>
          </div>
        </div>
        <div v-for="(event, idx) in events.data" :key="idx">
          <div class="flex items-center pb-4 border-b">
            <div class="flex flex-col gap-3">
              <div
                class="flex items-center mb-2 text-coolGray-500 group-hover:text-coolGray-600"
              >
                <span class="text-sm" data-config-id="auto-txt-10-2">
                  {{ dayjs(event.attributes.publish_date).format("YYYY-MM-DD") }}</span
                >
                <span class="inline-block mx-4">
                  <svg
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-3-2"
                  >
                    <path
                      d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span class="text-sm" data-config-id="auto-txt-11-2">{{
                  event.attributes.type
                }}</span>
              </div>
              <div class="text-2xl font-bold">{{ event.attributes.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <section v-motion-roll-left>
        <div class="flex flex-col gap-3 mt-12" v-if="results.data != []">
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
      </section>
    </section>
    <!-- <section>
      <div class="relative" v-motion-roll-right>
        <div class="text-red-500 font-bold text-2xl mb-4">Video</div>
        <div class="relative">
          <iframe
            class="overflow-hidden w-full md:w-1/2 h-52 md:h-60"
            src="https://www.youtube.com/embed/26IzsMUXn3s?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=26IzsMUXn3s"
          >
          </iframe>
        </div>
      </div>
    </section> -->
    <section v-motion-fade-visible class="mb-4">
      <div class="text-red-500 font-bold text-2xl mb-4">JUA Gallery</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-1">
        <div v-for="(event_image, idx) in event_images.data" :key="idx">
          <div class="w-full">
            <img
              class="w-full object-cover rounded-none md:h-80"
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
<style></style>
