<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      type:type
      :class="[
        'w-full bg-[#DAE0E5] border-none p-[0.9rem] rounded-lg',
        className,
      ]"
    />
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      tyep: String,
      default: "09369007054",
    },
    className: {
      tyep: String,
      default: "",
    },
    tyep: {
      tyep: String,
      default: "text",
    },
  },
};
</script>
