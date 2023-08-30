<script setup>
const route = useRoute();
const dayjs = useDayjs();
const { find } = useStrapi();
const media = useStrapiMedia();
const classes = [{ text: "JUA Members", to: "/jua-members" }];
const zones = [
  "All Zone",
  "Central Zone",
  "South East Zone",
  "East Zone",
  "West Zone",
  "South Zone",
];
const zone_index = ref(0);
const jua_members = useList("jua-members", {
  populate: "*",
  pagination: {
    pageSize: 100,
  },
  sort: ["name:asc"],
});

await jua_members.load();
console.log(jua_members);
</script>
<template>
  <div>
    <page-header
      :classes="classes"
      :title="'JUA Members' + '(' + jua_members.meta.pagination.total + ')'"
    ></page-header>
    <section
      class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('/flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="block md:hidden text-center mb-8">
          <select
            v-model="zone_index"
            class="px-2 w-64 h-10 border rounded-md shadow-md after:bg-red-500"
          >
            <option v-for="(z, idx) in zones" :key="idx" :value="idx">{{ z }}</option>
          </select>
        </div>
        <div class="flex gap-3">
          <div class="flex flex-wrap md:w-3/4">
            <div
              class="w-full md:w-1/2 xl:w-1/3 mb-10 px-4"
              v-for="(m, idx) in jua_members.data.filter(function (x) {
                if (zone_index != 0) {
                  return x.attributes.zone == zones[zone_index];
                } else {
                  return x;
                }
              })"
              :key="idx"
            >
              <NuxtLink :to="'/jua-members/' + m.id">
                <div class="mx-auto md:ml-0 flex gap-3">
                  <div class="flex justify-between items-center shrink-0">
                    <img
                      :src="media + m.attributes.member_image.data.attributes.url"
                      class="w-32 h-20 mb-6 shadow-lg"
                    />
                  </div>
                  <div class="flex flex-col">
                    <div>
                      <h3 class="mb-1 text-sm text-coolGray-800 font-semibold">
                        {{ m.attributes.name }}
                      </h3>
                    </div>
                    <div class="inline-block mb-4 text-sm font-medium text-red-500">
                      {{ m.attributes.title }}
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div
            class="hidden md:flex flex-col shrink-0 bg-gray-200 shadow-lg p-2 h-[340px] text-sm rounded-md"
          >
            <div class="font-bold text-xl px-2 py-2 mx-1">JUA Members</div>
            <button
              class="p-2 mx-4 border-b border-red-500 text-left text-lg"
              :class="idx == zone_index ? 'text-red-500 border-red-500' : 'border-white'"
              v-for="(z, idx) in zones"
              :key="idx"
              @click="zone_index = idx"
            >
              {{ z }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
