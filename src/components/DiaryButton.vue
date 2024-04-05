<template>
  <button :class="`Button Button_${type}`" @click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  methods: {
    onClick(e) {
      this.$emit("onClick", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.Button {
  background-color: rgb(236, 236, 236);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  white-space: nowrap;

  &.Button_POSITIVE {
    background-color: rgb(100, 201, 100) !important;
    color: white;
  }
  &.Button_NEGATIVE {
    background-color: rgb(253, 86, 95);
    color: white;
  }
}
</style>
