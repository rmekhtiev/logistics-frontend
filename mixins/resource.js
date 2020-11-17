export default {
  data: () => ({
    resource: ''
  }),
  computed: {
    items() {
      return this.$store.getters[`${this.resource}/all`];
    }
  },
  mounted() {
    this.loadItems();
  },

  methods: {
    openResourceInstancePage(id) {
      this.$router.push({name: `${this.resource}-id`, params: {id}})
    },
    loadItems() {
      return this.$store.dispatch(`${this.resource}/loadAll`);
    }
  }
};
