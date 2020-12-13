<template>
  <dialog-card
    title="Создание водителя"
    :actions="actions"
    :handle="handleClick"
  >
    <driver-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>

import resourceDialog from '@/mixins/resourceDialog'
import DriverForm from "@/components/drivers/DriverForm";

export default {
  name: "DriverDialog",
  components: {DriverForm},
  mixins: [resourceDialog],
}
</script>

<style scoped>

</style>
