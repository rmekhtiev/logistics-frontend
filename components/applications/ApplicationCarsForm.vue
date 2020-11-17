<template>
  <v-form>
    <v-autocomplete v-model="value.car_id" :items="items" item-text="attributes.name"
                    item-value="id"/>
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ApplicationCarsForm",
  mixins: [resourceForm],
  computed: {
    items() {
      return this.$store.getters['cars/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('cars/loadAll');
    },
  }
}
</script>

<style scoped>

</style>
