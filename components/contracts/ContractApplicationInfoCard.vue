<template>
  <v-card
    outlined
  >
    <v-card-title>
      <div class="overline">Заявка</div>
      <v-spacer/>
      <v-btn icon color="primary" v-if="!application">
        <v-icon >mdi-plus</v-icon>
      </v-btn>
      <v-btn icon color="red" v-else>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-list v-if="application">
      <v-list-item three-line-line>
        <v-list-item-icon>
          <v-icon>
            mdi-card-text-outline
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ application.attributes.name }} № {{ application.id }} от {{
              application.attributes.conclusion_date
            }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ $t('statuses.' + application.attributes.status) }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ContractApplicationInfoCard",
  props: {
    contract: {
      required: true,
    },
  },
  computed: {
    application() {
      return this.$store.getters['applications/byId']({id: this.contract.attributes.application_id});
    }
  },
  mounted() {
    this.loadApplication(this.contract.attributes.application_id);
  },
  methods: {
    async addApplications() {
      const dialog = await this.$dialog.showAndWait('', {
        final: this.contract,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/contracts/' + this.contract.id, form).then((response) => {
          this.loadApplication(response.data.data.attributes.application_id);
          this.loadContract();
        });
      }
    },

    async deleteApplications() {
      let form = {
        ...this.contract.attributes,
        application_id: null
      }
      await this.$axios.put('/contracts/' + this.contract.id, form).then((response) => {
        this.loadApplication();
        this.loadContract();
      });
    },
    loadApplication(id) {
      if (id) {
        return this.$store.dispatch('applications/loadById', {id: id});
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
