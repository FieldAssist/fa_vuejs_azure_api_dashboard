<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation=0
      height="56"
    >
     <v-app-bar-title>Azure API Dashboard</v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
    <v-footer padless >
      <v-col
        class="text-center"
        cols="12"
      >
        ©{{ new Date().getFullYear() }} — <strong>Ayush P Gupta, Bharat Narayani</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>
