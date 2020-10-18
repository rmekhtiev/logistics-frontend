<template>
  <div id="contract">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <contract-info-card :contract="contract" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContractInfoCard from "~/components/contracts/ContractInfoCard";
export default {
  name: "_id",
  components: {ContractInfoCard},
  data: () => ({
    contract:
      {
        id: 1,
        attributes: {
          conclusion_date: "20.04.2012",
          cost: "2000",
          payment_type: "Наличные",
        }
      },
  }),
}
</script>

<style scoped>

</style>
