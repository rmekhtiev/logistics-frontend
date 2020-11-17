<template>
  <div id="contract">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <contract-info-card :contract="contract" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContractInfoCard from "~/components/contracts/ContractInfoCard";
export default {
  name: "_id",
  components: {ContractInfoCard},
  data: () => ({}),
  computed: {
    contract() {
      return this.$store.getters['contracts/byId']({id: this.$route.params.id});
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('contracts/loadById', {id: this.$route.params.id});
    }
  }
}
</script>

<style scoped>

</style>
