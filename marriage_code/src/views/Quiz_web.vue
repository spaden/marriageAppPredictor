<template>
	<div id="container">
		<div class="box">
			Choose your {{ colorName }}
		
			<div class="box__choose">
				<span class="circle circle__left">
					<svg height="100" width="100">
						<circle cx="50" cy="50" r="35" stroke="black" stroke-width="0.2" fill="#BF09FC" />
					</svg>
				</span>
				<span class="circle cirlce__middle">
					<svg height="100" width="100">
						<circle cx="50" cy="50" r="35" stroke="black" stroke-width="0.2" fill="#BF79D6" />
					</svg>
				</span>
				<span class="circle circle__left">
					<svg height="100" width="100">
						<circle cx="50" cy="50" r="35" stroke="black" stroke-width="0.2" fill="#6C2A82" />
					</svg>
				</span>
			</div>
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
		font-size: 30px;
		font-family: "Changa", sans-serif;
		font-weight: bold;
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px);
		border-radius: 10px;
		padding: 50px;
		transform: translateY(-100px);

		&__choose {
			margin-top: 30px;
			.circle {
				margin: 60px;
			}
		}
	}
}
</style>
