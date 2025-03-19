<template>
  <div class="project">
    <h1 class="text-grey text-h6">Project</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-title>{{ project.title }}</v-expansion-panel-title>
          <v-expansion-panel-text>
          <v-card class="px-4 text-grey">
            <v-card-text>
              <div class="font-weight-bold">due by {{project.due}}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default({
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
          person: "Ryu",
          due: "15th Feb 2026",
          status: "Completed",
          content: "Building a cross-platform mobile app using React Native."
        },
        {
          title: "Upgrade backend API",
          person: "Chun Li",
          due: "10th Mar 2026",
          status: "Overdue",
          content: "Migrating API from Node.js to a more scalable solution."
        },
        {
          title: "Create marketing plan",
          person: "Yoshi",
          due: "20th Apr 2026", 
          status: "Completed",
          content: "Developing a strategic marketing plan for product launch."
        },
        {
          title: "Fix UI bugs",
          person: "Gouken",
          due: "5th May 2026",
          status: "Ongoing",
          content: "Resolving UI issues and improving UX design."
        }
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja'
      })
    }
  }
});
</script>
