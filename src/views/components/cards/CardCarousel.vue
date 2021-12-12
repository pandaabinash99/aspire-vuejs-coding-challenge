<template>
	<div>
		<v-carousel
			:continuous="false"
			:cycle="false"
			:show-arrows="false"
			hide-delimiter-background
			delimiter-icon="mdi-minus"
			height="260"
			@change="cardChanged"
		>
			<v-carousel-item v-for="card in cards" :key="card.cardNo">
				<!-- cards -->
				<card :card="card" />
			</v-carousel-item>
		</v-carousel>
		<!-- card actions area -->
		<v-card
			outlined
			class="mx-auto mt-10"
			style="border-radius: 15px"
			max-width="380"
			color="#EDF3FF"
		>
			<v-card-text class="pa-6 d-flex">
				<card-action
					:label="
						currentCard && currentCard.isFreezed
							? 'Unfreeze card'
							: 'Freeze card'
					"
					img="FreezeCard.svg"
					@actionClicked="toggleFreeze"
				/>
				<card-action
					label="Set spend limit"
					img="SetSpendLimit.svg"
					@actionClicked="setSpendLimit"
				/>
				<card-action
					label="Add to GPay"
					img="GPay.svg"
					@actionClicked="addToGpay"
				/>
				<card-action
					label="Replace card"
					img="ReplaceCard.svg"
					@actionClicked="replaceCard"
				/>
				<card-action
					label="Cancel card"
					img="DeactivateCard.svg"
					@actionClicked="cancelcardConfirmDialog = true"
				/>
			</v-card-text>
		</v-card>
		<!-- confirm dialog -->
		<confirmation-dialog
			:openDialog="cancelcardConfirmDialog"
			@confirm="removeCard"
			@closeDialog="cancelcardConfirmDialog = false"
		></confirmation-dialog>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data: () => ({
		currentCard: {},
		cancelcardConfirmDialog: false
	}),
	computed: {
		...mapState({
			cards: (state) => state.cards.cards
		})
	},
	methods: {
		cardChanged(activeIndex) {
			this.currentCard = this.cards[activeIndex]
		},
		toggleFreeze() {
			this.$store.dispatch('toogleFreeze', this.currentCard)
			this.$store.dispatch('showAlert', {
				msg: this.currentCard.isFreezed
					? 'Card freezed successfully'
					: 'Card unfreezed successfully',
				type: 'success'
			})
		},
		removeCard() {
			this.$store.dispatch('removeCard', this.currentCard)
			this.$store.dispatch('showAlert', {
				msg: 'Card removed successfully',
				type: 'success'
			})
			this.cancelcardConfirmDialog = false
		},
		setSpendLimit() {
			// code
		},
		addToGpay() {
			// code
		},
		replaceCard() {
			// code
		}
	},
	components: {
		card: () => import('./Card.vue'),
		'card-action': () => import('./CardAction.vue'),
		'confirmation-dialog': () =>
			import('../../../components/ConfirmationDialog.vue')
	}
}
</script>
