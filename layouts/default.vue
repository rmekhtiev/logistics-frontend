<template>
  <v-app id="inspire">
   <the-drawer />

    <v-main style="background-color: rgb(248, 250, 254);">
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import TheDrawer from "@/components/TheDrawer";
export default {
  components: {TheDrawer},
}
</script>
