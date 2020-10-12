<template>
  <v-card
    outlined
  >
    <v-card-title>
      <div class="overline">
        Водитель
      </div>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        icon
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-list>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-account
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Курилович Петр Андреевич</v-list-item-title>
          <v-list-item-subtitle>ФИО</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-car
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Хендай Солярис</v-list-item-title>
          <v-list-item-subtitle>У073НХ197</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>+79253073114</v-list-item-title>
          <v-list-item-subtitle>Телефон</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
name: "DriverInfoCard"
}
</script>

<style scoped>

</style>
