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
            <v-list-item-title> {{ car.model }}</v-list-item-title>
            <v-list-item-subtitle>{{ car.volume }}, кг</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-btn icon small>
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
  name: "CarsInfoCard",
  props: {
    application: {
      required: true,
    }
  },
  data: () => ({
    cars: [
      {
        id: 1,
        model: 'Solaris',
        volume: 228
      },
      {
        id: 2,
        model: 'Solaris',
        volume: 228
      },
      {
        id: 3,
        model: 'Solaris',
        volume: 228
      },
    ]
  }),
  methods: {
    async addCar() {
      const dialog = await this.$dialog.showAndWait(ApplicationDriversDialog, {
        final: this.application,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
      }
    },

    async deleteReceiver() {
      let form = {
        ...this.application.attributes,
        receiver_id: null
      }
    },
    loadApplication() {
      return this.$store.dispatch('applications/loadById', {id: this.$route.params.id});
    },
  }
}
</script>

<style scoped>

</style>
