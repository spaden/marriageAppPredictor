<template>
	<div id="app">
		<router-view />
		<div class="testAudio">
			<iframe
				id="songBackground"
				width="0.2"
				height="0.2"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { set } from "vue/types/umd"
import router from "./router"

@Component
export default class App extends Vue {
	testSrc = [
		"https://www.youtube.com/embed/w8YVqBs6kyE?autoplay=1&start=10",
		"https://www.youtube.com/embed/3UwVodF5Yu8?autoplay=1&start=30&end=210",
	]

	mounted() {
		console.log("testing app")
		window.addEventListener("resize", () => {
			const width = window.innerWidth
			console.log(this.$router.currentRoute.path)
			if (width <= 1024 && this.$router.currentRoute.path === "/") {
				console.log("mobile")
				router.push({ path: "home_m" })
			} else if (width > 1024 && this.$router.currentRoute.path === "/home_m") {
				router.push("/")
			}
		})
		const item = Math.floor(Math.random() * this.testSrc.length)
		const iframe = document.getElementById("songBackground") as HTMLElement

		iframe.setAttribute("src", this.testSrc[item])

		setTimeout(() => {
			if (item === 1) {
				setTimeout(() => {
					iframe.setAttribute("src", this.testSrc[0])
				}, 4000)
			} else {
				setTimeout(() => {
					iframe.setAttribute("src", this.testSrc[1])
				}, 4000)
			}
		}, 235000)
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
