<template>
  <div>
    <v-autocomplete v-model="value.delivery_route" :items="items" item-text="attributes.name"
                    item-value="id" label="Введите адрес"/>
    <div class="mt-4">
      <div class="overline black--text">Создание нового маршрута</div>
      <v-text-field v-model="form.delivery_address" label="Адрес доставки"/>
      <v-text-field v-model="form.shipping_address" label="Адрес отправки"/>
      <v-text-field v-model="form.distance" label="Расстояние"/>
      <v-text-field v-model="form.estimate_time" label="Время доставки"/>
      <v-btn @click="addRoute">Создать</v-btn>
    </div>
  </div>
</template>

<script>
import resourceForm from "@/mixins/resourceForm";

export default {
  name: "ApplicationRouteForm",
  mixins: [resourceForm],
  props: {
    axios: {
      required: true
    }
  },
  data: () => ({
    form: {
      delivery_address: '',
      shipping_address: '',
      distance: null,
      estimate_time: null,
    },
  }),
  computed: {
    items() {
      return this.$store.getters['routes/all'];
    },
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('routes/loadAll');
    },
    post(form) {
      return this.axios.post('/routes', form)
    },
    async addRoute() {
      await this.axios.post('/routes', this.form);
      this.form = {
        delivery_address: '',
        shipping_address: '',
        distance: null,
        estimate_time: null,
      };
      this.loadItems();
    }
  }
}
</script>

<style scoped>

</style>
