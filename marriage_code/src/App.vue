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
		"https://www.youtube.com/embed/3UwVodF5Yu8?autoplay=1&start=28",
	]

	mounted() {
		if (window.innerWidth <= 500) {
			this.$store.dispatch("changeView", true)
		}
		window.addEventListener("resize", () => {
			const width = window.innerWidth
			if (width <= 770) {
				this.$store.dispatch("changeView", true)
			} else if (width > 1024) {
				this.$store.dispatch("changeView", false)
			}
		})
		const item = Math.floor(Math.random() * this.testSrc.length)
		const iframe = document.getElementById("songBackground") as HTMLElement

		iframe.setAttribute("src", this.testSrc[item])

		/*setTimeout(() => {
			if (item === 1) {
				setTimeout(() => {
					iframe.setAttribute("src", this.testSrc[0])
				}, 4000)
			} else {
				setTimeout(() => {
					iframe.setAttribute("src", this.testSrc[1])
				}, 4000)
			}
		}, 235000)*/
	}
}
</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	// text-align: center;
	display: flex;
	justify-content: center;
}
</style>
