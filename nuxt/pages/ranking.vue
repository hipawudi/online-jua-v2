<script>
export default {
  data() {
    return {
      types: ["Athlete", "Referee"],
      type_index: 0,
      classes: [
        {
          text: "Ranking",
          to: "/ranking",
        },
      ],
    };
  },
};
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
        <div class="mb-4 flex gap-3">
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
                    Athlete
                  </th>
                  <th
                    class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center"
                  >
                    gold
                  </th>
                  <th
                    class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center"
                  >
                    silver
                  </th>
                  <th
                    class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center"
                  >
                    bronze
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
                    Tato
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    6
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    7
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    12
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
                    Luka
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    3
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    5
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    7
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
                    Hidayat
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    3
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    1
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    2
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
                    Matthias
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    1
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    0
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    1
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
                    Denis
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    1
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    0
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    0
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
                    Matthias
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    0
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"
                  >
                    1
                  </th>
                  <th
                    class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"
                  >
                    0
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
