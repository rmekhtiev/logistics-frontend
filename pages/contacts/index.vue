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
            @click:row="(_e, { item }) => openContactPage(item.id)"
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
export default {
  name: "index",
  components: {ContactDialog},
  data: () => ({
    items: [
      {
        id: 1,
        attributes: {
          name: "Курилович Петр Андреевич",
          organization: "ООО Мобильные решения",
          position: "Менеджер по продажам",
          phone: "89253073114"
        }
      }
    ],
    headers: [
      {text: 'ФИО', value: 'attributes.name'},
      {text: 'Организация', value: 'attributes.organization'},
      {text: 'Должность', value: 'attributes.position'},
      {text: 'Моб.телефон', value: 'attributes.phone'},
    ],
  }),
  methods: {
    openContactPage(id) {
      this.$router.push({name: 'contacts-id', params: {id}})
    },
    async openCreateDialog() {
      const res = await this.$dialog.showAndWait(ContactDialog, {
        persistent: true,
      });
    }
  }
}
</script>

<style scoped>

</style>
