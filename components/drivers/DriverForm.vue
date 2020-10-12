<template>
  <v-form>
    <v-text-field />
    <v-text-field />
    <v-text-field />
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "DriverForm",
  mixins: [resourceForm]
}
</script>

<style scoped>

</style>
