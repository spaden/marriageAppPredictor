import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/home_m",
		name: "Home_m",
		component: () => import("../views/Home_mobile.vue"),
	},
	{
		path: "/quiz",
		name: "Quiz",
		component: () => import("../views/Quiz_web.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
