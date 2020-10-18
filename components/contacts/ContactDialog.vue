<template>
  <dialog-card
    title="Создание контактного лица"
    :actions="actions"
    :handle="handleClick"
  >
    <contact-form />
  </dialog-card>
</template>

<script>

import resourceDialog from '../../../logistics-frontend/mixins/resourceDialog'
import ContactForm from "~/components/contacts/ContactForm";

export default {
  name: "ContactDialog",
  components: {ContactForm},
  mixins: [resourceDialog],
}
</script>

<style scoped>

</style>
