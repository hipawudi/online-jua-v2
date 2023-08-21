<script>
export default {
  data() {
    return {
      classes: [
        { text: "About", to: "/about" },
        { text: "JUA Congress", to: "/jua-congress" },
      ],
    };
  },
};
</script>

<template>
  <div>
    <page-header :classes="classes" title="JUA Congress"></page-header>
    <section
      class="bg-white 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('/flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto px-4 xl:pl-16">
        <p class="py-8 text-lg md:text-xl text-gray-500 font-medium">
          The JUA congress meetings serve multiple important purposes within the
          organization, including the election of board members, committee
          representatives, and chairpersons, as well as the ratification of actions for
          the upcoming term.
        </p>
        <div class="flex flex-wrap justify-center -mx-4"></div>
      </div>
    </section>
    <section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0">
      <div class="container mx-auto xl:pl-16 px-4 flex flex-col gap-6">
        <div class="border-t-2 border-t-red-500 p-4 border shadow-md">
          <div class="flex flex-col gap-3">
            <div class="text-xl font-bold text-red-500">
              JUA Ordinary Congress, Kuwait 2015
            </div>
            <div class="text-md">Venue : Hotel Jumeirah Kuwait</div>
            <div class="text-md">Date : Monday, 11, 2015</div>
            <div class="flex items-center gap-3">
              <div class="shrink-0">PDF :</div>
              <a href="/pdf/2016-MINUTES-JUA-EC-2016-TASHKENT.pdf" target="_blank">
                <div class="border-2 border-[#2e99b0] p-2 hover:border-red-500">
                  JUA CONGRESS - Minutes KUWAIT 2015
                </div></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
