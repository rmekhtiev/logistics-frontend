<template>
  <v-autocomplete v-model="value.application_id" :items="items" item-text="attributes.name"
                  item-value="id"/>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ContractApplicationForm",
  mixins: [resourceForm],
  computed: {
    items() {
      return this.$store.getters['applications/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('applications/loadAll');
    },
  }
}
</script>

<style scoped>

</style>
