<template>
  <v-container class="py-8">
    <v-snackbar
      v-model="snackbar"
    >
      {{ snackBarMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn
          v-bind="attrs"
          color="yellow"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row class="text-center" justify="center">
      <v-col class="mb-2" cols="6">
        <h1 class="headline-6 font-weight-bold ">
          👑 Epic Notes Generator & Publisher
        </h1>
        <div v-if="!loading">
          <div class="text-overline text-start mt-4">Azure PAT</div>
          <v-text-field
            v-model="azToken"
            hint="Generate token here: https://dev.azure.com/flick2know/_usersSettings/tokens"
            outlined
            persistent-hint
            placeholder="Enter token here"
            type="password"
          ></v-text-field>
          <div class="text-overline text-start mt-4">Github PAT</div>
          <v-text-field
            v-model="ghToken"
            hint="Github Personal Access Token"
            outlined
            persistent-hint
            placeholder="Enter token here"
            type="password"
          ></v-text-field>
          <div class="text-overline text-start mt-4">Epic ID</div>
          <v-text-field
            v-model="epicId"
            hint="The id of Epic"
            outlined
            persistent-hint
            placeholder="Enter Epic Id here"
          ></v-text-field>
        </div>
        <div class="mt-8">
          <div v-if="error" class="red--text my-4">{{ error }}</div>
          <v-btn v-if="!loading" color="green" dark v-on:click="generate">PUBLISH EPIC DOCS
          </v-btn>
          <v-progress-circular v-else color="primary" indeterminate width="2"/>

          <div v-if="!loading" class="red--text pt-4">
            Please note this action is irreversible and can lead to unintentional consequences. You should use only if
            you know what you are doing.
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

const axios = require('axios');


export default Vue.extend({
  name: 'Epic',
  components: {},
  data: () => ({
    snackbar: false,
    loading: false,
    error: '',
    message: '',
    azToken: '',
    ghToken: '',
    epicId: '',
  }),
  computed: {
    snackBarMsg: function () {
      return this.error != '' ? this.error : this.message;
    }
  },
  methods: {
    async generate() {
      try {
        this.error = '';
        this.message = '';
        if (!this.azToken || !this.ghToken || !this.epicId) {
          throw "azToken, ghToken, epicId cannot be null/empty!";
        }
        this.loading = true;
        const config = {
          method: 'get',
          url: `https://fa-azure-devops-api.azurewebsites.net/generator/epic?ghToken=${ this.ghToken }&epicId=${ this.epicId }&azToken=${ this.azToken }`,
          headers: {}
        };

        const response = await axios(config);
        this.epicId = "";
        console.log(response);
        this.message = 'The epic has been updated in docs. Please check after some time.';
      } catch (e) {
        console.error(e);
        this.error = e?.toString();
      } finally {
        this.loading = false;
        this.snackbar = true;
      }
    },
  }
})
</script>
