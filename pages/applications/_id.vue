<template>
  <div id="application">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <application-info-card/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ApplicationInfoCard from "@/components/applications/ApplicationInfoCard";

export default {
  name: "_id",
  components: {ApplicationInfoCard}
}
</script>

<style scoped>

</style>
