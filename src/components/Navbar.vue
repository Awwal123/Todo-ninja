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
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" flat color="grey">
            <v-icon left class="mx-2">mdi-menu-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right class="ml-2">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" temporary color="primary">
      <div class="d-flex flex-column align-center mt-5">
        <v-avatar size="100">
          <img src="/avatar-1.png" alt="avatar" />
        </v-avatar>
        <p class="text-white subheading mt-1">The Net Ninja</p>
        <div class="my-6">
          <Popup @project-added="showSnackbar" />
        </div>
      </div>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          :to="link.route"
          link
          extract
          router
          :prepend-icon="link.icon"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Snackbar -->
    <v-snackbar v-model="snackbar" timeout="3000" color="green" location="top">
      <span class="text-white">Project has been added successfully</span>
    </v-snackbar>
  </nav>
</template>

<script>
import Popup from './Popup.vue';

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      snackbar: false,
      links: [
        { icon: "mdi-home", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Project", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" }
      ],
      menuItems: ["Profile", "Settings", "Logout"],
    };
  },
  methods: {
    showSnackbar() {
      this.snackbar = true; // Show the snackbar
    }
  }
};
</script>
