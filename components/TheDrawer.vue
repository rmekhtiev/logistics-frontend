<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <template v-for="(item, key) in items">
          <v-list-item :key="key" :to="item.to">
            <v-list-item-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ key }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Logistics</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TheDrawer",
  data: () => ({
    drawer: null,
    items: {
      drivers: {
        icon: 'mdi-account',
        to: {
          name: 'drivers',
        }
      },
      applications: {
        icon: 'mdi-card-text',
        to: {
          name: 'applications',
        }
      },
      cargos: {
        icon: 'mdi-package-variant-closed',
        to: {
          name: 'cargos',
        }
      }
    }
  }),
}
</script>

<style scoped>

</style>
