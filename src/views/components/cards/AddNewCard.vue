<template>
	<v-dialog v-model="openDialog" max-width="330px" persistent>
		<v-card>
			<v-card-title class="text-h6 primary white--text">
				Add new card
			</v-card-title>
			<validation-observer v-slot="{ invalid, handleSubmit }" ref="addCardForm">
				<v-form>
					<v-card-text class="pt-4">
						<v-row>
							<v-col cols="12">
								<validation-provider
									v-slot="{ errors }"
									rules="required|alphaSpace"
									name="Name"
								>
									<v-text-field
										v-model="name"
										label="Name"
										outlined
										dense
										:error-messages="errors"
									></v-text-field>
								</validation-provider>
								<validation-provider
									v-slot="{ errors }"
									rules="required|numericWithSpace|min:19|max:19"
									name="Card Number"
								>
									<v-text-field
										v-model="cardNo"
										label="Card Number"
										placeholder="xxxx xxxx xxxx xxxx"
										@keyup="addSpace"
										outlined
										dense
										:error-messages="errors"
									></v-text-field>
								</validation-provider>
								<validation-provider
									v-slot="{ errors }"
									rules="required|numericWithSlace|min:5|max:5"
									name="Valid Thru"
								>
									<v-text-field
										v-model="validThru"
										label="Valid Thru"
										placeholder="xx/xx"
										@keyup="addSlace"
										outlined
										dense
										:error-messages="errors"
									></v-text-field>
								</validation-provider>
								<validation-provider
									v-slot="{ errors }"
									rules="required|numeric|min:3|max:3"
									name="CVV"
								>
									<v-text-field
										v-model="cvv"
										label="CVV"
										outlined
										dense
										:error-messages="errors"
									></v-text-field>
								</validation-provider>
							</v-col>
						</v-row>
					</v-card-text>

					<v-divider></v-divider>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn
							color="primary"
							small
							:disabled="invalid"
							@click="handleSubmit(addNewCard)"
						>
							Add
						</v-btn>
						<v-btn color="red" small outlined @click="closeDialog">
							Cancel
						</v-btn>
					</v-card-actions>
				</v-form>
			</validation-observer>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: {
		openDialog: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({
		name: '',
		cardNo: '',
		validThru: '',
		cvv: ''
	}),
	methods: {
		addSpace() {
			if (this.cardNo) {
				if ([4, 9, 14].indexOf(this.cardNo.length) !== -1) {
					this.cardNo += ' '
				}
			}
		},
		addSlace() {
			if (this.validThru) {
				if (this.validThru.length === 2) {
					this.validThru += '/'
				}
			}
		},
		addNewCard() {
			const cardData = {
				name: this.name,
				cardNo: this.cardNo,
				validThru: this.validThru,
				cvv: this.cvv,
				isFreezed: false
			}
			this.$store.dispatch('addNewCard', cardData)
			this.$store.dispatch('showAlert', {
				msg: 'New card details added',
				type: 'success'
			})
			this.closeDialog()
		},
		closeDialog() {
			this.name = ''
			this.cardNo = ''
			this.validThru = ''
			this.cvv = ''
			this.$refs.addCardForm.reset()
			this.$emit('closeDialog')
		}
	}
}
</script>

<style></style>
