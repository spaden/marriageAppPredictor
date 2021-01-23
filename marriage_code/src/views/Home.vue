<template>
	<div class="home">
		<div class="heading_box">
			“We meet our soulmates when we’re on our soul path.”
			<span>– Karen M. Black</span>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
	components: {
		HelloWorld,
	},
})
export default class Home extends Vue {}
</script>
<style scoped lang="scss">
.home {
	background-image: url("../../src/assets/splashScreen4_veryHigh.jpg");
	background-size: cover;
	background-position: center;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 98%;
	height: 97vh;
	border-radius: 30px;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	font-family: "Caveat", cursive;
	font-size: 36px;
	.heading_box {
		color: #258970;
		padding: 20px;
		border-radius: 15px;
		width: auto;
		height: auto;
		transform: translate(0, -200px);
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 1px 5px 5px 0px rgba(0, 0, 0, 0.25);
		position: relative;

		span {
			font-family: "Roboto", sans-serif;
			font-style: italic;
			font-size: 18px;
			position: absolute;
			bottom: 0;
			color: #054d48;
			right: 10px;
		}
	}
}
</style>
