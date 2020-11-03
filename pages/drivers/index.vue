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
            @click:row="(_e, { item }) => openDriverPage(item.id)"
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

export default {
  name: "index",
  data: () => ({
    headers: [
      {text: 'ФИО', value: 'attributes.first_name'},
      {text: 'Категории прав', value: 'attributes.categories'},
    ],
  }),
  computed: {
    items() {
      return this.$store.getters['drivers/all'];
    }
  },
  mounted() {
    this.loadItems();
  },

  methods: {
    openDriverPage(id) {
      this.$router.push({name: 'drivers-id', params: {id}})
    },
    async openCreateDialog() {
      const res = await this.$dialog.showAndWait(DriverDialog, {
        persistent: true,
      });
      if (res !== false) {
        let form = res.attributes
        await this.$axios.post('/drivers', form)
        this.loadItems();
      }
    },
    loadItems() {
      return this.$store.dispatch('drivers/loadAll');
    }
  }
}
</script>

<style scoped>

</style>
