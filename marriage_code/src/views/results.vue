<template>
    <div id="containerResults">
        <br>
        Test
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component
export default class Results extends Vue {
    

}
</script>
<style lang="scss" scoped>
#containerResults {
    display: flex;
	flex-direction: row;
    justify-content: center;
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
}
</style>