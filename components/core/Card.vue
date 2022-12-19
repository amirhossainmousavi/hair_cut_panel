<template>
  <div
    class="card_container flex bg-[#F1F1F1] h-[20rem] w-[30%] rounded-[0.5rem] mt-8 border-solid border-2 border-[#C4C4C4] p-[0.2rem]"
  >
    <div class="image w-1/2 h-full">
      <img
        :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"
        alt="poster"
        class="h-full rounded-l-lg"
      />
    </div>
    <div class="details w-1/2 h-full pl-4 py-4 flex flex-col justify-between">
      <span class="title font-[Roboto] text-[1.3rem] font-bold">
        {{ data.title }}
      </span>
      <div class="movie_details">
        <span
          class="flex items-center text-[1rem] text-[#4E4E4E] font-[Roboto] font-normal mb-4"
          ><CalendarIcon class="mr-2 w-[22px] h-[22px]" />{{
            data.release_date
          }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  image-rendering: pixelated;
}
</style>
