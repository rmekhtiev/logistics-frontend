<template>
  <dialog-card
    title="Прикрепление реквизитов к договору"
    :actions="actions"
    :handle="handleClick"
  >
    <contract-requisites-form v-model="editedValue.attributes" :final="final.attributes" :axios="axios"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ContractRequisitesForm from "@/components/contracts/ContractRequisitesForm";

export default {
  name: "ContractRequisitesDialog",
  components: {ContractRequisitesForm},
  mixins: [resourceDialog],
  props: {
    axios: {
      required: true
    }
  },
}
</script>

<style scoped>

</style>
