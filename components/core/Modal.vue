<template>
  <div
    v-if="show"
    :class="[
      'duration-300',
      {
        'opacity-0': !show,
        'opacity-100': show,
      },
    ]"
  >
    <div
      class="bg-gray-600 w-full h-[100vh] fixed top-0 opacity-30 z-10"
      @click="hideModal"
    ></div>
    <div
      class="fixed bottom-0 z-50 min-h-[10rem] rounded-t-2xl bg-white w-full"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    show: {
      type: Boolean,
      type: false,
    },
  },
  methods: {
    hideModal() {
      this.show = false;
      this.$emit("input", this.show);
    },
  },
};
</script>
