<template>
  <div>
    <button
      :class="[
        'block w-full p-4 rounded-lg bg-[#5F20AE] text-white',
        className,
      ]"
    >
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>
