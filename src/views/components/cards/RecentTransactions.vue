<template>
	<expansion-panel class="expansion py-3 elevation-0 mb-4">
		<template v-slot:header>
			<div class="expansion-header d-flex align-center">
				<img src="@/assets/imgs/RecentTransactionIcon.svg" alt="card details" />
				<span class="ml-4 text--primary">Recent Transactions</span>
			</div>
		</template>
		<template v-slot:body>
			<v-card flat class="pt-4">
				<p class="text-justify">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</v-card>
		</template>
	</expansion-panel>
</template>

<script>
export default {
	components: {
		'expansion-panel': () => import('../../../components/ExpansionPanel.vue')
	}
}
</script>

<style scoped>
.expansion {
	background: #edf3ff !important;
	max-width: 380px;
	border-radius: 10px;
}
</style>
