<template>
    <v-dialog v-model="dialog" max-width="600px">
      <!-- Activator Button -->
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="bg-success text-white">Add new project</v-btn>
      </template>
  
      <!-- Dialog Content -->
      <v-card>
        <v-card-title>
          <h2>Add a New Project</h2>
        </v-card-title>
  
        <v-card-text>
          <v-text-field label="Project Title" v-model="projectTitle"></v-text-field>
          <v-textarea label="Project Description" v-model="projectDescription"></v-textarea>
        </v-card-text>
  
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="dialog = false">Cancel</v-btn>
          <v-btn color="text-white" class="bg-success" @click="saveProject">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false, // This was missing
        projectTitle: "",
        projectDescription: "",
      };
    },
    methods: {
      saveProject() {
        console.log("Project saved:", this.projectTitle, this.projectDescription);
        this.dialog = false; // Close dialog after saving
      },
    },
  };
  </script>
  