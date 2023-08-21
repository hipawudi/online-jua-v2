<script>
import membersData from "public/members.json";
import PageHeader from "../../components/PageHeader.vue";

export default {
  components: { PageHeader },
  setup(props) {},
  data() {
    return {
      data: membersData,
      zones: [
        "All Zone",
        "Central Zone",
        "South East Zone",
        "East Zone",
        "West Zone",
        "South Zone",
      ],
      classes: [{ text: "JUA Members", to: "/jua-members" }],
      zone_index: 0,
    };
  },
  computed: {
    members() {
      if (this.zone_index == 0) {
        return this.data;
      } else {
        return this.data.filter((x) => x.zone == this.zones[this.zone_index]);
      }
    },
  },
};
</script>

<template>
  <div>
    <page-header :classes="classes" title="JUA Members"></page-header>
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
              v-for="(m, idx) in members"
              :key="idx"
            >
              <NuxtLink :to="'/jua-members/' + (idx + 1)">
                <div class="mx-auto md:ml-0 flex gap-3">
                  <div class="flex justify-between items-center shrink-0">
                    <img :src="m.name_image" class="w-32 h-20 mb-6 shadow-lg" />
                  </div>
                  <div class="flex flex-col">
                    <div>
                      <h3 class="mb-1 text-sm text-coolGray-800 font-semibold">
                        {{ m.name }}
                      </h3>
                    </div>
                    <div class="inline-block mb-4 text-sm font-medium text-red-500">
                      {{ m.title }}
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
