<script>
export default {
  setup() {
    const dayjs = useDayjs();
    const media = useStrapiMedia();
  },
  data() {
    return {
      menu: [
        { name: "HOME" },
        { name: "ORGANISATION" },
        { name: "NEWS" },
        { name: "PHOTO GALLERY" },
        { name: "EVENTS" },
        { name: "REGULATION" },
        { name: "RESULT" },
        { name: "CONTACT US" },
      ],
    };
  },
};
</script>

<template>
  <div class="container mx-auto p-4">
    <section><img src="logo/logo.png" /></section>
    <section>
      <div class="flex mt-2 gap-3 text-gray-800 font-bold text-lg pl-6">
        <div v-for="(m, index) in menu" :key="index">
          <div class="hover:text-red-600">{{ m.name }}</div>
        </div>
      </div>
    </section>
  </div>
</template>
