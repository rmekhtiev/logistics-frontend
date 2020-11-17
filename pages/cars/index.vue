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
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="updateCar(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                color="red"
                @click="deleteCar(item)"
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
import resource from "@/mixins/resource";

export default {
  name: "index",
  data: () => ({
    resource: "cars",
    headers: [
      {text: 'Модель', value: 'attributes.model'},
      {text: 'Вес, кг', value: 'attributes.weight'},
      {text: 'Грузоподъемность, кг', value: 'attributes.volume'},
      {text: 'Категория', value: 'attributes.category'},
      {text: 'Действия', value: 'actions'},
    ],
  }),
  mixins: [resource],
  methods: {
    async openCreateDialog() {
      const dialog = await this.$dialog.showAndWait(CarDialog, {
        persistent: true,
      });
      if (dialog !== false) {
        let form = dialog.attributes
        await this.$axios.post('/cars', form)
        this.loadItems();
      }
    },
    async updateCar(car) {
      const dialog = await this.$dialog.showAndWait(CarDialog, {
        final: car,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/cars/' + car.id, form);
        this.loadItems();
      }
    },
    async deleteCar(car) {
      await this.$axios.delete('/cars/' + car.id);
      this.loadItems();
    },
  }
}
</script>

<style scoped>

</style>
