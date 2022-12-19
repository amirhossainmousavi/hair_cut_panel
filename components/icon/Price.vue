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
        d="M22.5944 17.0556C22.0694 17.5681 21.7694 18.3057 21.8444 19.0932C21.9569 20.4432 23.1944 21.4306 24.5444 21.4306H26.9194V22.9182C26.9194 25.5057 24.8069 27.6182 22.2194 27.6182H7.86943C5.28193 27.6182 3.16943 25.5057 3.16943 22.9182V14.5057C3.16943 11.9182 5.28193 9.80566 7.86943 9.80566H22.2194C24.8069 9.80566 26.9194 11.9182 26.9194 14.5057V16.3057H24.3944C23.6944 16.3057 23.0569 16.5806 22.5944 17.0556Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.16943 15.6305V9.91811C3.16943 8.43061 4.08193 7.10556 5.46943 6.58056L15.3944 2.83056C16.9444 2.24306 18.6069 3.39309 18.6069 5.05559V9.80558"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.2429 17.5809V20.1559C28.2429 20.8434 27.6929 21.4059 26.9929 21.4309H24.5429C23.1929 21.4309 21.9554 20.4434 21.8429 19.0934C21.7679 18.3059 22.0679 17.5684 22.5929 17.0559C23.0554 16.5809 23.6929 16.3059 24.3929 16.3059H26.9929C27.6929 16.3309 28.2429 16.8934 28.2429 17.5809Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.79443 15.1182H17.5444"
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
