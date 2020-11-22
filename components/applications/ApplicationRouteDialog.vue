<template>
  <dialog-card
    title="Прикрепление пути к заявке"
    :actions="actions"
    :handle="handleClick"
  >
    <application-route-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ApplicationRouteForm from "@/components/applications/ApplicationRouteForm";

export default {
  name: "ApplicationRouteDialog",
  components: {ApplicationRouteForm},
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
