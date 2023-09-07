<script setup>
const media = useStrapiMedia();
const dayjs = useDayjs();
const zones = [
  "All zones",
  "Central Zone",
  "South East Zone",
  "East Zone",
  "West Zone",
  "South Zone",
];
const type = ["All types", "Competitions", "Others"];
const category = [
  "All categories",
  "JUA",
  "IJF",
  "Seniors",
  "Juniors",
  "Cadets",
  "Others",
];
const filters = ref({});
const year_index = ref(0);
const select = ref({
  zone: 0,
  type: 0,
  category: 0,
  year: 0,
  range: 0,
});
const year = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];
const ranges = [
  "Whole year",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const classes = [
  {
    text: "Calendar",
    to: "/calendar",
  },
];
const range_index = ref(0);
const calendars = ref(
  useList("calendars", {
    populate: "*,location.member_image",
    pagination: {
      pageSize: 100,
    },
    filters: filters,
  })
);
await calendars.value.load();
function changeFilters(name, idx, value) {
  if (idx != 0) {
    filters.value[name] = value;
  } else {
    delete filters.value[name];
  }
  console.log(filters.value);
  calendars.value = useList("calendars", {
    populate: "*,location.member_image",
    pagination: {
      pageSize: 100,
    },
    filters: filters.value,
  });
  calendars.value.load();
}
</script>

<template>
  <div>
    <page-header :classes="classes" title="Calendar"></page-header>
    <section
      class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('/flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="flex flex-col md:flex-row mb-4 gap-3">
          <div class="flex flex-col gap-2 grow">
            <div class="font-bold">Zone</div>
            <div class="mb-4">
              <select
                v-model="select.zone"
                @change="changeFilters('zone', select.zone, zones[select.zone])"
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(z, idx) in zones" :key="idx" :value="idx">
                  {{ z }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col gap-2 grow">
            <div class="font-bold">Type</div>
            <div class="text-center mb-4 grow">
              <select
                v-model="select.type"
                @change="changeFilters('type', select.type, zones[select.type])"
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(t, idx) in type" :key="idx" :value="idx">
                  {{ t }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col gap-2 grow">
            <div class="font-bold">Category</div>
            <div class="text-center">
              <select
                v-model="select.category"
                @change="changeFilters('category', select.type, zones[select.category])"
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(cy, idx) in category" :key="idx" :value="idx">
                  {{ cy }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row 2xl:gap-16 xl:gap-12 lg:gap-3 md:gap-2 mb-4"
        >
          <div class="flex flex-col">
            <div class="font-bold">Year</div>
            <div class="mb-4">
              <select
                v-model="select.year"
                class="w-full px-2 md:w-56 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(y, idx) in year" :key="idx" :value="idx">
                  {{ y }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col grow">
            <div class="font-bold mb-1">Range</div>
            <div class="md:flex hidden">
              <button
                class="border py-1 text-center grow"
                :class="idx == select.range ? 'bg-red-500 text-white ' : ''"
                v-for="(r, idx) in ranges"
                :key="idx"
                @click="select.range = idx"
              >
                {{ r }}
              </button>
            </div>
            <div class="md:hidden flex">
              <select
                class="w-full px-2 md:w-56 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(r, idx) in ranges" :key="idx" :value="idx">
                  {{ r }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex flex-col border border-red-500 rounded-md shadow-md">
          <div
            class="flex flex-col md:flex-row text-lg gap-2 md:gap-9 p-4 rounded-t-md"
            v-for="(c, idx) in calendars.data"
            :class="idx % 2 == 0 ? 'bg-gray-200' : 'bg-white'"
            :key="idx"
          >
            <div class="md:text-center flex justify-center items-center">
              <div>{{ dayjs(c.attributes.publish_date).format("YYYY-MM-DD") }}</div>
            </div>
            <div class="">
              <div class="font-bold">
                {{ c.attributes.title }}
              </div>
              <div class="">
                {{ c.attributes.athletes_count }} athletes - {{ c.attributes.nations }}
                nations
              </div>
            </div>

            <div class="flex items-center space-x-2">
              <img
                :src="
                  media +
                  c.attributes.location.data.attributes.member_image.data.attributes.url
                "
                class="h-6 w-10"
              />
              <div class="font-bold">
                {{ c.attributes.location.data.attributes.name }}, {{ c.attributes.city }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
