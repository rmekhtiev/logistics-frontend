export default {
  actions: {
    async fetchDriversForApplication(ctx, id) {
      this.$axios.get(`http://localhost:5000/api/v1.0/applications/${id}/drivers`).then((res) => {
        const drivers = res.data.data;
        ctx.commit('updateDrivers', drivers)
      })
    }
  },
  mutations: {
    updateDrivers(state, drivers) {
      state.drivers = drivers;
    }
  },
  state: {
    drivers: []
  },
  getters: {
    allDrivers(state) {
      return state.drivers;
    }
  }
}
