<template>
  <dialog-card
    title="Создание заявки"
    :actions="actions"
    :handle="handleClick"
  >
    <application-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import ApplicationForm from "@/components/applications/ApplicationForm";

export default {
  name: "ApplicationDialog",
  components: {ApplicationForm},
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
