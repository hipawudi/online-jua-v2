<script>
export default {
  setup() {
    const dayjs = useDayjs();
    const media = useStrapiMedia();
  },
  data() {
    return {
      menu: [
        {
          title: "ORGANISATION",
          subMenu: [
            { title: "History of JUA" },
            { title: "Origin of JUDO" },
            { title: "JUA EC" },
            { title: "JUA Members" },
            { title: "JUA Bank A/C Details" },
            { title: "JUA Minutes" },
          ],
        },
        {
          title: "NEWS",
          subMenu: [
            { title: "What's News" },
            { title: "IJF News" },
            { title: "Photo Gallery" },
          ],
        },
        {
          title: "EVENTS",
          subMenu: [
            { title: "IJF Ranking Tournaments" },
            { title: "World Judo Championships" },
            { title: "JUA Meetings" },
            { title: "Zonal Championships" },
            { title: "AYJC & AJJC" },
            { title: "Olympic" },
            { title: "Member Events" },
            { title: "Asioan Judo Championships" },
          ],
        },
        {
          title: "REGULATION",
          subMenu: [
            { title: "JUA Statues" },
            { title: "JUA F&A Procedure" },
            { title: "JUA Technical Code" },
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between my-4 gap-6">
          <div class="flex items-center">
            <img src="/logo/logo.png" />
          </div>
          <template v-for="m in menu" :key="m.title">
            <div class="flex flex-col mt-2 gap-3 mx-4">
              <div class="text-gray-900 font-bold text-lg">
                {{ m.title }}
              </div>
              <template v-for="subm in m.subMenu" :key="subm.title">
                <div class="font-bold text-sm hover:text-red-500">{{ subm.title }}</div>
              </template>
            </div>
          </template>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-blue-700 min-h-16 flex items-center">
        <div
          class="container text-white mx-auto flex flex-col sm:flex-row justify-between p-4 gap-3"
        >
          <div class="flex gap-6">
            <div>Terms of Use</div>
            <div class="">Privacy Policy</div>
          </div>
          <div class="">Copyrights © 2023 Hubis. All Rights Reserved.</div>
          <div class="flex gap-6">
            <div class="flex gap-1 items-center">
              <svg
                fill="#000000"
                width="22"
                height="20"
                viewBox="0 0 24 24"
                id="facebook"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                class="icon flat-color"
              >
                <path
                  id="primary"
                  d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"
                  style="fill: rgb(255, 255, 255)"
                ></path>
              </svg>
              Facebook
            </div>
            <div class="flex gap-1 items-center">
              <svg
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="svg-inline1"
              >
                <path
                  d="M16.0809 1.78777C15.5109 2.03477 14.9219 2.20577 14.2949 2.28177C14.9409 1.90177 15.4349 1.29377 15.6629 0.552768C15.0549 0.913768 14.3899 1.16077 13.6869 1.31277C13.1169 0.704768 12.2999 0.324768 11.4069 0.324768C9.67786 0.324768 8.29086 1.73077 8.29086 3.44077C8.29086 3.68777 8.30986 3.91577 8.36686 4.14377C5.78286 4.02977 3.50286 2.77577 1.96386 0.894768C0.861859 2.87077 2.09686 4.50477 2.91386 5.05577C2.41986 5.05577 1.92586 4.90377 1.50786 4.67577C1.50786 6.21477 2.59086 7.48777 3.99686 7.77277C3.69286 7.86777 3.00886 7.92477 2.59086 7.82977C2.98986 9.06477 4.14886 9.97677 5.49786 9.99577C4.43386 10.8318 2.87586 11.4968 0.880859 11.2878C2.26786 12.1808 3.90186 12.6938 5.66886 12.6938C11.4069 12.6938 14.5229 7.94377 14.5229 3.83977C14.5229 3.70677 14.5229 3.57377 14.5039 3.44077C15.1499 2.96577 15.6819 2.41477 16.0809 1.78777Z"
                  fill="currentColor"
                ></path></svg
              >Twitter
            </div>
            <div class="flex gap-1 items-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="svg-inline3"
              >
                <path
                  d="M13.1004 13.0993V8.30161C13.1004 5.94368 12.5928 4.14249 9.84186 4.14249C8.51552 4.14249 7.6313 4.86297 7.27106 5.55069H7.23831V4.35536H4.63477V13.0993H7.35294V8.7601C7.35294 7.61388 7.5658 6.51679 8.97401 6.51679C10.3658 6.51679 10.3822 7.81038 10.3822 8.8256V13.083H13.1004V13.0993Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0.212891 4.35538H2.93106V13.0994H0.212891V4.35538Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M1.57195 -9.15527e-05C0.704104 -9.15527e-05 0 0.704012 0 1.57186C0 2.43971 0.704104 3.16019 1.57195 3.16019C2.4398 3.16019 3.14391 2.43971 3.14391 1.57186C3.14391 0.704012 2.4398 -9.15527e-05 1.57195 -9.15527e-05Z"
                  fill="currentColor"
                ></path></svg
              >Linkedin
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
