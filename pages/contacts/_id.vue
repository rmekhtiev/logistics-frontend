<template>
  <div id="driver">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <contact-info-card :contact="contact"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactInfoCard from "~/components/contacts/ContactInfoCard";

export default {
  name: "_id",
  components: {ContactInfoCard},
  computed: {
    contact() {
      return this.$store.getters['contacts/byId']({id: this.$route.params.id});
    }
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      return this.$store.dispatch('contacts/loadById', {id: this.$route.params.id});
    }
  }
}
</script>

<style scoped>

</style>
