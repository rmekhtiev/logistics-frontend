<template>
  <v-form>
    <v-text-field label="Модель"/>
    <v-text-field label="Грузоподъемность, кг"/>
    <v-text-field label="Вес, кг"/>
    <v-select label="Категория" :items="categories"/>
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "CarForm",
  mixins: [resourceForm],
  data: () => ({
    categories: ['A', 'B', 'C', 'D']
  })
}
</script>

<style scoped>

</style>
