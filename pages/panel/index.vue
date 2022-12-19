<template>
  <loader v-if="isLoading" />
  <div
    v-else
    :class="[
      'bg-[#EBEDEF] min-h-[100vh] pb-20 max-w-[400px] mx-auto',
      { '!bg-white': section !== 'home' },
    ]"
  >
    <div class="headre border-b-[1px] border-b-[#E4E3E3]">
      <Header />
    </div>
    <div class="content flex flex-col items-center w-full">
      <transition
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        mode="out-in"
      >
        <div
          v-if="section === 'home'"
          key="home"
          class="content flex flex-col items-center w-full"
        >
          <Search @input="search" />
          <user-card
            v-for="(item, index) in usersearched ?? turnData"
            :key="index"
            :name="item.name"
            :time="item.time"
            :status="item.status"
            :data="item.data"
            :cell="item.cell_number"
            :button-action="() => successfullTurn(item)"
          />
        </div>
        <div class="content w-full" v-else-if="section === 'price'">
          <price-box :price="allPrice" />

          <Button
            @click.native="show"
            className="w-[90%]  mx-auto border !border-[#5F20AE] text-[#5F20AE] !bg-white mt-6 hover:!bg-[#5F20AE] hover:text-white duration-300  flex justify-center items-center"
          >
            درخواست پرداخت<price color="#5F20AE" class="scale-[0.9] ml-2" />
          </Button>
          <div
            dir="rtl"
            class="w-[90%] min-h-[20rem] bg-[#EBEDEF] rounded-lg mx-auto mt-4 p-4"
          >
            <span>درخواست ها</span>
            <div
              :class="[
                'mt-4',
                {
                  'flex justify-center items-center w-full h-[13rem]':
                    !requests.length,
                },
              ]"
            >
              <span v-if="!requests.length" class="text-sm text-[#313539]"
                >درخواستی وجود ندارد !</span
              >
              <div v-else>
                <div
                  v-for="(item, index) in requests"
                  :key="index"
                  class="w-full flex justify-between border-b-2 py-4 border-b-[#BAC1C8]"
                >
                  <div>
                    <span class="text-[14px]"
                      >{{ addCommas(item.price) }} هزار تومان</span
                    >
                    <span class="text-sm bg-white p-[0.4rem] rounded-[16px]"
                      >در انتظار</span
                    >
                  </div>
                  <span class="text-[14px]">{{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
          <Modal v-model="showModal" :show="showModal">
            <div dir="rtl" class="w-full h-full p-6">
              <span class="block mb-4">مبلغ درخواستی:</span>
              <Input
                v-model="requestPrice"
                placeholder="لطفا مقدار به تومان وارد کنید!"
              />
              <span
                v-if="requestPrice"
                class="block text-red-600 text-sm mt-4"
                >{{
                  `مقدار درخواستی شما : ${addCommas(requestPrice)} تومان`
                }}</span
              >
              <Button
                @click.native="requestPriceAction"
                className="w-full mx-auto border !border-[#5F20AE] text-[#5F20AE] !bg-white mt-4 hover:!bg-[#5F20AE] hover:text-white duration-300  flex justify-center items-center"
              >
                تایید
              </Button>
            </div>
          </Modal>
        </div>
        <div dir="rtl" v-else-if="section === 'profile'" class="content w-full">
          <div class="w-full flex justify-center">
            <div
              class="w-24 h-24 flex justify-center items-center mt-6 rounded-[50%] border border-[#BAC1C8]"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.134 2.77222H11.1904H12.1904C12.6046 2.77222 12.9404 3.108 12.9404 3.52222C12.9404 3.93643 12.6046 4.27222 12.1904 4.27222H11.1904C9.28361 4.27222 7.92894 4.27381 6.90128 4.41198C5.89519 4.54724 5.31554 4.80091 4.89233 5.22412C4.46912 5.64733 4.21545 6.22698 4.08019 7.23307C3.94202 8.26073 3.94043 9.6154 3.94043 11.5222V13.5222C3.94043 15.2999 3.94181 16.5977 4.05396 17.598L4.6601 16.9919L6.33167 15.3203L6.36844 15.2835C7.00374 14.6482 7.5335 14.1184 8.01062 13.7544C8.51422 13.3701 9.0463 13.1006 9.69043 13.1006C10.3346 13.1006 10.8666 13.3701 11.3702 13.7544C11.8474 14.1184 12.3771 14.6482 13.0124 15.2835L13.0124 15.2835L13.0492 15.3203L14.1907 16.4618C14.6865 15.9689 15.1165 15.5551 15.5106 15.2544C16.0142 14.8701 16.5463 14.6006 17.1904 14.6006C17.8346 14.6006 18.3666 14.8701 18.8702 15.2544C19.3185 15.5964 19.8132 16.0847 20.3982 16.6693C20.4397 15.8216 20.4404 14.7949 20.4404 13.5222V12.5222C20.4404 12.108 20.7762 11.7722 21.1904 11.7722C21.6046 11.7722 21.9404 12.108 21.9404 12.5222V13.5222V13.5786V13.5787C21.9404 15.4164 21.9405 16.872 21.7873 18.0112C21.6297 19.1837 21.2976 20.1326 20.5492 20.881C19.8008 21.6293 18.8519 21.9615 17.6795 22.1191C16.5402 22.2722 15.0846 22.2722 13.2469 22.2722H13.2468H13.1904H11.1904H11.134H11.134C9.29623 22.2722 7.84061 22.2722 6.70141 22.1191C5.52899 21.9615 4.58004 21.6293 3.83167 20.881C3.08331 20.1326 2.75119 19.1837 2.59356 18.0112C2.4404 16.872 2.44041 15.4164 2.44043 13.5786V13.5222V11.5222V11.4658C2.44041 9.62804 2.4404 8.17241 2.59356 7.03319C2.75119 5.86077 3.08331 4.91182 3.83167 4.16346C4.58004 3.4151 5.52899 3.08298 6.70141 2.92535C7.84062 2.77219 9.29625 2.7722 11.134 2.77222ZM4.89233 19.8203C4.73752 19.6655 4.60539 19.4898 4.49345 19.2799L5.72076 18.0525L7.39233 16.381C8.07399 15.6993 8.53301 15.2425 8.92049 14.9469C9.29067 14.6645 9.50613 14.6006 9.69043 14.6006C9.87473 14.6006 10.0902 14.6645 10.4604 14.9469C10.8478 15.2425 11.3069 15.6993 11.9885 16.381L13.6601 18.0525L16.3375 20.73C15.4898 20.7715 14.4631 20.7722 13.1904 20.7722H11.1904C9.28361 20.7722 7.92894 20.7706 6.90128 20.6325C5.89519 20.4972 5.31554 20.2435 4.89233 19.8203ZM19.4885 19.8203C19.1822 20.1267 18.7938 20.3442 18.2211 20.4923L18.2208 20.4919L15.2515 17.5226C15.7427 17.0345 16.1053 16.6874 16.4205 16.4469C16.7907 16.1645 17.0061 16.1006 17.1904 16.1006C17.3747 16.1006 17.5902 16.1645 17.9604 16.4469C18.3478 16.7425 18.8069 17.1993 19.4885 17.881L20.1601 18.5525L20.1605 18.5529C20.0124 19.1256 19.7949 19.514 19.4885 19.8203ZM18.7208 5.05255C18.9802 4.79316 19.4007 4.79316 19.6601 5.05255C19.9195 5.31194 19.9195 5.7325 19.6601 5.99189L17.8573 7.79466C16.9924 8.65963 16.6604 8.98147 16.2672 9.19464L16.2366 9.21099C15.9711 9.35128 15.6801 9.44141 15.1546 9.55809C15.2712 9.03253 15.3614 8.74157 15.5017 8.47603L15.518 8.44547C15.7312 8.05222 16.053 7.72029 16.918 6.85533L18.7208 5.05255ZM20.7208 3.99189C19.8756 3.14671 18.5053 3.14671 17.6601 3.99189L15.8573 5.79467L15.7783 5.87363L15.7783 5.87363C15.0192 6.63241 14.5289 7.1225 14.1993 7.73064L14.1754 7.77531C13.8522 8.38694 13.7164 9.06674 13.5062 10.1192L13.4843 10.2288L13.455 10.3751C13.4058 10.621 13.4828 10.8752 13.6601 11.0525C13.8374 11.2299 14.0916 11.3068 14.3375 11.2577L14.4839 11.2284L14.5934 11.2065C15.6459 10.9962 16.3257 10.8604 16.9373 10.5373L16.982 10.5134C17.5902 10.1837 18.0802 9.69341 18.839 8.93431L18.918 8.85532L20.7208 7.05255C21.5659 6.20737 21.5659 4.83707 20.7208 3.99189Z"
                  fill="#22282F"
                />
              </svg>
            </div>
          </div>
          <div class="p-4">
            <span class="text-sm block mt-6">توضیحات آرایشگاه</span>
            <textarea
              name="discription"
              v-model="description"
              class="w-full border border-[#BAC1C8] rounded-lg mt-4 p-4 text-sm"
              cols="15"
              rows="8"
            ></textarea>
            <Button
              @click.native="submitDescrption"
              className="w-full mx-auto border !border-[#5F20AE] text-[#5F20AE] !bg-white mt-4 hover:!bg-[#5F20AE] hover:text-white duration-300  flex justify-center items-center"
            >
              ثبت توضیحات
            </Button>
          </div>
        </div>
      </transition>
    </div>
    <div class="footer w-full">
      <Option v-model="section" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { addCommas } from "@persian-tools/persian-tools";
export default {
  name: "Panel",
  data() {
    return {
      section: "home",
      info: null,
      isLoading: true,
      requestPrice: null,
      usersearched: null,
      searchText: null,
      showModal: false,
      requests: [],
      allPrice: 3000000,
      description: null,
    };
  },
  async fetch() {
    this.info = await fetch("http://haircutt.ir/wp-json/dokan/v1/orders ", {
      headers: {
        Authentication:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2hhaXJjdXR0LmlyIiwiaWF0IjoxNjcxMzkyMTQ5LCJuYmYiOjE2NzEzOTIxNDksImV4cCI6MTY3MTk5Njk0OSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.UYFpvUCx98yU4tQ3hDrLb05nFz21KgQauRlEpuspqCs",
      },
    }).then((res) => res.json());
  },
  computed: {
    ...mapGetters("panel", ["turnData"]),
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    this.$store.dispatch("panel/getTurnData");
    this.setPrice();
    this.getAllRequest();
    this.getDescription();
  },
  methods: {
    addCommas,
    show() {
      this.showModal = true;
    },
    submitDescrption() {
      this.$toast.success("درخواست شما با موفقیت انجام شد");
      localStorage.setItem("description", this.description);
    },
    getDescription() {
      if (localStorage.getItem("description"))
        return (this.description = localStorage.getItem("description"));
    },
    search(text) {
      this.usersearched = this.turnData.filter((user) =>
        user.name.includes(text)
      );
    },
    successfullTurn(item) {
      const allUser =
        JSON.parse(localStorage.getItem("userHaveSucsessTutn")) || [];
      allUser.push({
        name: item.name,
        cell: item.cell_number,
      });
      localStorage.setItem("userHaveSucsessTutn", JSON.stringify(allUser));
      this.$store.dispatch("panel/getTurnData");
      this.$toast.success("درخواست شما با موفقیت انجام شد");
    },
    setPrice() {
      if (localStorage.getItem("allPrice"))
        return (this.allPrice = JSON.parse(localStorage.getItem("allPrice")));

      return localStorage.setItem("allPrice", 3000000);
    },
    getAllRequest() {
      if (localStorage.getItem("priceRequestList"))
        return (this.requests = JSON.parse(
          localStorage.getItem("priceRequestList")
        ));
    },
    sendMail(text, title) {
      var link =
        "a.hosseinmousavi@gmail.com" +
        "?cc=myCCaddress@example.com" +
        "&subject=" +
        encodeURIComponent(title) +
        "&body=" +
        encodeURIComponent(text);
      window.open(`https://gmail.com/${link}`);
    },
    requestPriceAction() {
      if (this.requestPrice > this.allPrice)
        return this.$toast.error(
          "مقدار درخواستی شما بیشتر از کل پس انداز شما میباشد"
        );

      this.$toast.success("درخواست شما با موفقیت انجام شد");
      this.sendMail(this.requestPrice, "price request");
      const priceRequestList =
        JSON.parse(localStorage.getItem("priceRequestList")) || [];
      priceRequestList.push({
        name: "درخواست پرداخت",
        price: this.requestPrice,
        status: "wait",
        date: new Date().toLocaleDateString("fa-IR"),
      });
      localStorage.setItem(
        "priceRequestList",
        JSON.stringify(priceRequestList)
      );
      this.requests = priceRequestList;
      this.allPrice = this.allPrice - this.requestPrice;
      localStorage.setItem("allPrice", this.allPrice);
      this.showModal = false;
      this.requestPrice = null;
    },
  },
};
</script>
<style lang="scss" scoped>
#__layout {
  background-color: #f3f3f3 !important;
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
