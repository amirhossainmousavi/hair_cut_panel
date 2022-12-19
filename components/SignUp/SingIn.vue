<template>
  <div>
    <transition
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      mode="out-in"
    >
      <div key="phoneNumber" v-if="step === 1">
        <span class="block text-right font-IRANSansWebBlack text-[18px] mb-4"
          >ورود / ثبت نام آرایشگر</span
        >
        <span class="text-right mb-4 block text-[14px]">شماره موبایل</span>
        <Input
          className="w-[20rem] focus-visible:outline-[blueviolet]"
          type="tel"
          v-model="phoneNumber"
        />
        <Button @click.native="confirmPhoneNumber" class="mt-4">ورود</Button>
      </div>
      <div key="code" v-else-if="step === 2">
        <span class="block text-right font-IRANSansWebBlack text-[18px] mb-4"
          >ورود / ثبت نام آرایشگر</span
        >
        <span class="text-right mb-6 block text-[14px]"
          >کد تایید ارسال شده را وارد کنید</span
        >
        <OtpInput
          ref="otpInput"
          class="otp-wrapper"
          input-classes="input__verify-code"
          should-auto-focus
          separator=""
          :num-inputs="4"
          @on-complete="sendToLogin"
        />
        <Button @click.native="confirmPhoneNumber" class="mt-4">ورود</Button>
      </div>
    </transition>
  </div>
</template>
<script>
import { digitsArToEn, digitsFaToEn } from "@persian-tools/persian-tools";
import OtpInput from "@bachdgvn/vue-otp-input";
export default {
  name: "Singin",
  components: {
    OtpInput,
  },
  data() {
    return {
      phoneNumber: null,
      step: 1,
    };
  },
  computed: {
    isPhoneNumberValid() {
      if (this.phoneNumber) {
        let regexExp = /^(\+98|0)?9\d{9}$/;
        return regexExp.test(digitsArToEn(digitsFaToEn(this.phoneNumber)));
      } else {
        return true;
      }
    },
  },
  methods: {
    confirmPhoneNumber() {
      if (!this.isPhoneNumberValid)
        return this.$toast.error("لطفا شماره تلفن خود را صحیح وارد کنید!");
      return (this.step = 2);
    },
    sendToLogin(val) {
      if (this.phoneNumber === "09369007054" && val === "7313")
        return this.$router.push({
          name: "panel",
        });

      return this.$toast.error("کد وارد شده اشتباه میباشد");
    },
  },
};
</script>
<style lang="scss">
.otp-wrapper {
  display: flex;
  .input__verify-code {
    direction: ltr;
    background: rgba(216, 226, 234, 0.52);
    border-radius: 1rem;
    border: none;
    width: 3.5rem;
    margin: 0 0.7rem;
    outline: none;
    height: 3.5rem;
    text-align: center;
    caret-color: auto;
    color: rebeccapurple;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.fadeIn {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: fadeIn;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
.fadeOut {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: fadeOut;
}
</style>
