<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="overline">
            Заявки
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

import ApplicationDialog from "@/components/applications/ApplicationDialog";
import resource from "@/mixins/resource";

export default {
  name: "index",
  data: () => ({
    resource: "applications",
    headers: [
      {text: 'Номер', value: 'id'},
      {text: 'Наименование', value: 'attributes.name'},
      {text: 'Дата составления', value: 'attributes.conclusion_date'},
    ],
  }),
  mixins: [resource],
  methods: {
    async openCreateDialog() {
      const dialog = await this.$dialog.showAndWait(ApplicationDialog, {
        persistent: true,
      });
      if (dialog !== false) {
        let form = dialog.attributes
        await this.$axios.post('/applications', form)
        this.loadItems();
      }
    },

  }
}
</script>

<style scoped>

</style>
