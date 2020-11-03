<template>
  <v-form>
    <v-text-field label="Фамилия" v-model="value.last_name"/>
    <v-text-field label="Имя" v-model="value.first_name"/>
    <v-text-field label="Отчество" v-model="value.middle_name"/>
    <v-text-field label="Номер телефона"/>
    <v-select multiple label="Категории прав" :items="categories" v-model="value.categories"/>
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "DriverForm",
  props: {
    value: {
      type: Object,
      required: true,
    },
    final: {
      type: Object,
      default: null,
    },
  },
  mixins: [resourceForm],
  data: () => ({
    categories: ['A', 'B', 'C', 'D']
  })
}
</script>

<style scoped>

</style>
