<template>
  <v-autocomplete v-model="value.application_id" :items="items" item-text="attributes.name"
                  item-value="id"/>
</template>

<script>
export default {
  name: "ContractApplicationForm",
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
