export default {
  actions: {
    async fetchDriversForApplication(ctx, id) {
      this.$axios.get(`/applications/${id}/drivers`).then((res) => {
        const drivers = res.data.data;
        ctx.commit('updateDrivers', drivers)
      })
    },
    async deleteDriverFromApplication(ctx, payload) {
      await this.$axios.delete(`/applications/${payload.applicationId}/drivers/${payload.driverId}`)
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
