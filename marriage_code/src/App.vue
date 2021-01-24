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
