<template>
  <div id="driver">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <driver-info-card />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DriverInfoCard from "@/components/drivers/DriverInfoCard";
export default {
  name: "_id",
  components: {DriverInfoCard}
}
</script>

<style scoped>

</style>
