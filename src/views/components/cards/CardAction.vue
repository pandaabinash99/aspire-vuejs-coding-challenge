<template>
	<div class="d-flex flex-column mx-3">
		<img
			:src="getImgUrl(img)"
			alt="logo"
			width="32"
			class="mx-auto pointer"
			@click="actionClicked"
		/>
		<div class="action-title text-center mt-2">{{ label }}</div>
	</div>
</template>

<script>
import utils from '@/utils/utils'
export default {
	props: {
		label: {
			type: String,
			required: true
		},
		img: {
			type: String,
			required: true
		}
	},
	methods: {
		actionClicked() {
			this.$emit('actionClicked')
		},
		getImgUrl(img) {
			return utils.getImgUrl(img)
		}
	}
}
</script>

<style scoped>
.pointer {
	cursor: pointer;
}
.action-title {
	font-size: 0.7rem;
	color: #0c365a;
	line-height: 1rem;
}
</style>
