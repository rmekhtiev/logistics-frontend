<template>
  <v-card
      outlined
      v-if="application"
  >
    <v-card-title>
      <div class="overline">
        Заявка
      </div>
      <v-spacer/>
      <v-btn icon @click="updateApplication">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
          icon
          color="red"
          @click="deleteApplication"
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
          <v-list-item-title>{{ application.attributes.name }} № {{ application.id }} от {{
              application.attributes.conclusion_date
            }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ application.attributes.status }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import ApplicationDialog from "@/components/applications/ApplicationDialog";

export default {
  name: "ApplicationInfoCard",
  props: {
    application: {
      required: true,
    }
  },
  methods: {
    loadApplication() {
      return this.$store.dispatch('applications/loadById', {id: this.$route.params.id});
    },
    async deleteApplication() {
      await this.$axios.delete('/applications/' + this.application.id);
      this.$router.push({name: 'applications'})
    },
    async updateApplication() {
      const dialog = await this.$dialog.showAndWait(ApplicationDialog, {
        final: this.application,
        persistent: true,
      })

      if (dialog !== false) {
        const form = dialog.attributes;
        await this.$axios.put('/applications/' + this.application.id, form);
        this.loadApplication();
      }
    },
  }
}
</script>

<style scoped>

</style>
