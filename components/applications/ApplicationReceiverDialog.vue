<template>
  <dialog-card
    title="Создание заявки"
    :actions="actions"
    :handle="handleClick"
  >
    <application-receiver-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import ApplicationReceiverForm from "@/components/applications/ApplicationReceiverForm";
import resourceDialog from "@/mixins/resourceDialog";

export default {
  name: "ApplicationReceiverDialog",
  components: {ApplicationReceiverForm},
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
