<template>
	<div id="container">
		<div class="box">
			Choose your {{ colorName }}
			<span>– Karen M. Black</span>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component
export default class QuizPageWeb extends Vue {
	colorName = "blue"
}
</script>
<style lang="scss">
#container {
	display: flex; /* establish flex container */
	flex-direction: column; /* make main axis vertical */
	justify-content: center; /* center items vertically, in this case */
	align-items: center;
	height: 100vh;
	.box {
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px);
		border-radius: 10px;
		padding: 100px;
		transform: translateY(-100px);
	}
}
</style>
