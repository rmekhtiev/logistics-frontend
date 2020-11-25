<template>
  <dialog-card
    title="Создание договора"
    :actions="actions"
    :handle="handleClick"
  >
    <contract-form :final="final.attributes" v-model="editedValue.attributes"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ContractForm from "@/components/contracts/ContractForm";

export default {
  name: "ContractDialog",
  components: {ContractForm},
  mixins: [resourceDialog],
}
</script>

<style scoped>

</style>
