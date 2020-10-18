<template>
  <v-form>
        <v-text-field label="Фамилия" />
        <v-text-field label="Имя" />
        <v-text-field label="Отчество" />
        <v-text-field label="Номер телефона" />
        <v-text-field label="Организация" />
        <v-text-field label="Должность" />
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ContactForm",
  mixins: [resourceForm],
  data: () => ({
  })
}
</script>

<style scoped>

</style>
