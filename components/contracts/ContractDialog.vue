<template>
  <dialog-card
    title="Создание заявки"
    :actions="actions"
    :handle="handleClick"
  >
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ApplicationForm from "@/components/applications/ApplicationForm";

export default {
  name: "ContractDialog",
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
