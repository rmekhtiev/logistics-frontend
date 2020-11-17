<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="overline">
            Контактные лица
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
import ContactDialog from "~/components/contacts/ContactDialog";
import resource from "@/mixins/resource";

export default {
  name: "index",
  components: {ContactDialog},
  data: () => ({
    resource: "contacts",
    headers: [
      {text: 'ФИО', value: 'attributes.name'},
      {text: 'Организация', value: 'attributes.organization'},
      {text: 'Должность', value: 'attributes.position'},
      {text: 'Моб.телефон', value: 'attributes.phone'},
    ],
  }),
  mixins: [resource],
  methods: {
    async openCreateDialog() {
      const dialog = await this.$dialog.showAndWait(ContactDialog, {
        persistent: true,
      });
      if (dialog !== false) {
        let form = dialog.attributes
        await this.$axios.post('/contacts', form)
        this.loadItems();
      }
    }
  }
}
</script>

<style scoped>

</style>
