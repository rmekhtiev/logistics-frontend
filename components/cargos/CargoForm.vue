<template>
  <v-form>
    <v-text-field label="Номенклатура" v-model="value.nomenclature"/>
    <v-text-field label="Вес, кг" v-model="value.weight"/>
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "CargoForm",
  mixins: [resourceForm]
}
</script>

<style scoped>

</style>
