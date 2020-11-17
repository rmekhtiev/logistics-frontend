<template>
  <v-form>
    <v-autocomplete v-model="value.driver_id" :items="items" item-text="attributes.name"
                    item-value="id"/>
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ApplicationDriversForm",
  mixins: [resourceForm],
  computed: {
    items() {
      return this.$store.getters['drivers/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('drivers/loadAll');
    },
  }
}
</script>

<style scoped>

</style>
