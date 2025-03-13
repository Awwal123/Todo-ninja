<template>
  <nav>
    <v-toolbar>
      <v-app-bar-nav-icon
        class="text-grey"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase text-grey">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right class="ml-2">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" temporary color="primary">
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          :to="link.route"
          link
          router
          :prepend-icon="link.icon"
         
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,

      links: [
        {icon: "mdi-home", text:  "Dashboard", route: "/" },
        {icon: "mdi-folder", text:  "My Project", route: "/projects" },
        {icon: "mdi-account", text:  "Team", route: "/team" }
      ]
    }
  }
}
</script>
