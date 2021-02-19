<template>
  <div id="container">
    <div v-if="multipleChoiceView && !isMobileView && !buttonClicked" class="box">
      Choose your {{ colorName }}

      <div class="box__choose">
        <span class="circle circle__left">
          <svg height="100" width="100">
            <circle cx="50" 
                    cy="50" 
                    r="35" 
                    stroke="black" 
                    stroke-width="0.2" 
                    fill="#BF09FC"
                    @click="multipleChoiceChange(0)" />
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
                    fill="#BF79D6"
                    @click="multipleChoiceChange(1)" />
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
                    fill="#6C2A82"
                    @click="multipleChoiceChange(2)" />
          </svg>
        </span>
      </div>
    </div>

    <div v-if="multipleChoiceView && isMobileView" class="box">
      Choose your {{ colorName }}

      <div class="box__choose--mobile">
        <span class="circle circle__left">
          <svg height="40" 
               width="40">
            <circle cx="20" 
                    cy="20" 
                    r="20" 
                    stroke="black" 
                    stroke-width="0.2" 
                    fill="#BF09FC"
                    @click="multipleChoiceChange(0)" />
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
                    fill="#BF79D6"
                    @click="multipleChoiceChange(1)" />
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
                    fill="#6C2A82"
                    @click="multipleChoiceChange(2)" />
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
                src="https://github.com/spaden/hookdate.github.io/blob/master/five.jpg?raw=true"/>
        </div>
      </transition>
        <div class="buttonsSelect">
          Do you like the picture?
          <div class="emojiButtons">
            <div class="emojiText">
              <img width="50px" 
                  height="50px" 
                  src="/assets/in_love.PNG"
                  @click="emojiClickChange(0)" />
              <p>Yes</p>
            </div>
            <div class="emojiText">
              <img width="50px" 
                  height="50px" 
                  src="/assets/vomit.PNG"
                  @click="emojiClickChange(1)" />
              <p>No</p>
            </div>
            <div class="emojiText">
              <img width="50px" 
                  height="50px"
                  src="/assets/observer.PNG"
                  @click="emojiClickChange(2)" />
              <p>Not Really</p>
            </div>
          </div>
        </div>
    </div>

    <div v-else-if="!multipleChoiceView && isMobileView" class="box__imageview--mobile">
      <transition name="fade__mobile">
        <div v-if="!buttonClicked"
             class="image">
          <img width="300px"
               height="285px"
               src="https://github.com/spaden/hookdate.github.io/blob/master/five.jpg?raw=true"/>
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
                  @click="emojiClickChange(0)" />
              <span>Yes</span>
            </div>
            <br />
            <div class="emojiText--m">
              <img width="50px" 
                  height="50px" 
                  src="/assets/vomit.PNG" 
                  style="margin-right: 40px"
                  @click="emojiClickChange(1)" />
              <span>No</span>
            </div>
            <br />
            <div class="emojiText--m">
              <img width="50px" 
                  height="50px" 
                  src="/assets/observer.PNG" 
                  style="margin-right: 40px"
                  @click="emojiClickChange(2)" />
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
  multipleChoiceView = false
  colorName = "blue"
  buttonClicked = false
  backQuote = ''
  count=0
  backQuotesArr = [
    [
      `We always hold hands. If I let go, she shops.`,
      'Henry Youngman'
    ],
    [
      `When a man opens a car door for his wife, it’s either a new car or a new wife.`,
      'Prince Phillip'
    ],
    [
      `Don’t make love by the garden gate, love is blind but the neighbours ain’t.`,
      'Anonymous'
    ],
    [
      `Before you marry a person you should first make them use a computer with slow Internet to see who they really are.`,
      'Will Ferrell'
    ],
    [
      `By all means, marry. If you get a good wife, you will be happy. If you get a bad one, you will be a philosopher.`,
      'Socrates'
    ],

    
  ]
  get isMobileView() {
    return this.$store.state.isMobileView
  }

  multipleChoiceChange(index: number) {
    console.log(index)
    setTimeout(() => {
      this.buttonClicked = false
    }, 1000)
  }

  emojiClickChange(index: number){
    console.log(index)
    
    this.buttonClicked = true
    setTimeout(() => {
      console.log(this.count)
       this.backQuote = this.backQuotesArr[this.count][0]
    }, 500)
    setTimeout(() => {
      this.count+=1
      if (this.count === this.backQuotesArr.length){
        this.count = 0
      }
      this.buttonClicked = false
      this.backQuote = ''
    }, 5000)
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
     transform: translateY(-100px);
  }
}

@media (max-width: 414px) {
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
