<template>
  <div class="w-full flex justify-center mt-9">
    <div
      class="price_section w-[90%] h-48 rounded-lg flex flex-col justify-center items-center"
    >
      <span class="text-white text-sm mb-3">مبلغ قابل پرداخت</span>
      <span class="text-white text-2xl" dir="rtl"
        >{{ addCommas(price) }} تومان</span
      >
    </div>
  </div>
</template>
<script>
import { addCommas } from "@persian-tools/persian-tools";
export default {
  name: "price_box",
  props: {
    price: {
      type: Number,
      default: 120000,
    },
  },
  methods: {
    addCommas,
  },
};
</script>
<style lang="scss">
.price_section {
  background: linear-gradient(
    103.18deg,
    #521f92 21.88%,
    rgba(162, 46, 165, 0.4) 123.35%
  );
}
</style>
