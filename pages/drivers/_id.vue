<template>
  <div id="driver">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <driver-info-card :driver="driver"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DriverInfoCard from "@/components/drivers/DriverInfoCard";

export default {
  name: "_id",
  components: {DriverInfoCard},
  data: () => ({}),
  computed: {
    driver() {
      return this.$store.getters['drivers/byId']({id: this.$route.params.id});
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('drivers/loadById', {id: this.$route.params.id});
    }
  }
}
</script>

<style scoped>

</style>
