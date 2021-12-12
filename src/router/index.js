import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/',
		name: 'Cards',
		component: () => import('../views/Cards.vue')
	},
	{
		path: '/payments',
		name: 'Payments',
		component: () => import('../views/Payments.vue')
	},
	{
		path: '/credit',
		name: 'Credit',
		component: () => import('../views/Credit.vue')
	},
	{
		path: '/settings',
		name: 'Settings',
		component: () => import('../views/Settings.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
