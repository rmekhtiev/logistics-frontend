import Vue from 'vue'
import Vuex from 'vuex'
import applicationDrivers from "@/store/modules/applicationDrivers";
import applicationCars from "@/store/modules/applicationCars";

Vue.use(Vuex)

export default () => new Vuex.Store({
  modules: {
    applicationDrivers,
    applicationCars
  }
})
