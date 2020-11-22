<template>
  <div id="contract">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <contract-info-card :contract="item"/>
        <contract-payment-info-card :contract="item"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContractInfoCard from "~/components/contracts/ContractInfoCard";
import resourceInstance from "@/mixins/resourceInstance";
import ContractPaymentInfoCard from "@/components/contracts/ContractPaymentInfoCard";

export default {
  name: "_id",
  components: {ContractPaymentInfoCard, ContractInfoCard},
  data: () => ({
    resource: 'contracts'
  }),
  mixins: [resourceInstance]
}
</script>

<style scoped>

</style>
