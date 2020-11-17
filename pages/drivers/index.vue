<template>
  <div>
    {{ drivers }}
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="overline">
            Водители
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
import DriverDialog from "@/components/drivers/DriverDialog";
import resource from "@/mixins/resource";

export default {
  name: "index",
  data: () => ({
    resource: "drivers",
    headers: [
      {text: 'ФИО', value: 'attributes.name'},
      {text: 'Категории прав', value: 'attributes.categories'},
    ],
  }),
  mixins: [resource],

  methods: {
    async openCreateDialog() {
      const dialog = await this.$dialog.showAndWait(DriverDialog, {
        persistent: true,
      });
      if (dialog !== false) {
        let form = dialog.attributes
        await this.$axios.post('/drivers', form)
        this.loadItems();
      }
    },
  }
}
</script>

<style scoped>

</style>
