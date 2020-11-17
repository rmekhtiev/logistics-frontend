<template>
  <dialog-card
    title="Прикрепление водителя к заявке"
    :actions="actions"
    :handle="handleClick"
  >
    <application-drivers-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ApplicationDriversForm from "@/components/applications/ApplicationDriversForm";

export default {
  name: "ApplicationDriversDialog",
  components: {ApplicationDriversForm},
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
