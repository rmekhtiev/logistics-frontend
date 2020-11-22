<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="overline">
            Клиенты
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
            @click:row="(_e, { item }) => openResourceInstancePage(item.id)"
          >
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
import ClientDialog from "@/components/clients/ClientDialog";

export default {
  name: "index",
  data: () => ({
    resource: "clients",
    headers: [
      {text: 'ФИО', value: 'attributes.name'},
      {text: 'Телефон', value: 'attributes.phone'},
    ],
  }),
  mixins: [resource],

  methods: {
    async openCreateDialog() {
      const dialog = await this.$dialog.showAndWait(ClientDialog, {
        persistent: true,
      });
      if (dialog !== false) {
        let form = dialog.attributes
        await this.$axios.post('/clients', form)
        this.loadItems();
      }
    },
  }
}
</script>

<style scoped>

</style>
