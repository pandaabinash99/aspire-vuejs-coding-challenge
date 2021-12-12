<template>
	<div>
		<div
			@click="showCardNo = !showCardNo"
			class="show-card-toggle text-right secondary--text mr-12"
		>
			<v-icon class="mr-2" color="secondary"
				>{{ showCardNo ? 'mdi-eye-off' : 'mdi-eye' }} mdi-18px</v-icon
			>
			<span>{{ showCardNo ? 'Hide' : 'Show' }} card number</span>
		</div>
		<v-card
			outlined
			class="mx-auto"
			style="border-radius: 15px"
			max-width="380"
			:color="card.isFreezed ? 'grey lighten-1' : 'secondary'"
		>
			<v-card-text class="pa-6">
				<!-- organization logo -->
				<div class="text-right">
					<img src="@/assets/imgs/AspireLogoWhite.svg" alt="logo" />
				</div>
				<!-- card holder name -->
				<div class="card-owner font-weight-bold mt-5 mb-7 white--text">
					{{ card.name }}
				</div>

				<!-- card number & dots -->
				<!-- numbers hidden -->
				<div v-if="!showCardNo" class="d-flex mb-4">
					<div class="dot-div" v-for="i in 3" :key="`dotDiv-${i}`">
						<span class="dot" v-for="i in 4" :key="`dot-${i}`"></span>
					</div>
					<div class="white-bold card-no">
						{{ card.cardNo.split(' ')[3] }}
					</div>
				</div>
				<!-- numbers visible -->
				<div v-else class="d-flex mb-4">
					<div
						class="dot-div"
						v-for="(num, i) in card.cardNo.split(' ')"
						:key="`num-${i}`"
					>
						<div class="white-bold card-no">
							{{ num }}
						</div>
					</div>
				</div>

				<!-- validity & cvv -->
				<div class="d-flex">
					<div class="white-bold card-validity">Thru: {{ card.validThru }}</div>
					<div class="white-bold card-cvv">
						CVV:
						<span class="cvv-stars" v-for="i in 3" :key="`star-${i}`">*</span>
					</div>
				</div>
				<!-- brand logo -->
				<div class="text-right">
					<img src="@/assets/imgs/VisaLogo.svg" alt="logo" />
				</div>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		showCardNo: false
	})
}
</script>

<style scoped>
.show-card-toggle {
	font-weight: bold;
	font-size: 0.7rem;
	cursor: pointer;
	user-select: none;
}
.card-owner {
	font-size: 1.6rem;
	letter-spacing: 1px;
}
.dot-div {
	margin-right: 15px;
}
.dot {
	height: 8px;
	width: 8px;
	margin-right: 5px;
	background-color: #ffffff;
	border-radius: 50%;
	display: inline-block;
}
.white-bold {
	color: #ffffff;
	font-weight: bold;
}
.card-no {
	letter-spacing: 4px;
}
.card-validity {
	margin-right: 35px;
}
.cvv-stars {
	margin: 2px;
	font-size: 1.3rem;
}
</style>
