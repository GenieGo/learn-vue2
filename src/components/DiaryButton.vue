<template>
  <!-- <button :class="`Button Button_${type}`" @click="onClick">
    {{ text }}
  </button> -->
  <v-btn :class="`Button Button_${buttonType}`" :size="size" @click="onClick">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    buttonType: {
      type: String,
      default: "DEFAULT",
    },
    size: {
      type: String,
      default: "x-small",
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
  // background-color: rgb(236, 236, 236);
  // cursor: pointer;
  // border: none;
  // border-radius: 5px;
  // padding: 10px 20px;
  // font-size: 18px;
  // white-space: nowrap;

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
