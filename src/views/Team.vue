<template>
  <div class="team">
    <h1 class="text-grey text-h6">Team</h1>

    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat>
            <v-responsive class="pt-4"></v-responsive>
            <v-card-text class="d-flex justify-center flex-column align-center">
              <div class="subheading">{{ person.name }}</div>
              <div class="text-grey">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="mt-auto align-self-start">
              <v-btn flat color="grey">
                <v-icon size="small" left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

// Components


export default ({
  data() {
    return {
      team: [
        {name:"The Net Ninja", role: "Web Designer"},
        {name:"Ryu", role: "Mobile Developer"},
        {name:"Chun Li", role: "Backend Developer"},
        {name:"Yoshi", role: "Sales Guru"},
        {name:"Gouken", role: "Sanior Dev"},
      ]
    }
  }
});
</script>
