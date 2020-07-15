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
   },
    happyJenny: state => {
       return state.isJennyHappy
    },
  },

  mutations: {
    //Jenny
    compJenny(state) {
      state.isJennyHappy = true
    },
    noJENNY(state) {
      state.isJennyHappy = false
    },
    removeRouter(state, amount) {
      state.totalRouterCount -= amount
    },
    removeTv(state, amount) {
      // На данный момент мы разрешаем Дженни просто удалить
      // один телевизор за раз.
      state.totalTvCount -= amount
    },
    addTenTvs(state, amount) {
      state.totalTvCount += amount
    },
    evilLarry(state) {
      state.isLarryHappy  = false
    },
    evilJenny(state) {
      state.isJennyHappy  = false
    },
    addTenRouters(state, amount) {
      state.totalRouterCount += amount
    }
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
    complimentJENNY(context) {
      context.commit('compJenny')
    },
    noComplimentJENNY(context) {
      context.commit('noJENNY')
    },
    addTvs(context, amount) {
      context.commit('addTenTvs', amount)
    },
    removeRouter(context, amount) {
      if(context.state.totalRouterCount >= amount) {
        context.commit('removeRouter', amount)
      }
    },
    addRouters(context, amount) {
        context.commit('addTenRouters', amount)
    },
    evil(context) {
      context.commit('evilLarry')
      }
    },
    evil(context) {
      context.commit('evilJenny')
    }
});