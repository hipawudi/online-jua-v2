<script>
import membersData from "public/members.json";
export default {
  data() {
    return {
      members: membersData,
      classes: [{ text: "JUA Members", to: "/jua-members" }],
      zone_index: 0,
    };
  },
  computed: {
    member() {
      return this.members[this.$route.params.id - 1];
    },
  },
  mounted() {
    const routeClass = { text: this.member.title, to: "" };
    this.classes.push(routeClass);
  },
};
</script>

<template>
  <div>
    <page-header :title="member.title" :classes="classes"></page-header>
    <section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0">
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="mb-4">
          <img :src="member.name_image" class="w-40" />
        </div>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex flex-col text-gray-500 text-lg">
            <div class="flex gap-6">
              <div class="w-16">Title</div>
              <div class="text-black font-bold">{{ member.title }}</div>
            </div>
            <div class="flex gap-6">
              <div class="w-16">Address</div>
              <div class="text-black font-bold">{{ member.address }}</div>
            </div>
            <div class="flex gap-6">
              <div class="w-16">Phone</div>
              <div class="text-black font-bold">{{ member.phone }}</div>
            </div>
            <div class="flex gap-6">
              <div class="w-16">Web</div>
              <div class="text-black font-bold">{{ member.web }}</div>
            </div>
            <div class="flex gap-6">
              <div class="w-16">Email</div>
              <div class="text-black font-bold">{{ member.email }}</div>
            </div>
          </div>
          <div class="grow md:text-right text-left">
            <div
              class="flex md:justify-end justify-start gap-6 md:flex-row flex-row-reverse"
            >
              <div class="flex flex-col">
                <div class="text-lg text-gray-500">President</div>
                <div class="text-lg font-bold">{{ member.president }}</div>
              </div>
              <div class="w-24 h-32">
                <img
                  v-if="member.president_image != ''"
                  :src="member.president_image"
                  class="w-24 h-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
