<template>
  <div id="container">
    <div v-if="multipleChoiceView && !isMobileView" class="box">
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
    <div v-if="multipleChoiceView && isMobileView" class="box">
      Choose your {{ colorName }}

      <div class="box__choose--mobile">
        <span class="circle circle__left">
          <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" stroke="black" stroke-width="0.2" fill="#BF09FC" />
          </svg>
        </span>
        <span class="circle cirlce__middle">
          <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" stroke="black" stroke-width="0.2" fill="#BF79D6" />
          </svg>
        </span>
        <span class="circle circle__left">
          <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" stroke="black" stroke-width="0.2" fill="#6C2A82" />
          </svg>
        </span>
      </div>
    </div>

    <div v-else-if="!multipleChoiceView && !isMobileView" class="box box__imageview">
      <div class="image">
        <img
          width="400px"
          height="385px"
          src="https://github.com/spaden/hookdate.github.io/blob/master/five.jpg?raw=true"
        />
      </div>
      <div class="buttonsSelect">
        Do you like the picture?
        <div class="emojiButtons">
          <div class="emojiText">
            <img width="50px" height="50px" src="/assets/in_love.PNG" />
            <p>Yes</p>
          </div>
          <div class="emojiText">
            <img width="50px" height="50px" src="/assets/vomit.PNG" />
            <p>No</p>
          </div>
          <div class="emojiText">
            <img width="50px" height="50px" src="/assets/observer.PNG" />
            <p>Not Really</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!multipleChoiceView && isMobileView" class="box__imageview--mobile">
      <div class="image">
        <img
          width="300px"
          height="285px"
          src="https://github.com/spaden/hookdate.github.io/blob/master/five.jpg?raw=true"
        />
      </div>
      <br />
      <div
        class="buttonsSelect--m"
        style="font-family: 'Changa', sans-serif;
						font-weight: bold;
						font-size: 20px;
						margin-left: 20px;"
      >
        <div class="question">Do you like the picture?</div>
        <br />
        <div class="emojiButtons--m">
          <div class="emojiText--m">
            <img width="50px" height="50px" src="/assets/in_love.PNG" style="margin-right: 40px" />
            <span>Yes</span>
          </div>
          <br />
          <div class="emojiText--m">
            <img width="50px" height="50px" src="/assets/vomit.PNG" style="margin-right: 40px" />
            <span>No</span>
          </div>
          <br />
          <div class="emojiText--m">
            <img width="50px" height="50px" src="/assets/observer.PNG" style="margin-right: 40px" />
            <span>Not Really</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class QuizPageWeb extends Vue {
  multipleChoiceView = false;
  colorName = "blue";

  get isMobileView() {
    return this.$store.state.isMobileView;
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
</style>
