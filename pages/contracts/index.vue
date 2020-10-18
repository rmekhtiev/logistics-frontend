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
            @click:row="(_e, { item }) => openContractPage(item.id)"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "index",
  data: () => ({
    items: [
      {
        id: 1,
        attributes: {
          conclusion_date: "20.04.2012",
          cost: "2000",
          payment_type: "Наличные",
        }
      },
    ],
    headers: [
      {text: 'Номер', value: 'id'},
      {text: 'Дата заключения', value: 'attributes.conclusion_date'},
      {text: 'Стоимость', value: 'attributes.cost'},
      {text: 'Оплата', value: 'attributes.payment_type'},
    ],
  }),
  methods: {
    openContractPage(id) {
      this.$router.push({name: 'contracts-id', params: {id}})
    },
  }
}
</script>

<style scoped>

</style>
