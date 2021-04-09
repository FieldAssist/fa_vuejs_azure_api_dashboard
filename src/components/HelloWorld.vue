<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="mb-2" cols="6">
        <h1 class="headline-6 font-weight-bold ">
          Sprint Changelog Generator
        </h1>
        <div class="text-overline text-start mt-4">Azure PAT</div>
        <v-text-field
          v-model="token"
          hide-details
          outlined
          placeholder="Enter token here"
        ></v-text-field>
        <div class="text-overline text-start mt-4">Iteration Path(s)</div>
        <v-text-field v-for="(iteration) in iterationPaths" :key="iteration"
                      v-model="iteration.path"
                      class="mb-4"
                      hide-details
                      outlined
                      placeholder="Sample Path"
        ></v-text-field>
        <v-btn color="primary" v-on:click="addIterationPath">+ ADD</v-btn>
        <div class="mt-8">
          <v-btn v-if="!loading" color="green" dark v-on:click="generate">GENERATE SPRINT NOTES
          </v-btn>
          <v-progress-circular v-else color="primary" indeterminate width="2"/>
        </div>

      </v-col>
      <v-col class="mb-2" cols="6">
        <h1 class="headline-6 font-weight-bold ">
          Preview
        </h1>

        <v-container class="blue-grey lighten-5 my-8 ">
          <div v-if="!content" class="py-16">Add details on the left to generate notes</div>
          <div v-if="content" class="py-2" style="text-align: start;  word-wrap: break-word;white-space: pre-wrap ;word-break: break-word;">{{ content }}</div>
        </v-container>

      </v-col>
    </v-row>


  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import { runApp } from "test-azure-devops-api/dist/event";

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
    loading: false,
    token: '---',
    content: '',
    org: 'flick2know',
    iterationPaths: [{
      id: 1,
      path: "Field_Assist\\FA Team 2\\Sprint 118 T2"
    }],
  }),
  methods: {
    addIterationPath() {
      this.iterationPaths.push({ id: Date.now(), path: "Sample/Path" })
    },
    async generate() {

      if (!this.token || !this.org || this.iterationPaths.length == 0) {
        console.error("token,org,iteration cannot be null/empty!");
        return;
      }
      this.loading = true;
      const orgUrl = `https://dev.azure.com/${ this.org }`
      const paths = this.iterationPaths.map(value => value.path);
      console.log(orgUrl);
      console.log(paths);
      this.content = await runApp(orgUrl, this.token, paths);
      console.log(this.content);
      this.loading = false;
    }
  }
})
</script>
