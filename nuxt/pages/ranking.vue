<script setup>
const types = ["Athlete", "Referee"];
const type_index = ref(0);
const classes = [
  {
    text: "Ranking",
    to: "/ranking",
  },
];
const weights = ["-71kg", "-63kg", "-60kg"];
const gender = ["M", "F"];
const category = ["Internationalc", "Intercontinental"];
const nations = ["Afganistan", "Bahrain", "Bangladesh"];
const jua_members = useList("jua-members", {
  populate: "*",
  pagination: {
    pageSize: 100,
  },
  sort: ["name:asc"],
});

await jua_members.load();
</script>
<template>
  <div class="">
    <page-header :classes="classes" title="RANKING"></page-header>
    <section
      class="bg-white 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('/flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto px-4 xl:pl-16">
        <p class="mb-12 text-lg md:text-xl font-medium">JUA RANKING LIST</p>
        <div class="flex flex-wrap justify-center -mx-4"></div>
      </div>
    </section>

    <section class="bg-gray-50 py-4 2xl:pl-24 lg:pl-16 pl-0s">
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="mb-4 flex gap-3 items-center">
          <button
            v-for="(t, idx) in types"
            :key="idx"
            class="px-2 rounded-lg py-1"
            :class="type_index == idx ? 'bg-red-500 text-white' : 'bg-gray-50 text-black'"
            @click="type_index = idx"
          >
            {{ t }}
          </button>
        </div>
        <div class="flex gap-6" v-if="type_index == 0">
          <div class="flex flex-col gap-2 grow">
            <div class="font-bold">Weight</div>
            <div class="text-center mb-4 grow">
              <select
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(w, idx) in weights" :key="idx" :value="w">
                  {{ w }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col gap-2 grow" v-if="type_index == 0">
            <div class="font-bold">Gender</div>
            <div class="text-center mb-4 grow">
              <select
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(g, idx) in gender" :key="idx" :value="g">
                  {{ g }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col gap-2 grow" v-if="type_index == 0">
            <div class="font-bold">Nation</div>
            <div class="text-center mb-4 grow">
              <select
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(m, idx) in jua_members.data" :key="idx" :value="m.id">
                  {{ m.attributes.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex gap-6" v-if="type_index == 1">
          <div class="flex flex-col gap-2 grow">
            <div class="font-bold">Category</div>
            <div class="text-center mb-4 grow">
              <select
                class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"
              >
                <option v-for="(c, idx) in category" :key="idx" :value="c">
                  {{ c }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="pt-6 bg-white overflow-hidden border border-gray-100 rounded-md shadow-dashboard"
        >
          <div class="px-6 overflow-x-auto">
            <table class="w-full" v-if="type_index == 1">
              <tbody>
                <tr class="whitespace-nowrap h-11 bg-gray-50 bg-opacity-80">
                  <th
                    class="px-4 font-semibold text-xs text-gray-500 uppercase text-left rounded-l-md"
                  >
                    <p>RANK</p>
                  </th>
                  <th
                    class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center"
                  >
                    Referee
                  </th>
                  <th
                    class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center rounded-r-md"
                  >
                    Nation
                  </th>
                  <th
                    class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center rounded-r-md"
                  >
                    points
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">01</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Kyle
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Tajikistan
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    44
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">02</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Nils
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Japan
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    26
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">03</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Peter
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Myanmar
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    13
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">04</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    John
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Macau, China
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    4
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">05</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Saeid
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    People's Republic Of China
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    3
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">06</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Bogdan
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Hong Kong, China
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    2
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">07</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Terry
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    India
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    2
                  </th>
                </tr>
              </tbody>
            </table>
            <table class="w-full" v-if="type_index == 0">
              <tbody>
                <tr class="whitespace-nowrap h-11 bg-gray-50 bg-opacity-80">
                  <th
                    class="px-4 font-semibold text-xs text-gray-500 uppercase text-left rounded-l-md"
                  >
                    <p>RANK</p>
                  </th>
                  <th
                    class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center"
                  >
                    Referee
                  </th>
                  <th
                    class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center rounded-r-md"
                  >
                    Nation
                  </th>
                  <th
                    class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center rounded-r-md"
                  >
                    points
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">01</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Saki
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Japan
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    44
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">02</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Inbar
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Afganistan
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    26
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">03</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Ken
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Kuwait
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    13
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">04</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    John
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Laos
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    4
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">05</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Balabay
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Pakistan
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    3
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">06</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Wei
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Myanmar
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    2
                  </th>
                </tr>
                <tr class="h-20 border-b border-gray-100">
                  <th class="whitespace-nowrap px-4 bg-white text-left">07</th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Shady
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    Nepal
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    2
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
