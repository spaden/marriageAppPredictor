<template>
  <div id="containerResults">
    <div :class="isMobileView ? 'result__mobile' : 'result__web'">
      {{res}}
    </div>
    <br>
    <div :class="isMobileView ? 'sharePlz__mobile': 'sharePlz__web'">
     {{sharePlz}}
      <i class="fa fa-share-alt" 
         aria-hidden="true"
         @click="copyToClipboard"></i>
      <textarea id="testCopy"></textarea>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component
export default class Results extends Vue {
  which: number = 0
  res = ''
  sharePlz = 'Please share this result with your friends!'
  images_web = [
    "resultOne_web.jpg", 
    "resultTwo_web.jpg", 
    "resultThree_web.jpg", 
    "resultFour_mobile.jpg", 
    "resultFive_web.jpg"
  ]
  images_mobile = [
    "resultOne_mobile.jpg", 
    "resultTwo_mobile.jpg", 
    "resultThree_mobile.jpg", 
    "resultFour_mobile.jpg", 
    "resultFive_mobile.jpg"
  ]

  marriageAge = [
    "You will be married between 18 to 25 years of your age. The colors that you have choosen shows that you have a burning desire to get married. For you getting married is one of your main priorities.",
    "You will be married between 26 to 35 years. The colors that you have choosen shows that you see marriage as something normal and natural. You do not want to get married way too early, you wanna discover new things and enjoy life",
    "You will be married between 36 to 45 years. The colors that you have choosen shows that you are someone who is looking for wisdom, experience and stability before embarking on this life. You certainly have other priorities in life, like realizing your dreams first, getting your hands on business with new ideas. Then marriage will come later.",
    "You will be married between over 45 years. The colors you have choosen show that you only wish to marry later in life because you see marriage as a prison and you still want to enjoy your freedom.",
    "The colors you have choosen shows that you see marriage in a very negative way. It doesn't mean that you will not find your soulmate, instead you just don't want to get married."
  ]

  get isMobileView() {
    return this.$store.state.isMobileView
  }

  mounted() {
    console.log(this.$route.params)
    this.which = parseInt(this.$route.params.qy)
    this.res = this.marriageAge[this.which]
    const cont = document.getElementById("containerResults") as HTMLElement
    var req = `${this.images_web[this.which]}`
    if (this.isMobileView) {
      req = `${this.images_mobile[this.which]}`
    }
    const reqq = `${require("@/assets/" + req)}`
    cont.style.backgroundImage = `linear-gradient(to bottom right, rgba(58, 97, 134, 0.7), rgba(137, 37, 62, 0.8)), url('${reqq}')`
  }

  copyToClipboard() {
    const url = `http://localhost:8080/#/result/${this.which}/reff`
    const copyUrl = document.getElementById('testCopy') as any
    copyUrl.textContent = url
    copyUrl.select()
    try {
      this.sharePlz = 'You have copied the link! Yay!!'
      setTimeout(() => {
        this.sharePlz = 'Please share this result with your friends!'
      }, 3000)
      document.execCommand("copy")
    } catch {
       console.log('error')
    }
  }
}
</script>
<style lang="scss" scoped>
#containerResults {
  display: flex;
  flex-direction: column;
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
  position: relative;
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
 
  .sharePlz__web {
    color: #7FB3D5;
    position: absolute;
    bottom: 20px;
    i {
      margin-left: 10px;
      font-size: 35px;
      transform: translateY(6px);
      color: #2471A3;
    }
    #testCopy {
      width: 0px;
      height: 0px;
      position: absolute;
      right: 5px;
      top: 10px;
      z-index: -1;
      background-color: transparent;
    }  
  }


  .sharePlz__mobile {
    color: #7FB3D5;
    position: absolute;
    bottom: 20px;
    font-size: 15px;
    i {
      margin-left: 10px;
      font-size: 35px;
      transform: translateY(6px);
      color: #2471A3;
    }
    #testCopy {
      width: 0px;
      height: 0px;
      position: absolute;
      right: 5px;
      top: 10px;
      z-index: -1;
      background-color: transparent;
    }  
  }
}
</style>
