<template>
  <div id="application" v-if="application">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <application-info-card class="mb-2" :application="application"/>
        <receiver-info-card :application="application"/>
        <shipper-info-card :application="application"/>
      </v-col>
      <v-col sm="12" md="6" lg="4">
        <v-card class="mb-2" outlined>
          <v-card-title>
            <div class="overline">Водитель</div>
            <v-spacer/>
            <v-btn icon color="primary">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
        <v-card outlined>
          <v-card-title>
            <div class="overline">Транспортное средство</div>
            <v-spacer/>
            <v-btn icon color="primary">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ApplicationInfoCard from "@/components/applications/ApplicationInfoCard";
import ReceiverInfoCard from "@/components/applications/ReceiverInfoCard";
import ShipperInfoCard from "@/components/applications/ShipperInfoCard";

export default {
  name: "_id",
  components: {ShipperInfoCard, ReceiverInfoCard, ApplicationInfoCard},
  data: () => ({}),
  computed: {
    application() {
      return this.$store.getters['applications/byId']({id: this.$route.params.id});
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('applications/loadById', {id: this.$route.params.id});
    },
  }
}
</script>

<style scoped>

</style>
