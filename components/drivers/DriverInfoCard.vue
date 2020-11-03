<template>
  <v-card v-if="driver"
          outlined
  >
    <v-card-title>
      <div class="overline">
        Водитель
      </div>
      <v-spacer/>
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        icon
        color="red"
        @click="deleteDriver"
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
          <v-list-item-title>{{ driver.attributes.name }}</v-list-item-title>
          <v-list-item-subtitle>ФИО</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ driver.attributes.phone }}</v-list-item-title>
          <v-list-item-subtitle>Телефон</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-account
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <template v-for="(item) in driver.attributes.categories">
              {{ item }}
            </template>
          </v-list-item-title>
          <v-list-item-subtitle>Категории прав</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "DriverInfoCard",
  props: {
    driver: {
      required: true,
    }
  },
  methods: {
    async deleteDriver() {
      await this.$axios.delete('/drivers/' + this.driver.id);
      this.$router.push({name: 'drivers'})
    },
  }
}
</script>

<style scoped>

</style>
