<template>
  <div id="container">
    <div class="box box__heading">
      “We meet our soulmates when we’re on our soul path.”
      <span>– Karen M. Black</span>
    </div>
    <div class="box box__button">
        <heart-button></heart-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeartButton from '../assets/heartButton.vue'

@Component({
  components: {
    HeartButton
  }
})
export default class HomeMobile extends Vue {}
</script>
<style scoped lang="scss">
#container {
  display: flex; /* establish flex container */
  flex-direction: column; /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center; /* center items horizontally, in this case */
  background-image: linear-gradient(to bottom right, rgba(58, 97, 134, 0.7), rgba(137, 37, 62, 0.8)),
    url("../../src/assets/home_mobile.jpg");
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  margin-top: 15px;
  width: 98%;
  height: 97vh;
  border-radius: 30px;
  font-family: "Caveat", cursive;
  font-size: 25px;
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
