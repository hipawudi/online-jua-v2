<script>
export default {
  setup() {
    const dayjs = useDayjs();
    const media = useStrapiMedia();
  },
  data() {
    return {
      openedMenu: false,
      menu: [
        { title: "HOME", link: "/" },
        { title: "ORGANISATION", link: "/" },
        { title: "NEWS", link: "/news" },
        { title: "PHOTO GALLERY", link: "/" },
        { title: "EVENTS", link: "/" },
        { title: "REGULATION", link: "/" },
        { title: "RESULT", link: "/" },
        { title: "CONTACT US", link: "/contact" },
      ],
    };
  },
  methods: {
    openMeun() {
      this.openedMenu = !this.openedMenu;
    },
  },
};
</script>

<template>
  <!-- <div class="container mx-auto p-4">
    <div class="flex">
      
      <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-gray-400 p-3" @click="toggle">
          <svg
            class="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="min-h-screen bg-white"></div>
    <div class="hidden sm:block">
      <div class="flex mt-2 gap-3 text-gray-800 font-bold text-lg pl-6">
        <div v-for="(m, index) in menu" :key="index">
          <div class="hover:text-red-600">{{ m.title }}</div>
        </div>
      </div>
    </div>
  </div> -->
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="container mx-auto p-4">
      <div class="flex gap-3">
        <NuxtLink to="/"><img src="/logo/logo.png" /></NuxtLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          @click="openMeun"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div class="hidden sm:block">
        <div class="flex mt-2 gap-3 text-gray-800 font-bold text-lg pl-6">
          <div v-for="(m, index) in menu" :key="index">
            <NuxtLink :to="m.link">
              <div class="hover:text-red-600">{{ m.title }}</div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="w-full md:w-auto md:hidden" :class="openedMenu ? 'block' : 'hidden'">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <template v-for="(m, index) in menu" :key="index">
            <li>
              <NuxtLink
                :to="m.link"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-red-500"
                >{{ m.title }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
