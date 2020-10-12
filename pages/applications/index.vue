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
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
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
          name: "Доставка железа",
          conclusion_date: '24.04.2020'
        }
      }
    ],
    headers: [
      {text: 'Номер', value: 'id'},
      {text: 'Наименование', value: 'attributes.name'},
      {text: 'Дата составления', value: 'attributes.conclusion_date'},
    ],
  }),
  methods: {
    openApplicationPage(id) {
      this.$router.push({name: 'applications-id', params: {id}})
    },
  }
}
</script>

<style scoped>

</style>
