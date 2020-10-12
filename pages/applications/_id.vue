<template>
  <div id="application">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <application-info-card :application="application"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ApplicationInfoCard from "@/components/applications/ApplicationInfoCard";

export default {
  name: "_id",
  components: {ApplicationInfoCard},
  data: () => ({
    application:
      {
        id: 1,
        attributes: {
          name: "Доставка железа",
          conclusion_date: '24.04.2020'
        }
      }
  }),
}
</script>

<style scoped>

</style>
