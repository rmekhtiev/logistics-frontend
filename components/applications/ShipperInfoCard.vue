<template>
  <div>
    <v-card class="mb-2" outlined>
      <v-card-title>
        <div class="overline">Отправитель</div>
        <v-spacer/>
        <v-btn icon color="primary" v-if="!shipper">
          <v-icon @click="addShipper">mdi-plus</v-icon>
        </v-btn>
        <v-btn icon color="red" v-else>
          <v-icon @click="deleteShipper">mdi-minus</v-icon>
        </v-btn>
      </v-card-title>
      <v-list v-if="shipper">
        <v-list-item two-line>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-account
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ shipper.attributes.name }}</v-list-item-title>
            <v-list-item-subtitle>ФИО</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-domain
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ shipper.attributes.organization }}</v-list-item-title>
            <v-list-item-subtitle>{{ shipper.attributes.position }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-phone
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> {{ shipper.attributes.phone }}</v-list-item-title>
            <v-list-item-subtitle>Телефон</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import ApplicationShipperDialog from "@/components/applications/ApplicationShipperDialog";

export default {
  name: "ShipperInfoCard",
  components: {ApplicationShipperDialog},
  props: {
    application: {
      required: true,
    }
  },
  computed: {
    shipper() {
      return this.$store.getters['contacts/byId']({id: this.application.attributes.shipper_id});
    }
  },
  mounted() {
    this.loadContact(this.application.attributes.shipper_id);
  },
  methods: {
    async addShipper() {
      const dialog = await this.$dialog.showAndWait(ApplicationShipperDialog, {
        final: this.application,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/applications/' + this.application.id, form).then((response) => {
          this.loadContact(response.data.data.attributes.shipper_id);
          this.loadApplication();
        });
      }
    },

    async deleteShipper() {
      let form = {
        ...this.application.attributes,
        shipper_id: null
      }
      await this.$axios.put('/applications/' + this.application.id, form).then((response) => {
        this.loadApplication();
      });
    },
    loadContact(id) {
      if (id) {
        return this.$store.dispatch('contacts/loadById', {id: id});
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
