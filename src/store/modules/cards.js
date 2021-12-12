export default {
	state: {
		cards: [
			{
				name: 'Mark Henry',
				cardNo: '1234 5678 9012 2020',
				validThru: '12/20',
				cvv: '123',
				isFreezed: false
			},
			{
				name: 'Tony Stark',
				cardNo: '1234 5678 9012 3000',
				validThru: '09/20',
				cvv: '123',
				isFreezed: false
			},
			{
				name: 'Clark Kent',
				cardNo: '1234 5678 9012 6666',
				validThru: '08/20',
				cvv: '123',
				isFreezed: true
			}
		]
	},
	mutations: {
		addNewCard(state, payload) {
			state.cards.push(payload)
		},
		toogleFreeze(state, payload) {
			const index = state.cards.findIndex(
				(card) => card.cardNo === payload.cardNo
			)
			state.cards[index].isFreezed = !state.cards[index].isFreezed
		},
		removeCard(state, payload) {
			const index = state.cards.findIndex(
				(card) => card.cardNo === payload.cardNo
			)
			state.cards.splice(index, 1)
		}
	},
	actions: {
		addNewCard({ commit }, payload) {
			commit('addNewCard', payload)
		},
		toogleFreeze({ commit }, payload) {
			commit('toogleFreeze', payload)
		},
		removeCard({ commit }, payload) {
			commit('removeCard', payload)
		}
	}
}
