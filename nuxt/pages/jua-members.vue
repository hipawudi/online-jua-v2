<script>
import membersData from "public/members.json";
import PageHeader from "../components/PageHeader.vue";

export default {
  components: { PageHeader },
  setup(props) {},
  data() {
    return {
      members: membersData,
      zones: ["Central Zone", "South East Zone", "East Zone", "West Zone", "South Zone"],
      classes: [
        { text: "Organization", to: "/organization" },
        { text: "JUA Members", to: "/jua-members" },
      ],
    };
  },
};
</script>

<template>
  <div>
    <page-header :classes="classes" title="ORGANIZATION"></page-header>
    <section
      class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="mb-12" v-for="(z, idx) in zones" :key="idx">
          <h3
            class="mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"
          >
            {{ z }}
          </h3>
          <div class="flex flex-wrap">
            <div
              class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 mb-10"
              v-for="(m, idx) in members.filter((x) => x.zone == z)"
              :key="idx"
            >
              <div class="max-w-xs mx-auto md:ml-0">
                <div class="flex justify-between items-center">
                  <div class="w-24 h-32 mb-6" v-if="m.president_image == ''"></div>
                  <img
                    v-else
                    class="w-24 h-32 mb-6 object-cover"
                    :src="m.president_image"
                    alt=""
                  />
                  <img :src="m.name_image" class="w-40 h-24 mb-6" />
                </div>
                <h3 class="mb-1 text-lg text-coolGray-800 font-semibold">
                  {{ m.name }}
                </h3>
                <span class="inline-block mb-4 text-lg font-medium text-red-500">{{
                  m.title
                }}</span>
                <p class="mb-4 text-coolGray-500 font-medium">{{}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
