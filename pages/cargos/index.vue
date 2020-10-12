<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="overline">
            Грузы
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
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

import CargoDialog from "@/components/cargos/CargoDialog";

export default {
  name: "index",
  data: () => ({
    items: [
      {
        id: 1,
        attributes: {
          name: "Бревно",
          weight: "700",
        }
      }
    ],
    headers: [
      {text: 'Номенаклатура', value: 'attributes.name'},
      {text: 'Вес, кг', value: 'attributes.weight'},
    ],
  }),
  methods: {
    async openCreateDialog() {
      const res = await this.$dialog.showAndWait(CargoDialog, {
        persistent: true,
      });
    }
  }
}
</script>

<style scoped>

</style>
