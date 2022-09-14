import categoryData from "./categoryData.js";
import chooseCategoryAndDifficulty from './chooseCatnDiff.js';
import Quizs from './Quiz.js'


async function fetchQuiz(UserChoosenData) {
  let readableStream = 
        await fetch(`https://the-trivia-api.com/api/questions?categories=${UserChoosenData.category}&limit=10&difficulty=${UserChoosenData.difficulty}`);
  let data = await readableStream.json();
  return data;
}


if(window.location.href.includes('index')) {
  let choosenData = {};
  document.getElementById('form').addEventListener('submit', (e) => chooseCategoryAndDifficulty(e, choosenData))
  console.log(categoryData);
  document.getElementById('categories').innerHTML += categoryData.map(category => {
    return `<option value='${category.toLowerCase().split(' ').join('_')}'>${category}</option>`
  })
} else if(window.location.href.includes('quiz-page')) {
  let UserChoosenData = JSON.parse(localStorage.getItem('choosenData'));
  if(UserChoosenData) {
    let quizsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let quizs = await fetchQuiz(UserChoosenData);

    let quiz = getNewQuiz();
    renderQuizToDOM();
    
    
    document.getElementById('qna-group').addEventListener('submit', (e) => goToNextQuiz(e, quiz));
    
    function getNewQuiz() {
      let nextQuiz =  quizs[quizsIndex.shift()];
      return nextQuiz ? new Quizs(nextQuiz) : {};
    }

    function renderQuizToDOM() {
      document.getElementById('qna-group').innerHTML = quiz.getQnAHtml();
    }

    function goToNextQuiz(e) {
      e.preventDefault();
      let radioEl = document.getElementsByClassName('answers');
      let radioValue = Array.from(radioEl).find(radio => radio.checked);
      if(radioValue.value == quiz.correctAnswer) {
        quiz.addScore();
        quiz = getNewQuiz();
        renderQuizToDOM();
      }
    }
  } else {
    // window.location.href='index.html'
  }
}
  


