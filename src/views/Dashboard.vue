<template>
  <div class="dashboard">
    <h1 class="text-grey text-h6">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3 ml-2 d-flex gap-2">
        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              flat
              size="small"
              color="grey lighten-1"
              class="mr-2"
              @click="sortBy('title')"
            >
              <v-icon class="mr-3">mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by title</span>
        </v-tooltip>

        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              flat
              size="small"
              color="grey lighten-1"
              @click="sortBy('person')"
            >
              <v-icon class="mr-3">mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person name</span>
        </v-tooltip>
      </v-row>

      <v-card
        v-for="(project, index) in projects"
        :key="index"
        flat
        class="pa-3 mb-1"
      >
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption text-grey">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text-grey">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text-grey">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2" class="text-right">
            <!-- <div class="right"> -->
            <v-chip
              size="small"
              :class="`my-2 caption text-white ${project.status}`"
            >
              {{ project.status }}
            </v-chip>
            <!-- </div> -->
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
      {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2026",
          status: "Ongoing",
          content: "Creating a modern, responsive website with Vue 3 and Vuetify."
        },
        {
          title: "Develop a mobile app",
          person: "Jane Doe",
          due: "15th Feb 2026",
          status: "Completed",
          content: "Building a cross-platform mobile app using React Native."
        },
        {
          title: "Upgrade backend API",
          person: "John Smith",
          due: "10th Mar 2026",
          status: "Overdue",
          content: "Migrating API from Node.js to a more scalable solution."
        },
        {
          title: "Create marketing plan",
          person: "Alice Brown",
          due: "20th Apr 2026",
          status: "Completed",
          content: "Developing a strategic marketing plan for product launch."
        },
        {
          title: "Fix UI bugs",
          person: "Bob Williams",
          due: "5th May 2026",
          status: "Ongoing",
          content: "Resolving UI issues and improving UX design."
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
};
</script>

<style>
.project.Completed {
  border-left: 4px solid #3cd1c2;
}
.project.Ongoing {
  border-left: 4px solid orange;
}
.project.Overdue {
  border-left: 4px solid tomato;
}
.v-chip.Completed {
  background-color:  #3cd1c2;

}
.v-chip.Ongoing {
  background-color:  #ffaa2c;
}
.v-chip.Overdue {
  background-color:  #f83e70;
}
</style>
