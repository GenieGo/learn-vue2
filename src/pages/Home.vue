<template>
  <div>
    asdfasdf
    <DiaryHeader :title="'제목'">
      <template v-slot:left>
        <DiaryButton :text="'<'" />
      </template>
      <template v-slot:right>
        <DiaryButton :text="'>'" />
      </template>
    </DiaryHeader>
  </div>
</template>

<script>
import DiaryHeader from "../components/DiaryHeader.vue";
import DiaryButton from "../components/DiaryButton.vue";
export default {
  components: {
    DiaryHeader,
    DiaryButton,
  },
};
</script>

<style lang="scss" scoped>
</style>