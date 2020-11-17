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
  computed: {
    items() {
      return this.$store.getters['contacts/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  data: () => ({
    headers: [
      {text: 'ФИО', value: 'attributes.name'},
      {text: 'Организация', value: 'attributes.organization'},
      {text: 'Должность', value: 'attributes.position'},
      {text: 'Моб.телефон', value: 'attributes.phone'},
    ],
  }),
  methods: {
    loadItems() {
      return this.$store.dispatch('contacts/loadAll');
    },
    openContactPage(id) {
      this.$router.push({name: 'contacts-id', params: {id}})
    },
    async openCreateDialog() {
      const res = await this.$dialog.showAndWait(ContactDialog, {
        persistent: true,
      });
      if (res !== false) {
        let form = res.attributes
        await this.$axios.post('/contacts', form)
        this.loadItems();
      }
    }
  }
}
</script>

<style scoped>

</style>
