<template>
  <div id="application" v-if="item">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <application-info-card class="mb-2" :application="item"/>
        <receiver-info-card :application="item"/>
        <shipper-info-card :application="item"/>
      </v-col>
      <v-col sm="12" md="6" lg="4">
        <drivers-info-card :application="item" />
        <cars-info-card :application="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ApplicationInfoCard from "@/components/applications/ApplicationInfoCard";
import ReceiverInfoCard from "@/components/applications/ReceiverInfoCard";
import ShipperInfoCard from "@/components/applications/ShipperInfoCard";
import resourceInstance from "@/mixins/resourceInstance";
import DriversInfoCard from "@/components/applications/DriversInfoCard";
import CarsInfoCard from "@/components/applications/CarsInfoCard";

export default {
  name: "_id",
  components: {CarsInfoCard, DriversInfoCard, ShipperInfoCard, ReceiverInfoCard, ApplicationInfoCard},
  data: () => ({
    resource: 'applications'
  }),
  mixins: [resourceInstance]
}
</script>

<style scoped>

</style>
