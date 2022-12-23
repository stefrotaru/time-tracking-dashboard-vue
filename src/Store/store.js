import { createStore } from 'vuex'

export default createStore({
    state () {
      return {
        currentState: 'weekly',
      }
    },
    mutations: {
      showDaily (state) {
        state.currentState = 'daily';
      },
      showWeekly (state) {
        state.currentState = 'weekly';
      },
      showMonthly (state) {
        state.currentState = 'monthly';
      },
    }
  })