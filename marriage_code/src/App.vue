<template>
  <div id="app">
    <router-view />
    <div class="testAudio">
      <iframe
        id="songBackground"
        width="0.2"
        height="0.2"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { set } from "vue/types/umd"
import router from "./router"
import { ImageQuestion, ColorsQuestion, MapResults } from "@/utilities/mapObject"
/* eslint-disable */
@Component
export default class App extends Vue {
  testSrc = [
    "https://www.youtube.com/embed/w8YVqBs6kyE?autoplay=1&start=10",
    "https://www.youtube.com/embed/3UwVodF5Yu8?autoplay=1&start=28",
  ]

  mounted() {
    if (window.innerWidth <= 500) {
      this.$store.dispatch("changeView", true)
    }
    window.addEventListener("resize", () => {
      const width = window.innerWidth
      if (width <= 770) {
        this.$store.dispatch("changeView", true)
      } else if (width > 1024) {
        this.$store.dispatch("changeView", false)
      }
    })
    const item = Math.floor(Math.random() * this.testSrc.length)
    const iframe = document.getElementById("songBackground") as HTMLElement

    iframe.setAttribute("src", this.testSrc[item])

    /*setTimeout(() => {
			if (item === 1) {
				setTimeout(() => {
					iframe.setAttribute("src", this.testSrc[0])
				}, 4000)
			} else {
				setTimeout(() => {
					iframe.setAttribute("src", this.testSrc[1])
				}, 4000)
			}
		}, 235000)*/
    this.generateQuestions()
  }

  generateQuestions() {
    const colorQuestions = ["Blue", "Red", "Yellow", "Violet", "Orange"]
    const colors = [
      ["#97FBEC", "#2486FB", "#122EF9"],
      ["#E3451B", "#FF5733", "#C91F09"],
      ["#FCE104", "#DFD264", "#AD9E24"],
      ["#BF09FC", "#BF79D6", "#6C2A82"],
      ["#EF8224", "#F2A349", "#F76E0F"],
    ]
    const weights = [
      [30, 10, 20],
      [10, 30, 20],
      [30, 20, 10],
      [20, 10, 30],
      [10, 30, 20],
    ]
    var colorObjs: Array<ColorsQuestion> = []
    for (var i = 0; i < 5; i++) {
      const colorQuestionObj = new ColorsQuestion(colors[i], colorQuestions[i])
      colorObjs.push(colorQuestionObj)
    }

    var imageObjs: Array<ImageQuestion> = []
    const images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"]
    for (var i = 0; i < images.length; i++) {
      const imgObj = new ImageQuestion(images[i], weights[i])
      imageObjs.push(imgObj)
    }

    var wholeObjs = new MapResults(colorObjs, imageObjs).questionsWhole()
    this.$store.dispatch('addWholeObjs', wholeObjs)
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  display: flex;
  justify-content: center;
}
</style>
