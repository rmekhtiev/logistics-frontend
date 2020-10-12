<template>
  <v-card
    outlined
  >
    <v-card-title>
      <div class="overline">
        Заявка
      </div>
      <v-spacer/>
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
      <v-list-item three-line-line>
        <v-list-item-icon>
          <v-icon>
            mdi-card-text-outline
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ application.attributes.name }}</v-list-item-title>
          <v-list-item-subtitle>№ {{ application.id }}</v-list-item-subtitle>
          <v-list-item-subtitle>от {{ application.attributes.conclusion_date }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ApplicationInfoCard",
  props: {
    application: {
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
