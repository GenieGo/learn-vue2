<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <!-- <v-app-bar app>
    </v-app-bar> -->
    <DiaryHeader :title="'header'" />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import DiaryHeader from "./components/DiaryHeader.vue";
export default {
  name: "App",

  components: {
    DiaryHeader,
  },

  data: () => ({
    //
  }),
};
</script>
