// function 

class Quizs {
    constructor(data) {
      this.question = data.question;
      this.difficulty = data.difficulty;
      this.type = data.type;
      this.incorrectAnswers = data.incorrectAnswers;
      this.correctAnswer = data.correctAnswer;
      this.answers = this.createAnswersArray();
      this.score = 0;
    };
    
    createAnswersArray() {
        let randomIndex = Math.floor(Math.random() * this.incorrectAnswers.length);
        let tempAnswers = [...this.incorrectAnswers.slice(0, 2)];
        tempAnswers.splice(randomIndex, 0, this.correctAnswer);
        return tempAnswers;
    };

    addScore() {
        this.score += 10;
    }


    getQnAHtml() {
      const {question, answers} = this;
      return `
        <p class="question">${question}</p>
        <div class="answer-group">
            <input type="radio" name="answers" id="first-answer" class="answers" value="${answers[0]}" checked/>
            <label for="first-answer">${answers[0]}</label>
        </div>
        <div class="answer-group">
            <input type="radio" name="answers" id="second-answer" value="${answers[1]}" class="answers" />
            <label for="second-answer">${answers[1]}</label>
        </div>
        <div class="answer-group">
            <input type="radio" name="answers" id="third-answer" value="${answers[2]}" class="answers" />
            <label for="third-answer">${answers[2]}</label>
        </div>
        <button class="next-question-btn btn" id="next-question-btn">Go to Next Question</button>
      `;
    };
  
  
}


export default Quizs;