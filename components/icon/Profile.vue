<template>
  <div class="flex flex-col items-center">
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5078 16.6963C15.4203 16.6838 15.3078 16.6838 15.2078 16.6963C13.0078 16.6213 11.2578 14.8213 11.2578 12.6088C11.2578 10.3463 13.0828 8.50879 15.3578 8.50879C17.6203 8.50879 19.4578 10.3463 19.4578 12.6088C19.4453 14.8213 17.7078 16.6213 15.5078 16.6963Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.7829 24.9461C21.5579 26.9836 18.6079 28.2211 15.3579 28.2211C12.1079 28.2211 9.15786 26.9836 6.93286 24.9461C7.05786 23.7711 7.80786 22.6211 9.14536 21.7211C12.5704 19.4461 18.1704 19.4461 21.5704 21.7211C22.9079 22.6211 23.6579 23.7711 23.7829 24.9461Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3579 28.2212C22.2615 28.2212 27.8579 22.6248 27.8579 15.7212C27.8579 8.81763 22.2615 3.22119 15.3579 3.22119C8.45435 3.22119 2.85791 8.81763 2.85791 15.7212C2.85791 22.6248 8.45435 28.2212 15.3579 28.2212Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <span v-if="text" :style="{ color: color }">{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: "Profile",
  props: {
    color: {
      type: String,
      default: "black",
    },
    text: {
      type: String,
      default: null,
    },
  },
};
</script>
