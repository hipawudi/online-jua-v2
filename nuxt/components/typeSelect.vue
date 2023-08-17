<script>
export default {
  data() {
    return {
      hold_right: false,
      right_button: null,
      right_button_interval: null,
      hold_left: false,
      left_button: null,
      left_button_interval: null,
    };
  },
  setup() {},
  mounted() {
    this.right_button = document.getElementById("right-button");
    this.right_button.addEventListener("mousedown", function (e) {
      this.hold_right = true;
      this.right_button_interval = setInterval(() => {
        if (this.hold_right) {
          document.querySelector(".executive-type").scrollLeft += 20;
        }
      }, 10);
    });
    this.right_button.addEventListener("mouseup", function (e) {
      this.hold_right = false;
      clearInterval(this.right_button_interval);
    });
    this.left_button = document.getElementById("left-button");
    this.left_button.addEventListener("mousedown", function (e) {
      this.hold_left = true;
      this.left_button_interval = setInterval(() => {
        if (this.hold_left) {
          document.querySelector(".executive-type").scrollLeft -= 20;
        }
      }, 10);
    });
    this.left_button.addEventListener("mouseup", function (e) {
      this.hold_left = false;
      clearInterval(this.left_button_interval);
    });
  },
};
</script>
<template>
  <div class="flex mb-12">
    <div id="left-button">
      <button class="w-12 h-12 flex items-center">
        <svg
          fill="#000000"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          id="left-square-2"
          data-name="Flat Line"
          xmlns="http://www.w3.org/2000/svg"
          class="icon flat-line"
        >
          <rect
            id="secondary"
            x="3"
            y="3"
            width="18"
            height="18"
            rx="1"
            style="fill: rgb(44, 169, 188); stroke-width: 2"
          ></rect>
          <polyline
            id="primary"
            points="10 9 7 12 10 15"
            style="
              fill: none;
              stroke: rgb(0, 0, 0);
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 2;
            "
          ></polyline>
          <path
            id="primary-2"
            data-name="primary"
            d="M17,12H7M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3Z"
            style="
              fill: none;
              stroke: rgb(0, 0, 0);
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 2;
            "
          ></path>
        </svg>
      </button>
    </div>
    <div class="bg-[#2e99b0] rounded-lg px-4 py-2 text-white shadow-md">
      <div class="overflow-x-auto flex flex-nowrap gap-12 executive-type">
        <div class="shrink-0 bg-red-500 p-1 font-bold rounded-lg">Sports Commission</div>
        <div class="shrink-0">Referee Commission</div>
        <div class="shrink-0">Education & Coaching Commission</div>
        <div class="shrink-0">Kata Commission</div>
        <div class="shrink-0">Medical Commission</div>
        <div class="shrink-0">Development Commissions</div>
        <div class="shrink-0">Event Management</div>
        <div class="shrink-0">JUA Academy</div>
        <div class="shrink-0">Media & Marketing</div>
      </div>
    </div>
    <div id="right-button">
      <button class="w-12 h-12 flex items-center">
        <svg
          fill="#000000"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          id="right-square-2"
          data-name="Flat Line"
          xmlns="http://www.w3.org/2000/svg"
          class="icon flat-line"
        >
          <rect
            id="secondary"
            x="3"
            y="3"
            width="18"
            height="18"
            rx="1"
            style="fill: rgb(44, 169, 188); stroke-width: 2"
          ></rect>
          <polyline
            id="primary"
            points="14 15 17 12 14 9"
            style="
              fill: none;
              stroke: rgb(0, 0, 0);
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 2;
            "
          ></polyline>
          <path
            id="primary-2"
            data-name="primary"
            d="M7,12H17M4,21H20a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V20A1,1,0,0,0,4,21Z"
            style="
              fill: none;
              stroke: rgb(0, 0, 0);
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 2;
            "
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
