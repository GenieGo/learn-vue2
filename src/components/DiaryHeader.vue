<template>
  <div>
    <header class="Header">
      <slot name="left" class="header_left" />
      <div class="header_center">{{ title }}</div>
      <slot name="right" class="header_right" />
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.Header {
  display: flex;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid rgb(226, 226, 226);

  > div {
    display: flex;
  }
  .header_center {
    width: 50%;
    font-size: 25px;
    justify-content: center;
  }
  .header_left {
    width: 25%;
    justify-content: flex-start;
  }
  .header_right {
    width: 25%;
    justify-content: flex-end;
  }
}
</style>