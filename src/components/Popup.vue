<template>
  <v-dialog v-model="dialog" max-width="600px">
    <!-- Activator Button -->
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="bg-success text-white">
        Add new project
      </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>

      <v-card-text>
        <!-- Project Title with Icon -->
        <v-text-field
          label="Project Title"
          v-model="projectTitle"
          prepend-icon="mdi-format-title"
        ></v-text-field>

        <!-- Project Description with Icon -->
        <v-textarea
          label="Project Description"
          v-model="projectDescription"
          prepend-icon="mdi-note-text"
        ></v-textarea>

        <!-- Date Picker Input with Fixed Menu Issue -->
        <v-menu
          v-model="dateMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="projectDueDate"
              label="Select Due Date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="projectDueDate"
            @update:model-value="dateMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="dialog = false">Cancel</v-btn>
        <v-btn color="text-white" class="bg-success" @click="saveProject">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      projectTitle: "",
      projectDescription: "",
      projectDueDate: "",
      dateMenu: false, // Ensures the menu opens and closes correctly
    };
  },
  methods: {
    saveProject() {
      console.log("Project saved:", {
        title: this.projectTitle,
        description: this.projectDescription,
        dueDate: this.projectDueDate,
      });
      this.dialog = false; // Close dialog after saving
    },
  },
};
</script>
