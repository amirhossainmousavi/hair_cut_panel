export default {
  getTurnData({ commit }) {
    const turnData = [
      {
        name: "حسام عزیزی",
        status: JSON.parse(localStorage.getItem("userHaveSucsessTutn"))?.find(
          (user) => user.cell === "09381985929"
        )
          ? "visited"
          : "not_visited",
        time: "ساعت 9:00",
        cell_number: "09381985929",
        data: [
          { title: "مبلغ قابل پرداخت", value: "60,000 هزار تومان" },
          { title: "مبلغ بیعانه پرداخت شده", value: "30,000 هزار تومان" },
          { title: "خدمات", value: "اصلاح مو" },
        ],
      },
      {
        name: "امیرحسین موسوی",
        status: JSON.parse(localStorage.getItem("userHaveSucsessTutn"))?.find(
          (user) => user.cell === "09369007054"
        )
          ? "visited"
          : "not_visited",
        time: "ساعت 9:00",
        cell_number: "09369007054",
        data: [
          { title: "مبلغ قابل پرداخت", value: "60,000 هزار تومان" },
          { title: "مبلغ بیعانه پرداخت شده", value: "30,000 هزار تومان" },
          { title: "خدمات", value: "اصلاح مو" },
        ],
      },
      {
        name: "ایمان دهقانی",
        status: JSON.parse(localStorage.getItem("userHaveSucsessTutn"))?.find(
          (user) => user.cell === "09103312527"
        )
          ? "visited"
          : "not_visited",
        time: "ساعت 9:00",
        cell_number: "09103312527",
        data: [
          { title: "مبلغ قابل پرداخت", value: "60,000 هزار تومان" },
          { title: "مبلغ بیعانه پرداخت شده", value: "30,000 هزار تومان" },
          { title: "خدمات", value: "اصلاح مو" },
        ],
      },
      {
        name: "امیر بیگی",
        status: JSON.parse(localStorage.getItem("userHaveSucsessTutn"))?.find(
          (user) => user.cell === "09224048766"
        )
          ? "visited"
          : "not_visited",
        time: "ساعت 9:00",
        cell_number: "09224048766",
        data: [
          { title: "مبلغ قابل پرداخت", value: "60,000 هزار تومان" },
          { title: "مبلغ بیعانه پرداخت شده", value: "30,000 هزار تومان" },
          { title: "خدمات", value: "اصلاح مو" },
        ],
      },
    ];
    commit("SET_TURN_DATA", turnData);
  },
};
