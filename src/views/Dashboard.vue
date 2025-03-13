<template>
  <div class="dashboard">
    <h1 class="text-grey text-h6">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat class="pa-3">
        <v-row>
          <v-col cols="12" md="6">
            <div class="caption text-grey">Project Title</div>
            <div>Create a new Project</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text-grey">Person</div>
            <div>The Net Ninja</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text-grey">Due by</div>
            <div>1st Jan 2025</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text-grey">Status</div>
            <div>Ongoing</div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components


export default defineComponent({
});
</script>
