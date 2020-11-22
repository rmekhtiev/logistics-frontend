<template>
  <dialog-card
    title="Создание клиента"
    :actions="actions"
    :handle="handleClick"
  >
    <client-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import ClientForm from "@/components/clients/ClientForm";
import resourceDialog from "@/mixins/resourceDialog";

export default {
  name: "ClientDialog",
  components: {ClientForm},
  mixins: [resourceDialog],
}
</script>

<style scoped>

</style>
