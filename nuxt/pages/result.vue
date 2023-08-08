<template>
  <div class="">
    <section
      class="bg-white"
      style="
        background-image: url('flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto pl-2 xl:pl-16 2xl:pl-20">
        <span
          class="inline-block py-2 px-2 mb-4 rounded-lg text-xl leading-5 text-red-500 bg-red-100 font-medium uppercase rounded-9xl"
          >Pricing</span
        >
        <h3 class="mb-4 text-3xl md:text-5xl text-gray-900 font-bold tracking-tighter">
          TEAM RANKING 2023
        </h3>
        <p class="mb-12 text-lg md:text-xl text-gray-500 font-medium">
          Headlining the calendar is the Dubai World Cup.
        </p>
        <div class="flex flex-wrap justify-center -mx-4"></div>
      </div>
    </section>

    <section class="bg-gray-50 py-4">
      <div class="container mx-auto xl:pl-16 2xl:pl-20">
        <div
          class="pt-6 bg-white overflow-hidden border border-gray-100 rounded-md shadow-dashboard"
        >
          <div class="px-6 overflow-x-auto">
            <table class="w-full">
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
                    TEAMS
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
                    Republic of Korea
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
                    Chinese Taipei
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
                    Japan
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
                    Australia
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
                    India
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
                    Kazakhstan
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
