export default {
  actions: {
    async fetchCarsForApplication(ctx, id) {
      this.$axios.get(`/applications/${id}/cars`).then((res) => {
        const cars = res.data.data;
        ctx.commit('updateCars', cars)
      })
    }
  },
  mutations: {
    updateCars(state, cars) {
      state.cars = cars;
    }
  },
  state: {
    cars: []
  },
  getters: {
    allCars(state) {
      return state.cars;
    }
  }
}
