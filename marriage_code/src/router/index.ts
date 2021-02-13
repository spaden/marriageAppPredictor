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
		path: "/quiz",
		name: "Quiz",
		component: () => import("../views/Quiz_web.vue"),
	},
	{
		path: "/result",
		name: "Result",
		component: () => import("../views/results.vue")
	}
];

const router = new VueRouter({
	routes,
});

export default router;
