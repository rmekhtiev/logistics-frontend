<template>
  <div id="driver">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <driver-info-card :driver="driver" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DriverInfoCard from "@/components/drivers/DriverInfoCard";
export default {
  name: "_id",
  components: {DriverInfoCard},
  data: () => ({
    driver:
      {
        id: 1,
        attributes: {
          name: "Курилович Петр Андреевич",
          car: "Хендай Солярис 2011",
          phone: "+79253073114"
        }
      },
  }),
}
</script>

<style scoped>

</style>
