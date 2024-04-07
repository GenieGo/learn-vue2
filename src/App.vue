<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
import DiaryHeader from "./components/DiaryHeader.vue";
import DiaryButton from "./components/DiaryButton.vue";
export default {
  name: "App",

  components: {
    DiaryHeader,
    DiaryButton,
  },

  data: () => ({
    //
  }),
};
</script>
