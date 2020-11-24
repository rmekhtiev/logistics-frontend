<template>
  <dialog-card
    title="Прикрепление пути к заявке"
    :actions="actions"
    :handle="handleClick"
  >
    <application-route-form v-model="editedValue.attributes" :final="final.attributes" :axios="axios"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ApplicationRouteForm from "@/components/applications/ApplicationRouteForm";

export default {
  name: "ApplicationRouteDialog",
  components: {ApplicationRouteForm},
  props: {
    axios: {
      required: true
    }
  },
  mixins: [resourceDialog],
}
</script>

<style scoped>

</style>
