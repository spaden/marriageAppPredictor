class ImageQuestion {
  image: string
  question: string
  weight: Array<number>

  constructor(image: string, weight: Array<number>) {
    this.image = image
    this.question = "Do you like the picture?"
    this.weight = weight
  }
}

class ColorsQuestion {
  colors: Array<string>
  question: string
  weight: Array<number>

  constructor(colors: Array<string>, question: string) {
    this.colors = colors
    this.question = question
    this.weight = [10, 20, 30]
  }
}

class MapResults {
  colorQuestions: Array<ColorsQuestion>
  imageQuestions: Array<ImageQuestion>

  constructor(colorQuestions: Array<ColorsQuestion>, imageQuestions: Array<ImageQuestion>) {
    this.colorQuestions = colorQuestions
    this.imageQuestions = imageQuestions
  }

  questionsWhole() {
    var wholeObjects = []
    for (let i = 0; i < this.colorQuestions.length; i++) {
      wholeObjects.push(this.colorQuestions[i])
    }

    for (let i = 0; i < this.imageQuestions.length; i++) {
      wholeObjects.push(this.imageQuestions[i])
    }
    // console.log(wholeObjects)
    return wholeObjects
  }
}

export { ImageQuestion, ColorsQuestion, MapResults }
