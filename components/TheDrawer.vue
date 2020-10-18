<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      dense
    >
      <div v-for="category in categories" :key="category.title">
        <v-list dense nav>
          <v-subheader>{{ category.title }}</v-subheader>
          <v-list-item v-for="(item, key) in category.items" :key="key" :to="item.to">
            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t('menu.' + key) }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider/>
      </div>
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
    categories: [
      {
        title: 'Администирование',
        items: {
          contracts: {
            icon: 'mdi-file-document-edit',
            to: {
              name: 'contracts',
            }
          },
          applications: {
            icon: 'mdi-card-text',
            to: {
              name: 'applications',
            }
          },
          contacts: {
            icon: 'mdi-card-account-details',
            to: {
              name: 'contacts',
            }
          },
        },
      },
      {
        title: 'Ресурсы',
        items: {
          cargos: {
            icon: 'mdi-package-variant-closed',
            to: {
              name: 'cargos',
            }
          },
          drivers: {
            icon: 'mdi-account',
            to: {
              name: 'drivers',
            }
          },
          cars: {
            icon: 'mdi-truck-fast',
            to: {
              name: 'cars',
            }
          }
        }
      }
    ]
  }),
}
</script>

<style scoped>

</style>
