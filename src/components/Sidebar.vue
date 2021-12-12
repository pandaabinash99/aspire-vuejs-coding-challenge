<template>
	<v-navigation-drawer app width="280" permanent floating dark color="primary">
		<v-container class="pa-4">
			<!-- brand logo -->
			<div class="mx-4 mt-6 mb-10">
				<img src="../assets/imgs/AspireLogo.svg" alt="logo" />
				<!-- catch line -->
				<p class="catch-line">
					Trusted way of banking for 3000+ SMEs and startups in Singapore
				</p>
			</div>
			<!-- nav menu -->
			<v-list flat>
				<v-list-item-group v-model="selectedItem" color="primary">
					<v-list-item
						v-for="(item, i) in navItems"
						:key="i"
						color="secondary"
						class="my-4"
						:to="item.to"
					>
						<v-list-item-icon>
							<img :src="getImgUrl(item.icon)" :alt="item.text" />
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title v-text="item.text"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-container>
	</v-navigation-drawer>
</template>

<script>
import utils from '../utils/utils'
export default {
	name: 'Sidebar',

	data: () => ({
		selectedItem: 1,
		navItems: [
			{ text: 'Home', icon: 'Home.svg', to: '/home' },
			{ text: 'Cards', icon: 'Card.svg', to: '/' },
			{ text: 'Payments', icon: 'Payments.svg', to: '/payments' },
			{ text: 'Credit', icon: 'Credit.svg', to: '/credit' },
			{ text: 'Settings', icon: 'Account.svg', to: '/settings' }
		]
	}),
	methods: {
		getImgUrl(img) {
			return utils.getImgUrl(img)
		}
	}
}
</script>

<style scoped>
.catch-line {
	margin: 1rem 0;
	font-size: 0.8rem;
	color: #ffffff;
	opacity: 0.6;
}
</style>
