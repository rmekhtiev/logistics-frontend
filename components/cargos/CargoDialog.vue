<template>
  <dialog-card
    title="Создание груза"
    :actions="actions"
    :handle="handleClick"
  >
    <cargo-form  v-model="editedValue.attributes"/>
  </dialog-card>
</template>

<script>

import resourceDialog from '../../../logistics-frontend/mixins/resourceDialog'
import CargoForm from "@/components/cargos/CargoForm";

export default {
  name: "CargoDialog",
  components: {CargoForm},
  mixins: [resourceDialog],
}
</script>

<style scoped>

</style>
