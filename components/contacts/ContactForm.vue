<template>
  <v-form>
    <v-text-field v-model="value.last_name" label="Фамилия"/>
    <v-text-field v-model="value.first_name" label="Имя"/>
    <v-text-field v-model="value.middle_name" label="Отчество"/>
    <v-text-field v-model="value.phone" label="Номер телефона"/>
    <v-text-field v-model="value.organization" label="Организация"/>
    <v-text-field v-model="value.position" label="Должность"/>
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ContactForm",
  mixins: [resourceForm],
}
</script>

<style scoped>

</style>
