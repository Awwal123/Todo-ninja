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
        <v-form ref="form" v-model="isFormValid">
          <!-- Project Title with Validation -->
          <v-text-field
            label="Project Title"
            v-model="projectTitle"
            prepend-icon="mdi-format-title"
            :rules="titleRules"
            required
          ></v-text-field>

          <!-- Project Description with Validation -->
          <v-textarea
            label="Project Description"
            v-model="projectDescription"
            prepend-icon="mdi-note-text"
            :rules="descriptionRules"
            required
          ></v-textarea>

          <!-- Date Picker with Validation -->
          <v-menu
            v-model="dateMenu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ props }">
              <v-text-field
                v-model="formattedDate"
                label="Select Due Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="props"
                :rules="dateRules"
                required
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="projectDueDate"
              @update:modelValue="dateMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="dialog = false">Cancel</v-btn>
        <v-btn color="text-white" class="bg-success" @click="validateAndSave">
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
      isFormValid: false,
      projectTitle: "",
      projectDescription: "",
      projectDueDate: null,
      dateMenu: false,

      // Validation Rules
      titleRules: [
        (v) => !!v || "Project title is required",
        (v) => (v && v.length >= 3) || "Title must be at least 3 characters",
      ],
      descriptionRules: [
        (v) => !!v || "Project description is required",
        (v) =>
          (v && v.length >= 10) ||
          "Description must be at least 10 characters",
      ],
      dateRules: [(v) => !!v || "Please select a due date"],
    };
  },
  computed: {
    formattedDate() {
      return this.projectDueDate
        ? new Date(this.projectDueDate).toLocaleDateString("en-GB") // Format: DD/MM/YYYY
        : "";
    },
  },
  methods: {
    validateAndSave() {
      // Trigger form validation
      if (this.$refs.form.validate()) {
        console.log("Project saved:", {
          title: this.projectTitle,
          description: this.projectDescription,
          dueDate: this.projectDueDate,
        });
        this.dialog = false; // Only close if validation passes
        // Inside saveProject() method in Popup.vue
this.$emit("project-added"); // Emit event to trigger snackbar

      } else {
        console.log("Form validation failed! Please complete all fields.");
      }
    },

  },
};
</script>
