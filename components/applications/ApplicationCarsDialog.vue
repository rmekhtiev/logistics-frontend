<template>
  <dialog-card
    title="Прикрепление транспортного средства к заявке"
    :actions="actions"
    :handle="handleClick"
  >
    <application-cars-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ApplicationCarsForm from "@/components/applications/ApplicationCarsForm";

export default {
  name: "ApplicationCarsDialog",
  components: {ApplicationCarsForm},
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
