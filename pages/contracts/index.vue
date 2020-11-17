<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="overline">
            Договоры
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
import ContractDialog from "@/components/contracts/ContractDialog";

export default {
  name: "index",
  data: () => ({
    resource: "contracts",
    headers: [
      {text: 'Номер', value: 'id'},
      {text: 'Дата заключения', value: 'attributes.conclusion_date'},
      {text: 'Стоимость', value: 'attributes.cost'},
      {text: 'Оплата', value: 'attributes.payment_type'},
    ],
  }),
  mixins: [resource],
  methods: {
    async openCreateDialog() {
      const dialog = await this.$dialog.showAndWait(ContractDialog, {
        persistent: true,
      });
      if (dialog !== false) {
        let form = dialog.attributes
        await this.$axios.post('/contracts', form)
        this.loadItems();
      }
    },
  }
}
</script>

<style scoped>

</style>
