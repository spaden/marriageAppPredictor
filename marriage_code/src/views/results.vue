<template>
  <div id="containerResults">
    <div :class="isMobileView ? 'result__mobile' : 'result__web'">
      You will be married between 18 to 25 years of your age. The colors that you have choosen shows that you have a
      burning desire to get married sooner. For you getting married is one of your main priorities.
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component
export default class Results extends Vue {
  which = 4
  images_web = ["resultOne_web.jpg", "resultTwo_web.jpg", "resultThree_web.jpg", "resultFour_mobile.jpg", "resultFive_web.jpg"]
  images_mobile = ["resultOne_mobile.jpg", "resultTwo_mobile.jpg", "resultThree_mobile.jpg", "resultFour_mobile.jpg", "resultFive_mobile.jpg"]
  get isMobileView() {
    return this.$store.state.isMobileView
  }

  mounted() {
    const cont = document.getElementById("containerResults") as HTMLElement
    var req = `${this.images_web[this.which]}`
    if (this.isMobileView) {
      req = `${this.images_mobile[this.which]}`
    }
    const reqq = `${require("@/assets/" + req)}`
    cont.style.backgroundImage = `linear-gradient(to bottom right, rgba(58, 97, 134, 0.7), rgba(137, 37, 62, 0.8)), url('${reqq}')`
  }
}
</script>
<style lang="scss" scoped>
#containerResults {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, rgba(58, 97, 134, 0.7), rgba(137, 37, 62, 0.8)),
    url("../../src/assets/home_mobile.jpg");
  background-size: cover;
  background-position: center;
  margin: 5px 5px;
  width: 98.8%;
  height: 99vh;
  border-radius: 20px;
  .result__web {
    min-width: 200px;
    max-width: 800px;
    margin: 0px 12px;
    height: fit-content;
    transform: translateY(-90px);
    padding: 20px;
    color: #201783;
    font-family: "Caveat", cursive;
    font-size: 30px;
    background: rgba(255, 255, 255, 0.28);
    backdrop-filter: blur(6px);
    border-radius: 19px;
  }

  .result__mobile {
    min-width: 200px;
    max-width: 500px;
    margin: 0px 12px;
    height: fit-content;
    transform: translateY(-80px);
    padding: 20px;
    color: #201783;
    font-family: "Caveat", cursive;
    font-size: 23px;
    background: rgba(255, 255, 255, 0.28);
    backdrop-filter: blur(6px);
    border-radius: 19px;
  }
}
</style>
