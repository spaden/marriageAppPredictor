<template>
	<div class="parent">
		<div v-if="!isMobileView" id="container">
			<div class="box__heading">
				“We meet our soulmates when we’re on our soul path.”
				<span>– Karen M. Black</span>
			</div>
			<div class="box__button">
				<button @click="goNext" type="button" class="btn">Check it out</button>
			</div>
		</div>
		<div v-else id="container2">
			<div class="box box__heading">
				“We meet our soulmates when we’re on our soul path.”
				<span>– Karen M. Black</span>
			</div>
			<div class="box box__button">
				<heart-button @iconClicked="goNext"></heart-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import router from "../router"
import HeartButton from "../assets/heartButton.vue"

@Component({
	components: {
		HeartButton,
	},
})
export default class Home extends Vue {
	get isMobileView() {
		return this.$store.state.isMobileView
	}

	goNext() {
		if (this.$router.currentRoute.path === "/") {
			this.$router.push("/quiz")
		}
	}
}
</script>
<style scoped lang="scss">
.parent {
	width: 100%;
}
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
	margin: 10px auto;
	width: 98%;
	height: 98vh;
	border-radius: 30px;
	font-family: "Caveat", cursive;
	font-size: 30px;
	color: #258970;
	.box {
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
#container2 {
	display: flex; /* establish flex container */
	flex-direction: column; /* make main axis vertical */
	justify-content: center; /* center items vertically, in this case */
	align-items: center; /* center items horizontally, in this case */
	background-image: linear-gradient(
			to bottom right,
			rgba(58, 97, 134, 0.7),
			rgba(137, 37, 62, 0.8)
		),
		url("../../src/assets/home_mobile.jpg");
	background-size: cover;
	background-position: center;
	margin: 10px auto;
	width: 98%;
	height: 98vh;
	border-radius: 30px;
	font-family: "Caveat", cursive;
	font-size: 25px;
	font-weight: 600;
	color: #8075f7;
	.box {
		text-align: center; /* will center text in <p>, which is not a flex item */
		&__heading {
			padding: 8px;
			border-radius: 15px;
			width: auto;
			height: auto;
			margin-left: 10px;
			margin-right: 10px;
			transform: translate(0, -150px);
			background: rgba(255, 255, 255, 0.7);
			box-shadow: 1px 5px 5px 0px rgba(0, 0, 0, 0.25);
			position: relative;
			span {
				font-family: "Roboto", sans-serif;
				font-weight: bold;
				font-size: 10px;
				position: absolute;
				bottom: 0;
				color: #ed5b87;
				right: 8px;
			}
		}
		&__button {
			color: #000000;
			font-family: Arial, Helvetica, sans-serif;
			transform: translate(0, -50px);
			font-family: "Changa", sans-serif;
			font-weight: 500;
		}
	}
}
</style>
