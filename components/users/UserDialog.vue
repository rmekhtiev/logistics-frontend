<template>
  <dialog-card
    title="Создание пользователя"
    :actions="actions"
    :handle="handleClick"
  >
    <user-form v-model="editedValue.attributes" :final="final.attributes"/>
  </dialog-card>
</template>

<script>
import resourceDialog from "@/mixins/resourceDialog";
import UserForm from "@/components/users/UserForm";

export default {
  name: "UserDialog",
  components: {UserForm},
  mixins: [resourceDialog]
}
</script>

<style scoped>

</style>
