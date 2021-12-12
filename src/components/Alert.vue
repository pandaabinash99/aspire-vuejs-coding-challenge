<template>
	<v-layout>
		<!-- this.$store.dispatch('showAlert', { msg: 'Invalid', type: 'error' }); -->
		<v-alert
			v-model="alert"
			dismissible
			close-icon="mdi-close"
			elevation="5"
			transition="slide-x-reverse-transition"
			:icon="showIcon"
			:type="alertType"
		>
			{{ alertMsg }}
		</v-alert>
	</v-layout>
</template>

<script>
export default {
	data: () => ({
		showIcon: false
	}),
	computed: {
		alertType() {
			return this.$store.state.alertType
		},
		alertMsg() {
			return this.$store.state.alertMsg
		},
		alert: {
			get: function () {
				return this.$store.state.alert || false
			},
			set: function (value) {
				this.$store.state.alert = value
			}
		}
	},
	watch: {
		alert: function () {
			if (this.$store.state.alert) {
				setTimeout(() => {
					this.$store.dispatch('closeAlert')
				}, 5000)
			}
		}
	}
}
</script>

<style scopped>
.v-alert {
	position: absolute;
	top: 10px;
	right: 10px;
}
</style>
