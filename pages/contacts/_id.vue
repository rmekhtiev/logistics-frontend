<template>
  <div id="driver">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <contact-info-card :contact="contact" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactInfoCard from "~/components/contacts/ContactInfoCard";
export default {
  name: "_id",
  components: {ContactInfoCard},
  data: () => ({
    contact:
      {
        id: 1,
        attributes: {
          name: "Курилович Петр Андреевич",
          organization: "ООО Мобильные решения",
          position: "Менеджер по продажам",
          phone: "89253073114"
        }
      },
  }),
}
</script>

<style scoped>

</style>
