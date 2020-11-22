<template>
  <v-card
    v-if="client"
    outlined
  >
    <v-card-title>
      <div class="overline">
        Клиент
      </div>
      <v-spacer/>
      <v-btn
        icon
        @click="updateClient"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        icon
        color="red"
        @click="deleteClient"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-list>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-account
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ client.attributes.name }}</v-list-item-title>
          <v-list-item-subtitle>ФИО</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ client.attributes.phone }}</v-list-item-title>
          <v-list-item-subtitle>Телефон</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ client.attributes.email }}</v-list-item-title>
          <v-list-item-subtitle>E-mail</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-passport
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ client.attributes.passport_series }} {{ client.attributes.passport_number }}
          </v-list-item-title>
          <v-list-item-subtitle>Паспорт</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>

import ClientDialog from "@/components/clients/ClientDialog";

export default {
  name: "ClientInfoCard",
  props: {
    client: {
      required: true,
    }
  },
  methods: {
    loadClient() {
      return this.$store.dispatch('clients/loadById', {id: this.$route.params.id});
    },
    async deleteClient() {
      await this.$axios.delete('/clients/' + this.client.id);
      this.$router.push({name: 'clients'})
    },
    async updateClient() {
      const dialog = await this.$dialog.showAndWait(ClientDialog, {
        final: this.client,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/clients/' + this.client.id, form);
        this.loadClient();
      }
    },

  }
}
</script>

<style scoped>

</style>
