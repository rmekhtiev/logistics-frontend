<template>
  <v-autocomplete v-model="value.requisites_id" :items="items" item-text="attributes.bank_account"
                  item-value="id"/>
</template>

<script>
export default {
  name: "ContractRequisitesForm",
  computed: {
    items() {
      return this.$store.getters['requisites/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('requisites/loadAll');
    },
  }
}
</script>

<style scoped>

</style>
