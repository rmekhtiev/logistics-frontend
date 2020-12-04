<template>
  <v-card class="mb-2" outlined v-if="application">
    <v-card-title>
      <div class="overline">Водители</div>
      <v-spacer/>
      <v-btn icon color="primary" @click="addDriver">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text v-if="drivers">
      <v-list>
        <v-list-item v-for="driver in drivers" :key="driver.id">
          <v-list-item-content>
            <v-list-item-title> {{ driver.attributes.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ driver.attributes.phone }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-btn icon small @click="deleteDriver(driver.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import ApplicationDriversDialog from "@/components/applications/ApplicationDriversDialog";

export default {
  name: "DriversInfoCard",
  props: {
    application: {
      required: true,
    }
  },

  computed: {
    drivers() {
      return this.$store.getters.allDrivers;
    }
  },
  mounted() {
    this.loadDrivers();
  },

  methods: {
    async addDriver() {
      const dialog = await this.$dialog.showAndWait(ApplicationDriversDialog, {
        final: this.application,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.post(`applications/${this.application.id}/drivers/${form.driver_id}`, form);
        this.loadDrivers();
        this.loadApplication();
      }
    },

    async deleteDriver(id) {
      await this.$store.dispatch('deleteDriverFromApplication', {applicationId: this.application.id, driverId: id});
      await this.$store.dispatch('fetchDriversForApplication', this.application.id);
    },
    loadDrivers() {
      this.$store.dispatch('fetchDriversForApplication', this.application.id);
    },

    loadApplication() {
      return this.$store.dispatch('applications/loadById', {id: this.$route.params.id});
    },
  }

}
</script>

<style scoped>

</style>
