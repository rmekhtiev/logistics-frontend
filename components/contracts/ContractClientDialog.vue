<template>
  <dialog-card
    title="Прикрепление клиента к договору"
    :actions="actions"
    :handle="handleClick"
  >
    <contract-client-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ContractClientForm from "@/components/contracts/ContractClientForm";

export default {
  name: "ContractClientDialog",
  components: {ContractClientForm},
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
