<template>
  <dialog-card
    title="Прикрепление заявки к договору"
    :actions="actions"
    :handle="handleClick"
  >
    <contract-application-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ContractApplicationForm from "@/components/contracts/ContractApplicationForm";

export default {
  name: "ContractApplicationDialog",
  components: {ContractApplicationForm},
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
