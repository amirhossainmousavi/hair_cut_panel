<template>
  <div class="w-[90%]">
    <div
      :class="[
        '!w-full rounded-lg bg-white min-h-[15rem] my-3 text-right p-6',
        { 'opacity-70 pointer-events-none': status === 'visited' },
      ]"
    >
      <div>
        <span class="text-base block">{{ name }}</span>
        <span class="text-sm block mt-3 text-[#313539]">{{ time }}</span>
      </div>
      <div
        v-for="(item, index) in data"
        :key="index"
        class="w-full flex !justify-between mt-4"
      >
        <span class="text-sm text-[#313539]">{{ item.value }}</span>
        <span class="text-sm text-[#313539]">{{ item.title }}</span>
      </div>
      <div class="w-full flex justify-between mt-6">
        <Button
          @click.native="goToPhone"
          className="w-36  py-[0.5rem] flex justify-center items-center text-sm !bg-white border !text-black !border-black"
        >
          تماس
        </Button>
        <Button
          @click.native="buttonAction"
          className="w-36  py-[0.5rem] flex justify-center items-center text-sm !bg-white border !text-black !border-black"
        >
          {{ status === "not_visited" ? "مراجعه شده" : "خفن شده" }}
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    name: {
      type: String,
      default: "آرایشگر نگار",
    },
    time: {
      type: String,
      default: "پیش فرض",
    },
    data: {
      type: Array,
      default: () => [],
    },
    status: {
      type: String,
      default: "not_visited",
    },
    cell: {
      type: String,
      default: "",
    },
    buttonAction: {
      type: Function,
      default: () => true,
    },
  },
  methods: {
    goToPhone() {
      return (location.href = `tel:${this.cell}`);
    },
  },
};
</script>
