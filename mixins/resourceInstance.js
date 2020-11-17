export default {
  data: () => ({
    resource: ''
  }),
  computed: {
    item() {
      return this.$store.getters[`${this.resource}/byId`]({id: this.$route.params.id});
    }
  },
  mounted() {
    this.loadItem();
  },
  methods: {
    loadItem() {
      return this.$store.dispatch(`${this.resource}/loadById`, {id: this.$route.params.id});
    },
  }
};
