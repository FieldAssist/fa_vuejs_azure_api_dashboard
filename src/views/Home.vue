<template>
  <v-container>
    <v-row class="text-center py-8" justify="center">
      <v-col cols="12">
        <img alt="FA logo" height="100px" src="../assets/logo.png">

        <div class="text-h4 py-4">
          Welcome to FA Azure API Dashboard
        </div>

      </v-col>

      <v-col class="text-start" cols="12" sm="4">
        <v-card>
          <v-container class="pt-4">
            <v-img contain height="120px" src="../assets/docs.png"></v-img>
          </v-container>
          <v-card-title>Sprint Changelog Generator</v-card-title>
          <v-card-subtitle>Generate sprint notes via iteration paths</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" text to="/generate/sprint">OPEN</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="text-start" cols="12" sm="4">
        <v-card>
          <v-container class="pt-4">
            <v-img contain height="120px" src="../assets/crowns.png"></v-img>
          </v-container>
          <v-card-title>Epic Notes Publish</v-card-title>
          <v-card-subtitle>Generate & Publish full notes of a particular Epic</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" text to="/publish/epic">OPEN</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>
