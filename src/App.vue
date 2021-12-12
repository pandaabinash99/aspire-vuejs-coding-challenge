<template>
	<v-app>
		<sidebar />
		<v-main>
			<router-view />
			<alert class="alert-style" />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	data: () => ({
		//
	}),

	components: {
		sidebar: () => import('./components/Sidebar.vue'),
		alert: () => import('./components/Alert.vue')
	}
}
</script>

<style>
* {
	font-family: 'Open Sans', sans-serif;
}
.alert-style {
	position: absolute;
	top: 10px;
	right: 10px;
}
</style>
