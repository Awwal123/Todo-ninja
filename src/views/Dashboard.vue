<template>
  <div class="dashboard">
    <h1 class="text-grey text-h6">Dashboard</h1>
    <v-container class="my-5">
      <v-card v-for="(project, index) in projects" :key="index" flat class="pa-3 mb-1">
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
          <v-col cols="12" sm="4" md="2">
            <div class="caption text-grey">Status</div>
            <div>{{ project.status }}</div>
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
        { title: "Design a new website", person: "The Net Ninja", due: "1st Jan 2026", status: "Ongoing" },
        { title: "Develop a mobile app", person: "Jane Doe", due: "15th Feb 2026", status: "Completed" },
        { title: "Upgrade backend API", person: "John Smith", due: "10th Mar 2026", status: "Overdue" },
        { title: "Create marketing plan", person: "Alice Brown", due: "20th Apr 2026", status: "Completed" },
        // { title: "Fix UI bugs", person: "Bob Williams", due: "5th May 2026", status: "Ongoing" }
      ]
    };
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
</style>
