<template>
	<v-expansion-panel>
		<v-expansion-panel-header class="expansion-header">
			<slot name="header"></slot>
		</v-expansion-panel-header>
		<v-expansion-panel-content color="#fff">
			<slot name="body"></slot>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
export default {}
</script>

<style scoped></style>
