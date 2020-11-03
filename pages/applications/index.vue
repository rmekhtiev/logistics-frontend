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
            @click:row="(_e, { item }) => openApplicationPage(item.id)"
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

export default {
  name: "index",
  data: () => ({
    headers: [
      {text: 'Номер', value: 'id'},
      {text: 'Наименование', value: 'attributes.name'},
      {text: 'Дата составления', value: 'attributes.conclusion_date'},
    ],
  }),
  computed: {
    items() {
      return this.$store.getters['applications/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    openApplicationPage(id) {
      this.$router.push({name: 'applications-id', params: {id}})
    },
    async openCreateDialog() {
      const res = await this.$dialog.showAndWait(ApplicationDialog, {
        persistent: true,
      });
    },
    loadItems() {
      return this.$store.dispatch('applications/loadAll');
    }

  }
}
</script>

<style scoped>

</style>
