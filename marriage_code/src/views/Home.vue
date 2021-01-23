<template>
	<div class="home">
		<div class="heading_box">
			“We meet our soulmates when we’re on our soul path.”
			<span>– Karen M. Black</span>
		</div>
		<div class="goButton">
			<button type="button" class="btn">Check it out</button>
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
	background-position: center top;
	margin-bottom: 20px;
	margin-top: 15px;
	width: 98%;
	height: 97vh;
	border-radius: 30px;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	font-family: "Caveat", cursive;
	font-size: 36px;
	color: #258970;
	.heading_box {
		padding: 20px;
		border-radius: 15px;
		width: auto;
		height: auto;
		transform: translate(15px, -200px);
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
	.goButton {
		color: #000000;
		font-family: Arial, Helvetica, sans-serif;
		transform: translate(-370px, -50px);
		font-family: "Changa", sans-serif;

		font-weight: 500;
		.btn {
			border-radius: 7px;
			padding: 10px;
			padding-left: 20px;
			padding-right: 20px;
			font-size: 18px;
			background: rgba(33, 123, 101, 0.51);
		}
	}
}
</style>
