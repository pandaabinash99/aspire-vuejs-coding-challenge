<template>
	<v-container class="ma-15 pa-0">
		<div class="small-title">Available balance</div>
		<v-row class="ma-0" style="max-width: 1050px">
			<v-col cols="12" class="ma-0 pa-0 d-flex align-center">
				<div class="currency-indicator">S$</div>
				<div class="amount pl-2">3,000</div>
				<v-spacer />
				<v-btn
					small
					color="#325BAF"
					class="mr-2 white--text text-capitalize"
					@click="openAddCardDialog = true"
				>
					<v-icon left>mdi-plus-circle</v-icon>
					New card
				</v-btn>
			</v-col>
		</v-row>
		<!-- cards section -->
		<v-row class="mt-8">
			<v-col cols="12" class="ma-0 pa-0">
				<!-- tabs -->
				<v-tabs v-model="tab" style="height: 1.8rem">
					<v-tab key="myDebitCards" class="tab-name" active-class="active-tab">
						My debit cards
					</v-tab>
					<v-tab
						key="allCompanyCards"
						class="tab-name"
						active-class="active-tab"
					>
						All company cards
					</v-tab>
				</v-tabs>
				<!-- tab items -->
				<v-tabs-items v-model="tab" class="px-1 py-4">
					<!-- tab 1 -->
					<v-tab-item key="myDebitCards">
						<v-card max-width="1050px">
							<v-card-text class="px-6 py-5">
								<v-row>
									<v-col cols="12" sm="6">
										<!-- cards -->
										<card-carousel />
									</v-col>
									<!-- expansion panel -->
									<v-col cols="12" sm="6">
										<div class="mt-6 mx-auto">
											<v-expansion-panels>
												<card-details />
												<recent-transactions />
											</v-expansion-panels>
										</div>
									</v-col>
								</v-row>
							</v-card-text>
						</v-card>
					</v-tab-item>
					<!-- tab 2 -->
					<v-tab-item key="allCompanyCards">
						<v-card max-width="1050px" min-height="240px">
							<v-card-text>
								<h3>All company cards</h3>
							</v-card-text>
						</v-card>
					</v-tab-item>
				</v-tabs-items>
			</v-col>
		</v-row>
		<!-- add card dialog -->
		<add-new-card
			:openDialog="openAddCardDialog"
			@closeDialog="openAddCardDialog = false"
		/>
	</v-container>
</template>

<script>
import utils from '../utils/utils'
export default {
	name: 'Cards',
	data: () => ({
		tab: 0,
		openAddCardDialog: false
	}),
	method: {
		getImgUrl(img) {
			return utils.getImgUrl(img)
		}
	},
	components: {
		'card-carousel': () => import('./components/cards/CardCarousel.vue'),
		'add-new-card': () => import('./components/cards/AddNewCard.vue'),
		'card-details': () => import('./components/cards/CardDetails.vue'),
		'recent-transactions': () =>
			import('./components/cards/RecentTransactions.vue')
	}
}
</script>

<style scoped>
.small-title {
	font-size: 0.8rem;
}
.currency-indicator {
	background: #01d167;
	color: #ffffff;
	height: 1.2rem;
	font-size: 0.7rem;
	font-weight: bold;
	padding: 0rem 0.6rem;
	border-radius: 12%;
}
.amount {
	font-size: 1.4rem;
	font-weight: bold;
}
.tab-name {
	text-transform: none;
	font-size: 0.8rem;
	letter-spacing: 0;
	margin-right: 0.8rem;
	padding: 0 5px;
	height: 1.8rem;
}
.active-tab {
	font-weight: bold;
	border-bottom: 3px solid #23cefd;
}
</style>
