<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="overline">
            Пользователи
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
          >
            <template v-slot:item.actions="{ item }" v-slot:>
              <v-icon
                small
                class="mr-2"
                @click="updateClient(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                color="red"
                @click="deleteUser(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-btn
      color="primary"
      fixed
      bottom
      right
      dark
      fab
      @click="openCreateDialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>

import resource from "@/mixins/resource";
import UserDialog from "@/components/users/UserDialog";

export default {
  name: "index",
  data: () => ({
    resource: "cargos",
    headers: [
      {text: 'email', value: 'attributes.email'},
      {text: 'Дата регистрации', value: 'attributes.registered_on'},
      {text: 'Действия', value: 'actions'},
    ],
  }),
  mixins: [resource],
  methods: {
    async openCreateDialog() {
      const dialog = await this.$dialog.showAndWait(UserDialog, {
        persistent: true,
      });
      if (dialog !== false) {
        let form = dialog.attributes
        await this.$axios.post('/users', form)
        this.loadItems();
      }
    },
    async updateClient(user) {
      const dialog = await this.$dialog.showAndWait(UserDialog, {
        final: user,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/users/' + user.id, form);
        this.loadItems();
      }
    },
    async deleteUser(user) {
      await this.$axios.delete('/cargos/' + user.id);
      this.loadItems();
    },
  }
}
</script>
