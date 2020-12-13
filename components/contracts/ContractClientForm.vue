<template>
  <v-autocomplete v-model="value.client_id" :items="items" item-text="attributes.name"
                  item-value="id"/>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ContractClientForm",
  mixins: [resourceForm],
  computed: {
    items() {
      return this.$store.getters['clients/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('clients/loadAll');
    },
  }
}
</script>

<style scoped>

</style>
