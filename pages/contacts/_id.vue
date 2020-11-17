<template>
  <div id="contact">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <contact-info-card :contact="item"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactInfoCard from "~/components/contacts/ContactInfoCard";
import resourceInstance from "@/mixins/resourceInstance";

export default {
  name: "_id",
  components: {ContactInfoCard},
  data: () => ({
    resource: 'contacts'
  }),
  mixins: [resourceInstance]
}
</script>

<style scoped>

</style>
