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
            <template v-slot:item.actions="{ item }" v-slot:>
              <v-icon
                small
                class="mr-2"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                color="red"
                @click="deleteCargo(item)"
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

import CargoDialog from "@/components/cargos/CargoDialog";

export default {
  name: "index",
  data: () => ({
    headers: [
      {text: 'Номенаклатура', value: 'attributes.nomenclature'},
      {text: 'Вес, кг', value: 'attributes.weight'},
      {text: 'Действия', value: 'actions'},
    ],
  }),
  computed: {
    items() {
      return this.$store.getters['cargos/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    async openCreateDialog() {
      const res = await this.$dialog.showAndWait(CargoDialog, {
        persistent: true,
      });
      if (res !== false) {
        let form = res.attributes
        await this.$axios.post('/cargos', form)
        this.loadItems();
      }
    },
    async deleteCargo(cargo) {
      await this.$axios.delete('/cargos/' + cargo.id);
      this.loadItems();
    },
    loadItems() {
      return this.$store.dispatch('cargos/loadAll');
    }
  }
}
</script>

<style scoped>

</style>
