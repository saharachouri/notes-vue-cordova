import Router from 'vue-router';
import Vue from 'vue';

import Create from './components/create.vue';
import Home from './components/Home.vue';

Vue.use(Router)

export const wsURL ="http://localhost:5000";

export const routes =[
	{
		path: '',
		name: 'home',
		component: Home
	},

	{
		path: '/create',
		name: 'create',
		component: Create 
	},
];