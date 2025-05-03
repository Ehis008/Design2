import { createStore } from 'vuex' //importing createStore function from Vuex to create a new store
import axios from 'axios' //importing axios for making HTTP requests
export default createStore({
  state: {
    employees: [], //array to store employees' data
  },
  getters: {
    totalEmployees(state) {
      return state.employees.length
    },
    getEmployeeById: (state) => (id) => {
      return state.employees.find((employee) => employee.id === parseInt(id))
    },
  },
  mutations: {
    SET_EMPLOYEES(state, employees) {
      state.employees = employees
    },
  },
  actions: {
    //Define a function to make https request
    async fetchEmployees({ commit }) {
      // fetchEmployees is the function that goes to the API to fetch data
      const response = await axios.get('https://reqres.in/api/users')
      commit('SET_EMPLOYEES', response.data.data)
    },
  },
})
