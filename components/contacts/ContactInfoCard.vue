<template>
  <v-card
      outlined
      v-if="contact"
  >
    <v-card-title>
      <div class="overline">
        Контактное лицо
      </div>
      <v-spacer/>
      <v-btn icon @click="updateContact">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
          icon
          color="red"
          @click="deleteContact"
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
          <v-list-item-title>{{ contact.attributes.name }}</v-list-item-title>
          <v-list-item-subtitle>ФИО</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-domain
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ contact.attributes.organization }}</v-list-item-title>
          <v-list-item-subtitle>{{ contact.attributes.position }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ contact.attributes.phone }}</v-list-item-title>
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
import ContactDialog from "~/components/contacts/ContactDialog";

export default {
  name: "ContactInfoCard",
  props: {
    contact: {
      required: true,
    },
  },
  methods: {
    async deleteContact() {
      await this.$axios.delete('/contacts/' + this.contact.id);
      this.$router.push({name: 'contacts'})
    },
    async updateContact() {
      const dialog = await this.$dialog.showAndWait(ContactDialog, {
        final: this.contact,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/contacts/' + this.contact.id, form);
        this.loadContact();

      }
    },
    loadContact() {
      return this.$store.dispatch('contacts/loadById', {id: this.$route.params.id});
    },

  }
}
</script>

<style scoped>

</style>
