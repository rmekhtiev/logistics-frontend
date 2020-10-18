<template>
  <div id="application">
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <application-info-card class="mb-2" :application="application"/>
        <v-card class="mb-2" outlined>
          <v-card-title>
            <div class="overline"> Получатель</div>
            <v-spacer/>
            <v-btn icon color="primary">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
        <v-card outlined>
          <v-card-title>
            <div class="overline"> Отправитель</div>
            <v-spacer/>
            <v-btn icon color="primary">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col sm="12" md="6" lg="4">
        <v-card class="mb-2" outlined>
          <v-card-title>
            <div class="overline">Водитель</div>
            <v-spacer/>
            <v-btn icon color="primary">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
        <v-card outlined>
          <v-card-title>
            <div class="overline">Транспортное средство</div>
            <v-spacer/>
            <v-btn icon color="primary">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ApplicationInfoCard from "@/components/applications/ApplicationInfoCard";

export default {
  name: "_id",
  components: {ApplicationInfoCard},
  data: () => ({
    application:
      {
        id: 1,
        attributes: {
          name: "Доставка железа",
          conclusion_date: '24.04.2020'
        }
      },
  }),
}
</script>

<style scoped>

</style>
