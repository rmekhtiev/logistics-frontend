<template>
  <v-card
    outlined
    v-if="contract"
  >
    <v-card-title>
      <div class="overline">
        Договор
      </div>
      <v-spacer/>
      <v-btn icon @click="updateContract">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        icon
        color="red"
        @click="deleteContract"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-list>
      <v-list-item three-line-line>
        <v-list-item-icon>
          <v-icon>
            mdi-file-document-edit
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>№ {{ contract.id }}</v-list-item-title>
          <v-list-item-subtitle>от {{ contract.attributes.conclusion_date }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <div class="overline px-4">
      Оплата
    </div>
    <v-list>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ $t('paymentTypes.' + contract.attributes.payment_type) }}</v-list-item-title>
          <v-list-item-subtitle>Способ оплаты</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ contract.attributes.cost }}</v-list-item-title>
          <v-list-item-subtitle>Стоимость</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import ContractDialog from "@/components/contracts/ContractDialog";

export default {
  name: "ContractInfoCard",
  props: {
    contract: {
      required: true,
    }
  },
  methods: {
    loadContract() {
      return this.$store.dispatch('contracts/loadById', {id: this.$route.params.id});
    },
    async deleteContract() {
      await this.$axios.delete('/contracts/' + this.contract.id);
      this.$router.push({name: 'contracts'})
    },
    async updateContract() {
      const dialog = await this.$dialog.showAndWait(ContractDialog, {
        final: this.contract,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/contracts/' + this.contract.id, form);
        this.loadContract();
      }
    },

  }
}
</script>

<style scoped>

</style>
