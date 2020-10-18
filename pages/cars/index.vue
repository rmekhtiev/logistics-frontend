<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="overline">
            Транспортные средства
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
          >
            <template v-slot:item.actions>
              <v-icon
                small
                class="mr-2"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                color="red"
              >
                mdi-delete
              </v-icon>
            </template>
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


import CarDialog from "~/components/cars/CarDialog";

export default {
  name: "index",
  data: () => ({
    items: [
      {
        id: 1,
        attributes: {
          model: "Хендай Солярис",
          weight: "700",
          volume: "700",
          category: "A",
        }
      }
    ],
    headers: [
      {text: 'Модель', value: 'attributes.model'},
      {text: 'Вес, кг', value: 'attributes.weight'},
      {text: 'Грузоподъемность, кг', value: 'attributes.volume'},
      {text: 'Категория', value: 'attributes.category'},
    ],
  }),
  methods: {
    async openCreateDialog() {
      const res = await this.$dialog.showAndWait(CarDialog, {
        persistent: true,
      });
    }
  }
}
</script>

<style scoped>

</style>
