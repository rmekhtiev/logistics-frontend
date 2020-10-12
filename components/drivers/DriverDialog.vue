<template>
  <dialog-card
    title="Создание контрагента"
    :actions="actions"
    :handle="handleClick"
  >
    <driver-form />
  </dialog-card>
</template>

<script>

import resourceDialog from '../../../logistics-frontend/mixins/resourceDialog'
import DriverForm from "@/components/drivers/DriverForm";

export default {
  name: "DriverDialog",
  components: {DriverForm},
  mixins: [resourceDialog],
}
</script>

<style scoped>

</style>
