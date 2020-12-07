export default {
  computed: {
    me() {
      return this.$auth.user;
    }
  },
  methods: {
    formatEmailToAvatar(email) {
      return email.substring(0, 1)
    }
  }
}
