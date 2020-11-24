<template>
  <v-card class="mb-2" outlined>
    <v-card-title>
      <div class="overline">Доставка</div>
      <v-spacer/>
      <v-btn icon color="primary" v-if="!route">
        <v-icon @click="addRoute">mdi-plus</v-icon>
      </v-btn>
      <v-btn icon color="red" v-else>
        <v-icon @click="deleteRoute">mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-list v-if="route">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ route.attributes.shipping_address }}</v-list-item-title>
          <v-list-item-subtitle>Адрес отправки</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ route.attributes.delivery_address }}</v-list-item-title>
          <v-list-item-subtitle>Адрес доставки</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ route.attributes.distance }}</v-list-item-title>
          <v-list-item-subtitle>Дистанция</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ route.attributes.estimated_time }}</v-list-item-title>
          <v-list-item-subtitle>Время доставки</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>

import ApplicationRouteDialog from "@/components/applications/ApplicationRouteDialog";
import axios from "axios";

export default {
  name: "RouteInfoCard",
  props: {
    application: {
      required: true,
    }
  },
  computed: {
    route() {
      return this.$store.getters['routes/byId']({id: this.application.attributes.delivery_route});
    }
  },
  mounted() {
    this.loadRoute(this.application.attributes.delivery_route);
  },
  methods: {
    async addRoute() {
      const dialog = await this.$dialog.showAndWait(ApplicationRouteDialog, {
        final: this.application,
        persistent: true,
        axios: this.$axios,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        console.log(form)
        await this.$axios.put('/applications/' + this.application.id, form).then((response) => {
          console.log(response);
          this.loadRoute(response.data.data.attributes.delivery_route);
          this.loadApplication();
        });
      }
    },

    async deleteRoute() {
      let form = {
        ...this.application.attributes,
        delivery_route: null
      }
      await this.$axios.put('/applications/' + this.application.id, form).then((response) => {
        this.loadApplication();
      });
    },
    loadRoute(id) {
      if (id) {
        return this.$store.dispatch('routes/loadById', {id: id});
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
