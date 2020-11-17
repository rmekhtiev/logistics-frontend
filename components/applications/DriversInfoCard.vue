<template>
  <v-card class="mb-2" outlined v-if="application">
    <v-card-title>
      <div class="overline">Водители</div>
      <v-spacer/>
      <v-btn icon color="primary" @click="addDriver">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="driver in drivers" :key="driver.id">
          <v-list-item-content>
            <v-list-item-title> {{ driver.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ driver.phone }}</v-list-item-subtitle>
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
import ApplicationReceiverDialog from "@/components/applications/ApplicationReceiverDialog";
import ApplicationDriversDialog from "@/components/applications/ApplicationDriversDialog";

export default {
  name: "DriversInfoCard",
  props: {
    application: {
      required: true,
    }
  },
  data: () => ({
    drivers: [
      {
        id: 1,
        name: 'Kurilovich',
        phone: '89228228228'
      },
      {
        id: 2,
        name: 'Kurilovich',
        phone: '89228228228'
      },
      {
        id: 3,
        name: 'Kurilovich',
        phone: '89228228228'
      }
    ]
  }),
  methods: {
    async addDriver() {
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
