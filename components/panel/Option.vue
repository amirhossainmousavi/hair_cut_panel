<template>
  <div
    class="section-container w-full h-20 bg-white fixed bottom-0 rounded-t-3xl flex items-center justify-around max-w-[400px]"
  >
    <profile
      :color="step === 'profile' ? '#5F20AE' : 'black'"
      text="پروفایل"
      @click.native="changeStep('profile')"
    />
    <price
      :color="step === 'price' ? '#5F20AE' : 'black'"
      text="کیف پول"
      @click.native="changeStep('price')"
    />
    <home-icon
      :color="step === 'home' ? '#5F20AE' : 'black'"
      text="خانه"
      @click.native="changeStep('home')"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: "home",
    };
  },
  methods: {
    changeStep(stepName) {
      this.step = stepName;
      this.$emit("input", stepName);
    },
  },
};
</script>
<style lang="scss" scoped>
.section-container {
  box-shadow: 0 -5px 32px -22px rgb(0 0 0 / 75%);
}
</style>
