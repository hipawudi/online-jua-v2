<script>
export default {
  data() {
    return {
      classes: [
        { text: "Regulations", to: "/regulations" },
        { text: "JUA Statues", to: "/jua-statues" },
      ],
    };
  },
};
</script>

<template>
  <div>
    <page-header :classes="classes" title="JUA Statues"></page-header>
    <section
      class="bg-white 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto px-4 xl:pl-16">
        <p class="py-8 text-lg md:text-xl text-gray-500 font-medium">
          Judo regulations govern the conduct and techniques used in the martial art of
          Judo, ensuring fair and safe competition.
        </p>
        <div class="flex flex-wrap justify-center -mx-4"></div>
      </div>
    </section>
    <section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0">
      <div class="container mx-auto xl:pl-16 px-4 flex flex-col gap-6">
        <h3 class="font-bold text-xl">Which one would you like to see?</h3>
        <div>
          <button
            class="block w-full py-4 px-6 text-lg leading-6 text-white font-medium text-center bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            JUA Statues
          </button>
        </div>
        <div>
          <button
            class="block w-full py-4 px-6 text-lg leading-6 text-white font-medium text-center bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            JUA F&#38;A Procedure
          </button>
        </div>
        <div>
          <button
            class="block w-full py-4 px-6 text-lg leading-6 text-white font-medium text-center bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            JUA Technical Code
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
