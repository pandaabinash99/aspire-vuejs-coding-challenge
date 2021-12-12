import Vue from 'vue'
import Vuex from 'vuex'
// modules
import cards from './modules/cards'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		alert: false,
		alertMsg: '',
		alertType: null
	},
	mutations: {
		setAlert(state, payload) {
			state.alert = true
			state.alertMsg = payload.msg
			state.alertType = payload.type
		},
		closeAlert(state) {
			state.alert = false
			state.alertMsg = ''
			state.alertType = null
		}
	},
	actions: {
		showAlert({ commit }, payload) {
			commit('setAlert', payload)
		},
		closeAlert({ commit }) {
			commit('closeAlert')
		}
	},
	modules: {
		cards
	}
})
