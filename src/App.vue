<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation=0
      height="56"
    >
      <router-link to="/">
        <div class="text-h6 font-weight-regular white--text">Azure API Dashboard</div>
      </router-link>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="pb-16">
      <router-view/>
    </v-content>

    <v-footer fixed padless>
      <v-col
        class="text-center"
        cols="12"
      >
        ©{{ new Date().getFullYear() }} — Made with ❤️ by <strong>Ayush P Gupta, Bharat Narayani</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
});
</script>
