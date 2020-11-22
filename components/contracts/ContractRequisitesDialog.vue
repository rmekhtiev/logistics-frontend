<template>
  <dialog-card
    title="Прикрепление реквизитов к договору"
    :actions="actions"
    :handle="handleClick"
  >
    <contract-requisites-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ContractRequisitesForm from "@/components/contracts/ContractRequisitesForm";

export default {
  name: "ContractRequisitesDialog",
  components: {ContractRequisitesForm},
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
