<template>
  <v-autocomplete v-model="value.route_id" :items="items" item-text="attributes.delivery_address"
                  item-value="id"/>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ApplicationRouteForm",
  mixins: [resourceForm],
  computed: {
    items() {
      return this.$store.getters['routes/all'];
    },
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('routes/loadAll');
    },
  }
}
</script>

<style scoped>

</style>
