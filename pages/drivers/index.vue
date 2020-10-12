<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="overline">
            Водители
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
            @click:row="(_e, { item }) => openCounterpartyPage(item.id)"
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
    items: [
      {
        id: 1,
        attributes: {
          name: "Курилович Петр Андреевич",
          car: "Хендай Солярис 2011"
        }
      }
    ],
    headers: [
      {text: 'ФИО', value: 'attributes.name'},
      {text: 'Автомобиль', value: 'attributes.car'},
    ],
  }),
  methods: {
    openCounterpartyPage(id) {
      this.$router.push({name: 'drivers-id', params: {id}})
    },
    async openCreateDialog() {
      const res = await this.$dialog.showAndWait(DriverDialog, {
        persistent: true,
      });
    }
  }
}
</script>

<style scoped>

</style>
