<script>
import membersData from "public/members.json";
export default {
  setup(props) {
    const route = useRoute();
    const data = membersData;
    const member = membersData.filter((x, idx) => idx == route.params.id - 1);
    return { route, data, member };
  },
  data() {
    return {
      classes: [{ text: "JUA Members", to: "/jua-members" }],
      zone_index: 0,
    };
  },
};
</script>

<template>
  <div>
    <page-header :classes="classes" :title="member.title"></page-header>
    <section
      class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div v-if="member" class="container mx-auto xl:pl-16 px-4"></div>
    </section>
  </div>
</template>
