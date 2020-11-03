<template>
  <div>
    {{ items }}
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
    headers: [
      {text: 'Номер', value: 'id'},
      {text: 'Дата заключения', value: 'attributes.conclusion_date'},
      {text: 'Стоимость', value: 'attributes.cost'},
      {text: 'Оплата', value: 'attributes.payment_type'},
    ],
  }),
  computed: {
    items() {
      return this.$store.getters['contracts/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    openContractPage(id) {
      this.$router.push({name: 'contracts-id', params: {id}})
    },
    loadItems() {
      return this.$store.dispatch('contracts/loadAll');
    }
  }
}
</script>

<style scoped>

</style>
