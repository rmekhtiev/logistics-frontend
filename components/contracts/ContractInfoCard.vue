<template>
  <v-card
    outlined
  >
    <v-card-title>
      <div class="overline">
        Договор
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
            mdi-file-document-edit
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>№ {{ contract.id }}</v-list-item-title>
          <v-list-item-subtitle>от {{ contract.attributes.conclusion_date }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ContractInfoCard",
  props: {
    contract: {
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
