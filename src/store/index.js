import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalTvCount: 100, // ТВ инвентарь
    isLarryHappy: true,
    isJennyHappy: true,
    totalRouterCount: 10,
  },

  getters: {
    // Проверяем, счастливы ли Ларри и Дженни
   happyStaff: state => {
     return state.isLarryHappy && state.isJennyHappy
   },
   happyLarry: state => {
     return state.isLarryHappy
   }

  },

  mutations: {
    //Jenny
    removeRouter(state, amount) {
      state.totalRouterCount -= amount
    },
    removeTv(state, amount) {
      // На данный момент мы разрешаем Дженни просто удалить
      // один телевизор за раз.
      state.totalTvCount -= amount
    },
    evil(state) {
      state.isLarryHappy = false
    },

  },
  actions: {
    //Larry
    evilLarry(context) {
      context.commit('evilLarry')
    },
    removeTv(context, amount) {
      // Пока мы снимаем только телевизор,
      // но это действие может содержать логику
      // чтобы мы могли расширить его в будущем.
      if(context.state.totalTvCount >= amount) {
        // Если нам достаточно телевизоров, попросите Дженни снять его
        context.commit('removeTv', amount)
      }
    },
    removeRouter(context, amount) {
      if(context.state.totalRouterCount >= amount) {
        context.commit('removeRouter', amount)
      }
    },
    evil(context) {
      context.commit('evil')
      }
    }
});