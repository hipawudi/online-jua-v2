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
            { title: "Organziation" },
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
          title: "Calendar",
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
    <section
      class="bg-white overflow-hidden pl-0 2xl:pl-24 xl:pl-20"
      style="
        background-image: url('/flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    >
      <div class="container mx-auto px-4">
        <div class="container px-4 mx-auto">
          <h3 class="mb-8 text-center leading-6 text-red-500 font-bold text-2xl mt-8">
            Meet Our Partners
          </h3>
          <div class="flex flex-wrap justify-center -mx-4">
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
              <img class="mx-auto" src="/images/s2-min.jpg" alt="" />
              <div class="font-bold text-center">International Judo Federation</div>
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
              <img class="mx-auto" src="/images/s1-min.jpg" alt="" />
              <div class="font-bold text-center">International Olympic Committee</div>
            </div>

            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
              <img class="mx-auto" src="/images/s2-min.jpg" alt="" />
              <div class="font-bold text-center">IJF World Ranking</div>
            </div>

            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0">
              <img class="mx-auto" src="/images/s3-min.jpg" alt="" />
              <div class="font-bold text-center">IJF Back Number</div>
            </div>

            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-4">
              <img class="mx-auto" src="/images/s7-min.jpg" alt="" />
              <div class="font-bold text-center">JUA Calendar</div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap lg:items-center pt-24 pb-12 -mx-4">
          <div class="w-full md:w-1/4 lg:w-auto px-4">
            <a class="block mb-5 md:mb-0 max-w-max" href="/">
              <img class="h-8" src="/images/logo4.png" alt=""
            /></a>
          </div>
          <div class="w-full md:w-3/4 lg:flex-1 px-4">
            <div class="flex flex-wrap -mx-3 lg:-mx-6 gap-3">
              <div class="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium"
                  href="/"
                  >HOME</a
                >
              </div>
              <div class="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium"
                  href="/organization"
                  >ORGANIZATION</a
                >
              </div>
              <div class="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium"
                  href="#"
                  >NEWS</a
                >
              </div>
              <div class="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium"
                  href="/gallery"
                  >PHOTO GALLERY</a
                >
              </div>
              <div class="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium"
                  href="/calendar"
                >
                  CALENDAR</a
                >
              </div>
              <div class="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium"
                  href="#"
                  >REGULATION</a
                >
              </div>
              <div class="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium"
                  href="/ranking"
                  >RANKING</a
                >
              </div>
              <div class="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium"
                  href="/contact"
                  >CONTACT US</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-100"></div>
      </div>
    </section>
    <section class="bg-red-500 xl:pl-24 2xl:pl-24">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap items-center py-12">
          <div class="w-full md:w-1/2 mb-6 md:mb-0">
            <p class="text-white font-medium">© 2023 Hubis. All Rights Reserved.</p>
          </div>
          <div class="w-full md:w-1/2">
            <div class="flex flex-wrap md:justify-end -mx-5">
              <div class="px-5">
                <a class="inline-block text-white" href="#">
                  <svg
                    width="10"
                    height="18"
                    viewbox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z"
                      fill="currentColor"
                    ></path></svg
                ></a>
              </div>
              <div class="px-5">
                <a class="inline-block text-white" href="#">
                  <svg
                    width="19"
                    height="16"
                    viewbox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z"
                      fill="currentColor"
                    ></path></svg
                ></a>
              </div>
              <div class="px-5">
                <a class="inline-block text-white" href="#">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z"
                      fill="currentColor"
                    ></path></svg
                ></a>
              </div>
              <div class="px-5">
                <a class="inline-block text-white" href="#">
                  <svg
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                      fill="currentColor"
                    ></path></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
