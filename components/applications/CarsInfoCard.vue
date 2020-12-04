<template>
  <v-card class="mb-2" outlined v-if="application">
    <v-card-title>
      <div class="overline">Транспортные средства</div>
      <v-spacer/>
      <v-btn icon color="primary" @click="addCar">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="car in cars" :key="car.id">
          <v-list-item-content>
            <v-list-item-title> {{ car.attributes.model }}</v-list-item-title>
            <v-list-item-subtitle>{{ car.attributes.volume }}, кг</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-btn icon small @click="deleteCar(car.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import ApplicationCarsDialog from "@/components/applications/ApplicationCarsDialog";

export default {
  name: "CarsInfoCard",
  props: {
    application: {
      required: true,
    }
  },
  computed: {
    cars() {
      return this.$store.getters.allCars;
    }
  },
  mounted() {
    this.loadCars();
  },
  methods: {
    async addCar() {
      const dialog = await this.$dialog.showAndWait(ApplicationCarsDialog, {
        final: this.application,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.post(`applications/${this.application.id}/cars/${form.car_id}`, form);
        this.loadCars();
        this.loadApplication();
      }
    },

    async deleteCar(id) {
      await this.$store.dispatch('deleteCarFromApplication', {applicationId: this.application.id, carId: id});
      await this.$store.dispatch('fetchCarsForApplication', this.application.id);
    },
    loadCars() {
      this.$store.dispatch('fetchCarsForApplication', this.application.id);
    },
    loadApplication() {
      return this.$store.dispatch('applications/loadById', {id: this.$route.params.id});
    },
  }
}
</script>

<style scoped>

</style>
