<template>
  <v-card class="mb-2" outlined>
    <v-card-title>
      <div class="overline"> Получатель</div>
      <v-spacer/>
      <v-btn icon color="primary" v-if="!receiver">
        <v-icon @click="addReceiver">mdi-plus</v-icon>
      </v-btn>
      <v-btn icon color="red" v-else>
        <v-icon @click="deleteReceiver">mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-list v-if="receiver">
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-account
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ receiver.attributes.name }}</v-list-item-title>
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
          <v-list-item-title>{{ receiver.attributes.organization }}</v-list-item-title>
          <v-list-item-subtitle>{{ receiver.attributes.position }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ receiver.attributes.phone }}</v-list-item-title>
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
import ApplicationReceiverDialog from "@/components/applications/ApplicationReceiverDialog";
import ContactInfoCard from "@/components/contacts/ContactInfoCard";

export default {
  name: "ReceiverInfoCard",
  components: {ContactInfoCard},
  props: {
    application: {
      required: true,
    }
  },
  computed: {
    receiver() {
      return this.$store.getters['contacts/byId']({id: this.application.attributes.receiver_id});
    }
  },
  mounted() {
    this.loadContact(this.application.attributes.receiver_id);
  },
  methods: {
    async addReceiver() {
      const dialog = await this.$dialog.showAndWait(ApplicationReceiverDialog, {
        final: this.application,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/applications/' + this.application.id, form).then((response) => {
          this.loadContact(response.data.data.attributes.receiver_id);
          this.loadApplication();
        });
      }
    },

    async deleteReceiver() {
      let form = {
        ...this.application.attributes,
        receiver_id: null
      }
      await this.$axios.put('/applications/' + this.application.id, form).then((response) => {
        this.loadApplication();
      });
    },
    loadContact(id) {
      if (id) {
        return this.$store.dispatch('contacts/loadById', {id: id});
      }
    },
    loadApplication() {
      return this.$store.dispatch('applications/loadById', {id: this.$route.params.id});
    },
  }
}
</script>

<style scoped>

</style>
