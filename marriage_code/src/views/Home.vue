<template>
	<div id="container">
		<div class="box box__heading">
			“We meet our soulmates when we’re on our soul path.”
			<span>– Karen M. Black</span>
		</div>
		<div class="box box__button">
			<button type="button" class="btn">Check it out</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
<style scoped lang="scss">
#container {
	display: flex; /* establish flex container */
	flex-direction: column; /* make main axis vertical */
	justify-content: center; /* center items vertically, in this case */
	align-items: center; /* center items horizontally, in this case */
	background-image: linear-gradient(
			to bottom right,
			rgba(58, 97, 134, 0.3),
			rgba(137, 37, 62, 0.2)
		),
		url("../../src/assets/splashScreen4_veryHigh.jpg");
	background-size: cover;
	background-position: center;
	margin-bottom: 20px;
	margin-top: 15px;
	width: 98%;
	height: 97vh;
	border-radius: 30px;
	font-family: "Caveat", cursive;
	font-size: 30px;
	color: #258970;
	.box {
		margin: 5px;
		text-align: center; /* will center text in <p>, which is not a flex item */
		&__heading {
			padding: 10px;
			padding-top: 10px;
			padding-bottom: 15px;
			padding-right: 16px;
			border-radius: 15px;
			width: auto;
			height: auto;
			transform: translate(0, -200px);
			background: rgba(255, 255, 255, 0.9);
			box-shadow: 1px 5px 5px 0px rgba(0, 0, 0, 0.25);
			position: relative;
			span {
				font-family: "Roboto", sans-serif;
				font-weight: bold;
				font-size: 14px;
				position: absolute;
				bottom: 0;
				color: #054d48;
				right: 5px;
			}
		}
		&__button {
			color: #000000;
			font-family: Arial, Helvetica, sans-serif;
			transform: translate(0, -120px);
			font-family: "Changa", sans-serif;
			font-weight: 500;
			.btn {
				border-radius: 7px;
				padding: 10px;
				padding-left: 10px;
				padding-right: 10px;
				font-size: 18px;
				background: rgba(33, 123, 101, 0.51);
				box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.25);
			}
		}
	}
}
</style>
