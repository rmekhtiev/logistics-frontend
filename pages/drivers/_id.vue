<template>
  <div id="driver">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <driver-info-card :driver="item"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DriverInfoCard from "@/components/drivers/DriverInfoCard";
import resourceInstance from "@/mixins/resourceInstance";

export default {
  name: "_id",
  components: {DriverInfoCard},
  data: () => ({
    resource: 'drivers'
  }),
  mixins: [resourceInstance]
}
</script>

<style scoped>

</style>
