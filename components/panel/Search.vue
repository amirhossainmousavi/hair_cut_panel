<template>
  <div class="w-full flex flex-col justify-center py-4 px-6 bg-white">
    <Input
      v-model="search"
      className="outline-none text-center"
      placeholder="نام مراجعه کننده"
      @input="$emit('input', search)"
    />
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      search: "",
    };
  },
};
</script>
