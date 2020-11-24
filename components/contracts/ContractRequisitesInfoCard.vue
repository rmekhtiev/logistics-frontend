<template>
  <v-card
    outlined
  >
    <v-card-title>
      <div class="overline">Реквизиты</div>
      <v-spacer/>
      <v-btn icon color="primary" v-if="!requisite">
        <v-icon @click="addRequisites">mdi-plus</v-icon>
      </v-btn>
      <v-btn icon color="red" v-else>
        <v-icon @click="deleteRequisites">mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-list v-if="requisite">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ requisite.attributes.bank_account }}</v-list-item-title>
          <v-list-item-subtitle>Расчетный счет</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ requisite.attributes.KS }}</v-list-item-title>
          <v-list-item-subtitle>Корр. счет</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ requisite.attributes.KPP }}</v-list-item-title>
          <v-list-item-subtitle>КПП</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ requisite.attributes.INN }}</v-list-item-title>
          <v-list-item-subtitle>ИНН</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ requisite.attributes.BIK }}</v-list-item-title>
          <v-list-item-subtitle>БИК</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ requisite.attributes.bank_name }}</v-list-item-title>
          <v-list-item-subtitle>Банк</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import ContractRequisitesDialog from "@/components/contracts/ContractRequisitesDialog";

export default {
  name: "ContractRequisitesInfoCard",
  props: {
    contract: {
      required: true,
    },
  },
  computed: {
    requisite() {
      return this.$store.getters['requisites/byId']({id: this.contract.attributes.requisite_id});
    }
  },
  mounted() {
    this.loadRequisite(this.contract.attributes.requisite_id);
  },
  methods: {
    async addRequisites() {
      const dialog = await this.$dialog.showAndWait(ContractRequisitesDialog, {
        final: this.contract,
        persistent: true,
        axios: this.$axios,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/contracts/' + this.contract.id, form).then((response) => {
          this.loadRequisite(response.data.data.attributes.requisite_id);
          this.loadContract();
        });
      }
    },

    async deleteRequisites() {
      let form = {
        ...this.contract.attributes,
        requisite_id: null
      }
      await this.$axios.put('/contracts/' + this.contract.id, form).then((response) => {
        this.loadRequisite();
        this.loadContract();
      });
    },
    loadRequisite(id) {
      if (id) {
        return this.$store.dispatch('requisites/loadById', {id: id});
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
