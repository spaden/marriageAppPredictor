<template>
	<div id="app">
		<router-view />
		<div class="testAudio">
			<iframe
				width="1"
				height="1"
				src="https://www.youtube.com/embed/FJUYcXNznb8?autoplay=1&start=35"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router from "./router";

@Component
export default class App extends Vue {
	mounted() {
		console.log("testing app");
		window.addEventListener("resize", () => {
			var width = window.innerWidth;
			if (width <= 1024) {
				console.log("mobile");
				router.push({ path: "home_m" });
			} else {
				router.push("/");
			}
		});
	}
}
</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	display: flex;
	justify-content: center;
}
</style>
