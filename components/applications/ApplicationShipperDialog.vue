<template>
  <dialog-card
    title="Создание заявки"
    :actions="actions"
    :handle="handleClick"
  >
    <application-shipper-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import ApplicationShipperForm from "@/components/applications/ApplicationShipperForm";
import resourceDialog from "@/mixins/resourceDialog";

export default {
  name: "ApplicationShipperDialog",
  components: {ApplicationShipperForm},
  mixins: [resourceDialog]

}
</script>

<style scoped>

</style>
