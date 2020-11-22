<template>
  <div id="client">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <client-info-card :client="item"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ClientInfoCard from "@/components/clients/ClientInfoCard";
import resourceInstance from "@/mixins/resourceInstance";

export default {
  name: "_id",
  components: {ClientInfoCard},
  data: () => ({
    resource: 'clients'
  }),
  mixins: [resourceInstance]
}
</script>

<style scoped>

</style>
