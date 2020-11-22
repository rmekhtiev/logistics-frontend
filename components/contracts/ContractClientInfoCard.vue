<template>
  <v-card
    outlined
  >
    <v-card-title>
      <div class="overline">Клиент</div>
      <v-spacer/>
      <v-btn icon color="primary" v-if="!client">
        <v-icon >mdi-plus</v-icon>
      </v-btn>
      <v-btn icon color="red" v-else>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-list v-if="client">
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
export default {
  name: "ContractClientInfoCard",
  props: {
    contract: {
      required: true,
    },
  },
  computed: {
    client() {
      return this.$store.getters['clients/byId']({id: this.contract.attributes.client_id});
    }
  },
  mounted() {
    this.loadClient(this.contract.attributes.client_id);
  },
  methods: {
    async addClients() {
      const dialog = await this.$dialog.showAndWait('', {
        final: this.contract,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/contracts/' + this.contract.id, form).then((response) => {
          this.loadClient(response.data.data.attributes.client_id);
          this.loadContract();
        });
      }
    },

    async deleteClients() {
      let form = {
        ...this.contract.attributes,
        client_id: null
      }
      await this.$axios.put('/contracts/' + this.contract.id, form).then((response) => {
        this.loadClient();
        this.loadContract();
      });
    },
    loadClient(id) {
      if (id) {
        return this.$store.dispatch('clients/loadById', {id: id});
      }
    },
    loadContract() {
      return this.$store.dispatch('contracts/loadById', {id: this.$route.params.id});
    },
  }
}
</script>

<style scoped>

</style>
