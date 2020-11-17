<template>
  <v-form>
    <v-autocomplete v-model="value.shipper_id" :items="items" item-text="attributes.name"
                    item-value="id"/>
  </v-form>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ApplicationShipperForm",
  mixins: [resourceForm],
  computed: {
    items() {
      return this.$store.getters['contacts/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('contacts/loadAll');
    },
  }
}
</script>

<style scoped>

</style>
