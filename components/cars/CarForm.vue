<template>
  <v-form>
    <v-text-field v-model="value.model" label="Модель"/>
    <v-text-field v-model="value.volume" label="Грузоподъемность, кг"/>
    <v-text-field v-model="value.weight" label="Вес, кг"/>
    <v-select v-model="value.category" label="Категория" :items="categories"/>
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
