<script setup>
const media = useStrapiMedia();
const dayjs = useDayjs();
const route = useRoute();
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

const year_index = ref(0);
const select = ref({
  zone: 0,
  type: 0,
  category: 0,
  year: 0,
  month: 0,
});
const currentYear = new Date().getFullYear();

const startYear = currentYear;
const endYear = 2016;

const year = Array.from(
  { length: startYear - endYear + 1 },
  (_, index) => startYear - index
);
const filters = ref({
  date: {
    $gte: year[select.value.year] + "-01-01",
    $lte: year[select.value.year] + "-12-31",
  },
});
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
      pageSize: 10,
      page: route.query.page,
    },
    filters: filters.value,
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
      pageSize: 10,
      page: route.query.page,
    },
    filters: filters.value,
  });
  calendars.value.load();
}
function changeDateRange(value, idx, type) {
  if (type == "year") {
    filters.value.date.$gte = value + filters.value.date.$gte.substring(4);
    filters.value.date.$lte = value + filters.value.date.$lte.substring(4);
  } else if (type == "month") {
    select.value.range = idx;
    if (idx == 0) {
      const firstDay = dayjs(new Date(year[select.value.year], 1, 1)).format(
        "YYYY-MM-DD"
      );
      const nextMonthFirstDay = new Date(year[select.value.year], 12, 1);
      const lastDay = dayjs(new Date(nextMonthFirstDay.getTime() - 1)).format(
        "YYYY-MM-DD"
      );
      filters.value.date.$gte = firstDay;
      filters.value.date.$lte = lastDay;
    } else {
      const firstDay = dayjs(new Date(year[select.value.year], idx, 1)).format(
        "YYYY-MM-DD"
      );
      const nextMonthFirstDay = new Date(year[select.value.year], idx + 1, 1);
      const lastDay = dayjs(new Date(nextMonthFirstDay.getTime() - 1)).format(
        "YYYY-MM-DD"
      );
      filters.value.date.$gte = firstDay;
      filters.value.date.$lte = lastDay;
    }
  }
  calendars.value = useList("calendars", {
    populate: "*,location.member_image",
    pagination: {
      pageSize: 10,
      page: route.query.page,
    },
    filters: filters.value,
  });
  calendars.value.load();
}
function change(page) {
  calendars.value = useList("calendars", {
    populate: "*,location.member_image",
    pagination: {
      pageSize: 10,
      page: page,
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
                @click="changeDateRange(year[select.year], select.year, 'year')"
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
                @click="changeDateRange(r, idx, 'month')"
              >
                {{ r }}
              </button>
            </div>
            <div class="md:hidden flex">
              <select
                v-model="select.month"
                @change="changeDateRange(select.month, select.month, 'month')"
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
              <div>{{ dayjs(c.attributes.date).format("YYYY-MM-DD") }}</div>
            </div>
            <div class="md:w-[45%]">
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
        <pagination
          class="mt-12"
          :pagination="calendars.meta.pagination"
          @change-page="change"
        />
      </div>
    </section>
  </div>
</template>
