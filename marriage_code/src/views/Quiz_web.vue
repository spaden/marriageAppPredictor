<template>
  <div id="container">
    <div v-if="multipleChoiceView && !isMobileView && !buttonClicked" class="box">
      Choose your {{ currentObj.question }}
      <div class="box__choose">
        <span class="circle circle__left">
          <svg height="100" width="100">
            <circle cx="50" 
                    cy="50" 
                    r="35" 
                    stroke="black" 
                    stroke-width="0.2" 
                    :fill="currentObj.colors[0]"
                    @click="optionClicked(0)" />
          </svg>
        </span>
        <span class="circle cirlce__middle">
          <svg height="100" 
               width="100">
            <circle cx="50" 
                    cy="50"
                    r="35"
                    stroke="black" 
                    stroke-width="0.2" 
                    :fill="currentObj.colors[1]"
                    @click="optionClicked(1)" />
          </svg>
        </span>
        <span class="circle circle__left">
          <svg height="100"
               width="100">
            <circle cx="50" 
                    cy="50"
                    r="35" 
                    stroke="black" 
                    stroke-width="0.2" 
                    :fill="currentObj.colors[2]"
                    @click="optionClicked(2)" />
          </svg>
        </span>
      </div>
    </div>

    <div v-if="multipleChoiceView && isMobileView" class="box">
      Choose your {{ currentObj.question }}

      <div class="box__choose--mobile">
        <span class="circle circle__left">
          <svg height="40" 
               width="40">
            <circle cx="20" 
                    cy="20" 
                    r="20" 
                    stroke="black" 
                    stroke-width="0.2" 
                    :fill="currentObj.colors[0]"
                    @click="optionClicked(0)" />
          </svg>
        </span>
        <span class="circle cirlce__middle">
          <svg height="40"
               width="40">
            <circle cx="20" 
                    cy="20" 
                    r="20" 
                    stroke="black" 
                    stroke-width="0.2" 
                    :fill="currentObj.colors[1]"
                    @click="optionClicked(1)" />
          </svg>
        </span>
        <span class="circle circle__left">
          <svg height="40" 
               width="40">
            <circle cx="20" 
                    cy="20" 
                    r="20" 
                    stroke="black" 
                    stroke-width="0.2" 
                    :fill="currentObj.colors[2]"
                    @click="optionClicked(2)" />
          </svg>
        </span>
      </div>
    </div>

    <div v-else-if="!multipleChoiceView && !isMobileView" 
         class="box box__imageview">
      <transition name="fade">   
        <div v-if="!buttonClicked"
             class="image">
            <img width="400px"
                height="385px"
                :src="this.currentObj.image"/>
        </div>
      </transition>
      <div v-if="buttonClicked"
           class="quote__web">
             {{backQuote}}
      </div>
      <transition name="fade">
        <div class="buttonsSelect"
             v-if="!buttonClicked">
          Do you like the picture?
          <div class="emojiButtons">
            <div class="emojiText">
              <img width="50px" 
                  height="50px" 
                  src="/assets/in_love.PNG"
                  @click="optionClicked(0)" />
              <p>Yes</p>
            </div>
            <div class="emojiText">
              <img width="50px" 
                  height="50px" 
                  src="/assets/vomit.PNG"
                  @click="optionClicked(1)" />
              <p>No</p>
            </div>
            <div class="emojiText">
              <img width="50px" 
                  height="50px"
                  src="/assets/observer.PNG"
                  @click="optionClicked(2)" />
              <p>Not Really</p>
            </div>
          </div>   
        </div>
      </transition>
    </div>
   
    <div v-else-if="!multipleChoiceView && isMobileView" class="box__imageview--mobile">
      <transition name="fade__mobile">
        <div v-if="!buttonClicked"
             class="image">
          <img width="300px"
               height="285px"
               :src="currentObj.image"/>
        </div>
      </transition>
        <br />
      <transition name="fade__mobile">  
        <div v-if="!buttonClicked"
             class="buttonsSelect--m"
            style="font-family: 'Changa', sans-serif;
                  font-weight: bold;
                  font-size: 20px;
                  margin-left: 20px;">
          <div class="question">Do you like the picture?</div>
          <br />
          <div class="emojiButtons--m">
            <div class="emojiText--m">
              <img width="50px" 
                  height="50px" 
                  src="/assets/in_love.PNG" 
                  style="margin-right: 40px"
                  @click="optionClicked(0)" />
              <span>Yes</span>
            </div>
            <br />
            <div class="emojiText--m">
              <img width="50px" 
                  height="50px" 
                  src="/assets/vomit.PNG" 
                  style="margin-right: 40px"
                  @click="optionClicked(1)" />
              <span>No</span>
            </div>
            <br />
            <div class="emojiText--m">
              <img width="50px" 
                  height="50px" 
                  src="/assets/observer.PNG" 
                  style="margin-right: 40px"
                  @click="optionClicked(2)" />
              <span>Not Really</span>
            </div>
          </div>
        </div>
      </transition>
      <div v-if="buttonClicked"
           class="quote__mobile">
           {{backQuote}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component
export default class QuizPageWeb extends Vue {
  multipleChoiceView = true
  resSum = 0
  buttonClicked = false
  backQuote = ''
  count=0
  qstns = []
  currentObj: any = null
  backQuotesArr = [
    `Let's push each other in case any one of us is confronted with life issues.`,
    `How about a long walk by the woods holding each others hand.`,
    `Maybe we can't have kids, why not be each others for the rest of our lives!`,
    `I was there for her to hold on to and give a shoulder to cry...`,
    `Maybe a relationship between a husband and a wife is all  about being there for each other when they really need  you.`,
    `She cuddles her arms around mine and loved listening to me, she never loosens up her hands just like an inseparable emotion.`,
    `My subconscious told me that she was the one that I have been searching for all my life the moment I looked into her mesmerizing eyes.`,
    `Kids do look cute and adorable when they are mad at you.`,
    `There is nothing more pathetic in life than having to grieve alone`,
    `Guarantee can be a stupid word for life!!`
  ]


  get isMobileView() {
    return this.$store.state.isMobileView
  }

  mounted() {
    this.qstns = this.$store.state.wholeObjs
    this.currentObj = this.qstns[this.count]
  }
  
  optionClicked(index: number) {
    this.resSum += this.currentObj.weight[index]
    this.count +=1
    if (this.count == 10) {
      let which = 0
      if (this.resSum >= 100 && this.resSum <= 120) {
          which = 0
      } else if (this.resSum >= 130 && this.resSum <= 170) {
            which = 1
      } else if (this.resSum >= 180 && this.resSum <= 220) {
            which = 2
      } else if (this.resSum >= 230 && this.resSum <= 260) {
            which = 3
      } else if (this.resSum >= 270 && this.resSum <= 300) {
           which = 4
      }
      this.$router.push({path: `/result/${which}/me`})
    }
    this.currentObj = this.qstns[this.count]
    if (this.count == 5) {
      this.multipleChoiceView = false
    }


  }
 

}
</script>
<style lang="scss">
#container {
  display: flex;
  /* establish flex container */
  flex-direction: column;
  /* make main axis vertical */
  justify-content: center;
  /* center items vertically, in this case */
  align-items: center;
  height: 100vh;

  .box {
    font-size: 30px;
    font-family: "Changa", sans-serif;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    padding: 50px;
    transform: translateY(-100px);
    margin: 0px 10px;
    text-align: center;
    &__choose {
      margin-top: 30px;

      .circle {
        margin: 60px;
        filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
      }

      &--mobile {
        margin-top: 30px;

        .circle {
          margin: 40px;
          filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
        }
      }
    }

    &__imageview {
      margin: 10px;
      padding: 5px !important;
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .image {
        img {
          border-radius: 15px;
          filter: drop-shadow(8px 5px 7px rgba(0, 0, 0, 0.25));
        }
      }

      .buttonsSelect {
        margin: 40px;
        margin-left: 60px;
        margin-right: 60px;
        font-size: 24px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        .emojiButtons {
          margin-top: 10px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: wrap;
          .emojiText {
            margin-top: 30px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            img {
              margin-right: 50px;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            }
            p {
              margin-top: 10px;
              font-size: 20px;
            }
          }
        }
      }
    }
    
  .quote__web {
     color: #cd1fe0;
     font-family: "Caveat", cursive;
     font-size: 35px;
     font-weight: bold;
     margin-left: 20px;
     margin-right: 20px;
     background-color: #32E01F;
     border-radius: 5px;
     padding: 1px;
  }
  }
}

.box__imageview--mobile {
  .image {
    padding: 2px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    filter: drop-shadow(8px 5px 7px rgba(0, 0, 0, 0.25));

    img {
      border-radius: 15px;
    }
    .buttonsSelect--m {
      .question {
        font-size: 20px !important;
      }
      .emojiButtons--m {
        margin-top: 10px !important;
        width: 100%;
        .emojiText--m {
          img {
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          }
          span {
            font-size: 40px;
          }
        }
      }
    }
  }
  .quote__mobile {
     color: #cd1fe0;
     font-family: "Caveat", cursive;
     font-size: 35px;
     font-weight: bold;
     margin-left: 20px;
     margin-right: 20px;
     transform: translateY(-100px);
  }
}

@media (max-width: 422px) {
  .box {
    font-size: 24px !important;
    padding: 20px !important;
    padding-top: 30px !important;
    &__choose {
      &--mobile {
        .circle {
          margin: 30px !important;
          filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
        }
        margin-bottom: 20px;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s  ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade__mobile-enter-active, .fade__mobile-leave-active {
  transition: opacity  .5s  ease-in-out;
}
.fade__mobile-enter, .fade__mobile-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
