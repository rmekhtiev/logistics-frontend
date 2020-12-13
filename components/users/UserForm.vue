<template>
  <v-form>
    <v-text-field label="Email" v-model="value.email"/>
    <v-text-field label="Пароль" v-model="value.password"/>
    <v-checkbox label="Администратор" v-model="value.admin" />
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "UserForm",
  mixins: [resourceForm],
}
</script>

<style scoped>

</style>
