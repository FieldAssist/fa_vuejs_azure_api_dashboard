<template>
  <v-container class="py-8">
    <v-row class="text-center" justify="center">
      <v-col class="mb-2" cols="6">
        <h1 class="headline-6 font-weight-bold">Sprint Notes Generator</h1>
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
          <div class="text-overline text-start mt-4">Iteration Path(s)</div>
          <v-text-field
            v-for="iteration in iterationPaths"
            :key="iteration.id"
            v-model="iteration.path"
            class="mb-4"
            hide-details
            outlined
            placeholder="Sample Path"
          ></v-text-field>
          <v-btn color="primary" v-on:click="addIterationPath">+ ADD</v-btn>
        </div>
        <div class="mt-8">
          <div v-if="error" class="red--text my-4">{{ error }}</div>
          <v-btn v-if="!loading" color="green" dark v-on:click="generate"
            >GENERATE SPRINT NOTES
          </v-btn>
          <v-progress-circular v-else color="primary" indeterminate width="2" />
        </div>
      </v-col>
      <v-col v-if="content" class="mb-2" cols="12">
        <h1 class="headline-6 font-weight-bold">Preview</h1>
        <v-md-editor
          v-model="content"
          class="my-4 text-start"
          default-fullscreen="true"
          height="600px"
          @copy-code-success="handleCopyCodeSuccess"
        ></v-md-editor>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

const axios = require("axios");

export default Vue.extend({
  name: "HelloWorld",
  components: {},
  data: () => ({
    loading: false,
    showParsed: false,
    error: "",
    azToken: "",
    content: "",
    org: "flick2know",
    iterationPaths: [
      {
        id: 1,
        path: "Field_Assist\\FA Team 2\\Sprint 118 T2",
      },
    ],
  }),
  methods: {
    addIterationPath() {
      this.iterationPaths.push({ id: Date.now(), path: "Sample/Path" });
    },
    async generate() {
      try {
        this.error = "";
        if (!this.azToken || !this.org || this.iterationPaths.length == 0) {
          throw "token,org,iteration cannot be null/empty!";
        }
        this.loading = true;
        const paths = this.iterationPaths.map((value) => value.path);
        const config = {
          method: "get",
          url: `https://fa-azure-devops-api.azurewebsites.net/generate?token=${
            this.azToken
          }&org=${this.org}&iterationPaths=${JSON.stringify(paths)}`,
          headers: {},
        };

        const response = await axios(config);
        this.content = response.data;
      } catch (e) {
        console.error(e);
        this.error = `${e.toString()}\n${e.response.data}`;
      } finally {
        this.loading = false;
      }
    },
    handleCopyCodeSuccess(code: any) {
      console.log(code);
    },
  },
});
</script>
