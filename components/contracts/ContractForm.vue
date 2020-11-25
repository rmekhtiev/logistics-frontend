<template>
  <v-form>
    <v-text-field v-model="value.conclusion_date" label="Дата заключения"/>
    <v-text-field v-model="value.cost" label="Стоимость"/>
    <v-select v-model="value.payment_type" :items="paymentTypes" item-name="value" item-text="name" label="Способ оплаты">
    </v-select>
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ContractForm",
  mixins: [resourceForm],
  data: () => ({
    paymentTypes: [
      {
        value: 'cash',
        name: 'Наличные'
      },
      {
        value: 'card',
        name: 'Безналичные'
      },
    ]
  }),
}
</script>

<style scoped>

</style>
