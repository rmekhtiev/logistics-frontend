<template>
  <div>
    <v-autocomplete v-model="value.requisites_id" :items="items" item-text="attributes.name"
                    item-value="id" label="Введите реквизиты"/>
    <div class="mt-4">
      <div class="overline black--text">Создание нового реквизита</div>
      <v-text-field v-model="form.bank_account" label="Расчетный счет"/>
      <v-text-field v-model="form.BIK" label="БИК"/>
      <v-text-field v-model="form.INN" label="ИНН"/>
      <v-text-field v-model="form.KPP" label="КПП"/>
      <v-text-field v-model="form.KS" label="Корр.счет"/>
      <v-text-field v-model="form.RS" label="РС"/>
      <v-text-field v-model="form.bank_name" label="Название банка"/>
      <v-btn @click="addRequisite">Создать</v-btn>
    </div>
  </div>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ContractRequisitesForm",
  mixins: [resourceForm],
  props: {
    axios: {
      required: true
    }
  },
  data: () => ({
    form: {
      bank_name: null,
      BIK: null,
      INN: null,
      KPP: null,
      KS: null,
      RS: null,
      bank_account: null,
    },
  }),
  computed: {
    items() {
      return this.$store.getters['requisites/all'];
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('requisites/loadAll');
    },
    async addRequisite() {
      await this.axios.post('/requisites', this.form);
      this.form = {
        bank_name: null,
        BIK: null,
        INN: null,
        KPP: null,
        KS: null,
        RS: null,
        bank_account: null,
      };
      this.loadItems();
    }
  }
}
</script>

<style scoped>

</style>
