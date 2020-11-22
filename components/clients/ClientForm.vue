<template>
  <v-form>
    <v-text-field label="Фамилия" v-model="value.last_name"/>
    <v-text-field label="Имя" v-model="value.first_name"/>
    <v-text-field label="Отчество" v-model="value.middle_name"/>
    <v-text-field label="Номер телефона" v-model="value.phone"/>
    <v-text-field label="Email" v-model="value.email"/>
    <v-text-field label="Серия паспорта" v-model="value.passport_series"/>
    <v-text-field label="Номер паспорта" v-model="value.passport_number"/>
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ClientForm",
  mixins: [resourceForm],
}
</script>

<style scoped>

</style>
