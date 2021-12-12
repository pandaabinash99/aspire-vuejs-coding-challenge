<template>
	<v-dialog v-model="openDialog" max-width="500px" persistent>
		<v-card>
			<v-card-title class="text-h6 primary white--text">
				Are you sure !
			</v-card-title>

			<v-card-text class="subtitle-1 pt-4" style="min-height: 100px">
				This will delete your card details permanently. Are you sure to cancel
				the card ?
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" small @click="confirmAction"> Ok </v-btn>
				<v-btn color="red" small outlined @click="closeDialog"> Cancel </v-btn>
			</v-card-actions>
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
	methods: {
		confirmAction() {
			this.$emit('confirm')
		},
		closeDialog() {
			this.$emit('closeDialog')
		}
	}
}
</script>

<style></style>
