<script>
export default {
  data() {
    return {
      classes: [
        {
          text: "Gallery",
          to: "/gallery",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <page-header :classes="classes" title="GALLERY"></page-header>
    <section class="bg-white lg:pl-16 2xl:pl-24 pl-0">
      <div class="container mx-auto xl:pl-16 px-4">
        <div class="">
          <p class="mb-12 text-lg md:text-xl text-gray-500 font-medium">
            JUA all event photo gallery.
          </p>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="/images/photogallery/asian_games_2018_1.jpg"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/2 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="/images/photogallery/asian_games_2018_2.jpg"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/3 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="/images/photogallery/asian_games_2018_3.jpg"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/3 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="/images/photogallery/asian_games_2018_4.jpg"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/3 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover object-top"
              src="/images/photogallery/asian_games_2018_5.jpg"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/2 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="/images/photogallery/asian_games_2018_6.jpg"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/2 p-3">
            <img
              class="w-full h-72 rounded-lg object-cover"
              src="/images/photogallery/asian_games_2018_7.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
