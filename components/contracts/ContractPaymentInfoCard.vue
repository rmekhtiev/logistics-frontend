<template>
  <v-card
    outlined
    v-if="contract"
  >
    <v-card-title>
      <div class="overline">
        Оплата
      </div>
      <v-spacer/>
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        icon
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-list>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ $t('paymentTypes.' + contract.attributes.payment_type) }}</v-list-item-title>
          <v-list-item-subtitle>Способ оплаты</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ contract.attributes.cost }}</v-list-item-title>
          <v-list-item-subtitle>Стоимость</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ContractPaymentInfoCard",
  props: {
    contract: {
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
