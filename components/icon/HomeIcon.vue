<template>
  <div class="flex flex-col items-center">
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="mb-1"
    >
      <path
        d="M15.1421 23.2212V19.4712"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7297 4.24625L4.06718 11.1837C3.09218 11.9587 2.46718 13.5962 2.67968 14.8212L4.34218 24.7712C4.64218 26.5462 6.34218 27.9837 8.14218 27.9837H22.1422C23.9297 27.9837 25.6422 26.5337 25.9422 24.7712L27.6047 14.8212C27.8047 13.5962 27.1797 11.9587 26.2172 11.1837L17.5547 4.25875C16.2172 3.18375 14.0547 3.18375 12.7297 4.24625Z"
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
  name: "HomeIcon",
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
