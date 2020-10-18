<template>
  <dialog-card
    title="Создание транспортного средства"
    :actions="actions"
    :handle="handleClick"
  >
    <car-form/>
  </dialog-card>
</template>

<script>

import resourceDialog from '../../../logistics-frontend/mixins/resourceDialog'
import ContactForm from "~/components/contacts/ContactForm";
import CarForm from "~/components/cars/CarForm";

export default {
  name: "CarDialog",
  components: {CarForm, ContactForm},
  mixins: [resourceDialog],
}
</script>

<style scoped>

</style>
