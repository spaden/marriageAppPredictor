<template>
	<svg
		@click="onClick"
		width="80"
		height="80"
		viewBox="0 0 88 90"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g opacity="0.8" filter="url(#filter0_d)">
			<path
				d="M75.1667 42.5171C75.1667 62.0279 59.8312 77.9167 41 77.9167C22.1688 77.9167 6.83333 62.0279 6.83333 42.5171C6.83333 22.9722 22.1688 7.08337 41 7.08337C59.8312 7.08337 75.1667 22.9722 75.1667 42.5171Z"
				fill="#8075F7"
			/>
		</g>
		<g filter="url(#filter1_d)">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M40.761 50.8538C38.5904 49.5179 36.5711 47.9456 34.7393 46.1652C33.4514 44.8829 32.471 43.3198 31.8731 41.5954C30.7971 38.2503 32.0539 34.4208 35.5711 33.2875C37.4196 32.6924 39.4384 33.0326 40.9961 34.2015C42.5543 33.034 44.5725 32.694 46.4211 33.2875C49.9383 34.4208 51.2041 38.2503 50.1281 41.5954C49.5302 43.3198 48.5498 44.8829 47.2619 46.1652C45.4301 47.9456 43.4108 49.5179 41.2402 50.8538L41.0051 51L40.761 50.8538Z"
				fill="#E5658C"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M40.761 50.8538C38.5904 49.5179 36.5711 47.9456 34.7393 46.1652C33.4514 44.8829 32.471 43.3198 31.8731 41.5954C30.7971 38.2503 32.0539 34.4208 35.5711 33.2875C37.4196 32.6924 39.4384 33.0326 40.9961 34.2015C42.5543 33.034 44.5725 32.694 46.4211 33.2875C49.9383 34.4208 51.2041 38.2503 50.1281 41.5954C49.5302 43.3198 48.5498 44.8829 47.2619 46.1652C45.4301 47.9456 43.4108 49.5179 41.2402 50.8538L41.0051 51L40.761 50.8538Z"
				stroke="url(#paint0_linear)"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<path
			d="M44.7393 37.053C45.8046 37.3933 46.5615 38.3497 46.6561 39.475"
			stroke="#200E32"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<defs>
			<filter
				id="filter0_d"
				x="0.833328"
				y="1.08337"
				width="86.3333"
				height="88.8333"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dx="3" dy="3" />
				<feGaussianBlur stdDeviation="4.5" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow"
					result="shape"
				/>
			</filter>
			<filter
				id="filter1_d"
				x="28.7534"
				y="32.25"
				width="24.4933"
				height="24.5"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy="3" />
				<feGaussianBlur stdDeviation="1" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow"
					result="shape"
				/>
			</filter>
			<linearGradient
				id="paint0_linear"
				x1="41"
				y1="33"
				x2="41"
				y2="51"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#9A486D" />
				<stop offset="1" stop-color="#8E1A4E" stop-opacity="0.87" />
			</linearGradient>
		</defs>
	</svg>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class HeartButton extends Vue {
	onClick() {
		console.log("test")
		this.$emit("iconClicked")
	}
}
</script>
<style lang="sass" scoped></style>
