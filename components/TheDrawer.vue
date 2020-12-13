<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      dense
    >
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-avatar>
            <v-avatar
              color="primary"
              size="56"
            >
              <span class="white--text headline">{{ formatEmailToAvatar(me.email) }}</span>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-subtitle>{{ me.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
        <v-list dense>
          <v-list-item @click.prevent="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Выйти из аккаунта</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list-group>
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
import auth from "@/mixins/auth";

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
          clients: {
            icon: 'mdi-card-account-details-star',
            to: {
              name: 'clients',
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
      },
      {
        title: 'Управление',
        items: {
          users: {
            to: {
              name: 'users'
            }
          }
        }
      }
    ],
  }),
  mixins: [auth],

  methods: {
    logout() {
      return this.$auth.logout().then(() => {
        this.$router.push({
          name: "auth-login"
        });
      });
    }
  }
}
</script>

<style scoped>

</style>
