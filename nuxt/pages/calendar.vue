<script>
export default {
  data() {
    return {
      continent: [
        "All continents",
        "Central Zone",
        "South East Zone",
        "East Zone",
        "West Zone",
        "South Zone",
      ],
      type: ["All types", "Competitions", "Others"],
      category: ["All categories", "JUA", "Seniors", "Juniors", "Cadets", "Others"],
      year: ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"],
      ranges: [
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
      ],
      classes: [
        {
          text: "Calendar",
          to: "/calendar",
        },
      ],
      range_index: 0,
    };
  },
};
</script>

<template>
  <div>
    <page-header :classes="classes" title="Calendar"></page-header>
    <section
      class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="flex flex-col md:flex-row mb-4 gap-3">
          <div class="flex flex-col gap-2 grow">
            <div class="font-bold">Continent</div>
            <div class="mb-4">
              <select
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(c, idx) in continent" :key="idx" :value="c">
                  {{ c }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col gap-2 grow">
            <div class="font-bold">Type</div>
            <div class="text-center mb-4 grow">
              <select
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(t, idx) in type" :key="idx" :value="t">
                  {{ t }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col gap-2 grow">
            <div class="font-bold">Category</div>
            <div class="text-center">
              <select
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(cy, idx) in category" :key="idx" :value="cy">
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
                class="w-full px-2 md:w-56 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(y, idx) in year" :key="idx" :value="y">
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
                :class="idx == range_index ? 'bg-red-500 text-white ' : ''"
                v-for="(r, idx) in ranges"
                :key="idx"
                @click="range_index = idx"
              >
                {{ r }}
              </button>
            </div>
            <div class="md:hidden flex">
              <select
                class="w-full px-2 md:w-56 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(r, idx) in ranges" :key="idx" :value="r">
                  {{ r }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex flex-col border border-red-500 rounded-md shadow-md">
          <div
            class="flex flex-col md:flex-row text-lg gap-2 md:gap-9 bg-gray-200 p-4 rounded-t-md"
          >
            <div class="md:text-center">
              <div>Augest</div>
              <div>22</div>
            </div>
            <div class="">
              <div class="font-bold">
                Tashkent Asian Cadet Cup and Tashkent Asian Junior Cup
              </div>
              <div class="">50 ahtletes -7 nations</div>
            </div>
          </div>
          <div
            class="flex flex-col md:flex-row text-lg gap-2 md:gap-9 bg-white p-4 rounded-b-md"
          >
            <div class="md:text-center">
              <div>Augest</div>
              <div>22</div>
            </div>
            <div class="">
              <div class="font-bold">
                Tashkent Asian Cadet Cup and Tashkent Asian Junior Cup
              </div>
              <div class="">50 ahtletes -7 nations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
