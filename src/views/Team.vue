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
            <div class="pt-4 d-flex justify-center align-center">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </div>
            <v-card-text
              class="d-flex justify-center gap-4 flex-column align-center"
            >
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
      { name: "The Net Ninja", role: "Web Designer", avatar: "/images/avatar-1.png" },
      { name: "Ryu", role: "Mobile Developer", avatar: "/images/avatar-2.png" },
      { name: "Chun Li", role: "Backend Developer", avatar: "/images/avatar-3.png" },
      { name: "Yoshi", role: "Sales Guru", avatar: "/images/avatar-4.png" },
      { name: "Gouken", role: "Senior Dev", avatar: "/images/avatar-5.png" },

      ]
    }
  }
});
</script>
