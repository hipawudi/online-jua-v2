<script>
import membersData from "public/members.json";

export default {
  data() {
    return {
      members: membersData,
      zones: ["Central Zone", "South East Zone", "East Zone", "West Zone", "South Zone"],
    };
  },
};
</script>

<template>
  <section
    class="py-24 bg-white"
    style="
      background-image: url('flex-ui-assets/elements/pattern-white.svg');
      background-position: center;
    "
  >
    <div class="container px-4 mx-auto xl:pl-12">
      <span
        class="inline-block py-px px-2 mb-4 text-xs leading-5 text-red-500 bg-red-100 font-medium uppercase rounded-9xl"
        >ORGANIZATIONS</span
      >
      <div class="mb-12" v-for="(z, idx) in zones" :key="idx">
        <h3
          class="mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"
        >
          {{ z }}
        </h3>
        <div class="flex flex-wrap -mx-4">
          <div
            class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10"
            v-for="(m, idx) in members.filter((x) => x.zone == z)"
            :key="idx"
          >
            <div class="max-w-xs mx-auto md:ml-0">
              <img
                class="w-24 h-24 mb-6 rounded-full"
                src="flex-ui-assets/images/teams/avatar1.png"
                alt=""
              />
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
</template>
