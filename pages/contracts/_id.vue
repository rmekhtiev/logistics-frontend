<template>
  <div id="contract" v-if="item">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <contract-info-card class="mb-2" :contract="item"/>
        <contract-application-info-card class="mb-2" :contract="item"/>
      </v-col>
      <v-col sm="12" md="6" lg="4">
        <contract-client-info-card class="mb-2" :contract="item"/>
        <contract-requisites-info-card class="mb-2" :contract="item"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContractInfoCard from "~/components/contracts/ContractInfoCard";
import resourceInstance from "@/mixins/resourceInstance";
import ContractPaymentInfoCard from "@/components/contracts/ContractPaymentInfoCard";
import ContractRequisitesInfoCard from "@/components/contracts/ContractRequisitesInfoCard";
import ContractApplicationInfoCard from "@/components/contracts/ContractApplicationInfoCard";
import ContractClientInfoCard from "@/components/contracts/ContractClientInfoCard";

export default {
  name: "_id",
  components: {
    ContractClientInfoCard,
    ContractApplicationInfoCard, ContractRequisitesInfoCard, ContractPaymentInfoCard, ContractInfoCard},
  data: () => ({
    resource: 'contracts'
  }),
  mixins: [resourceInstance]
}
</script>

<style scoped>

</style>
