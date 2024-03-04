function userPop(){
  const userProfile = document.getElementById("user");
  if(userProfile.style.display === "none"){
    userProfile.style.display = "block";
  }else{
    userProfile.style.display = 'none'
  }
}
///////////////////////////////////////
const questionsContainer = document.getElementById("questionsCon");
const controls = document.getElementById("controls");
const submitContainer = document.getElementById("submit-container");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const restart = document.getElementById("restart");
const questionIndexDisplay = document.getElementById("quiz-index");
 
let currentQuestionIndex = 0;
let totalQuestion = document.querySelectorAll(".question").length;

function showQuestion(index){
  const quizzes = document.querySelectorAll(".question");
  quizzes.forEach((quiz, i) =>{
    quiz.style.display = i === index ? 'block' : 'none';
  });
  questionIndexDisplay.textContent = `${index + 1}/${totalQuestion} `;
}

showQuestion(currentQuestionIndex);

document.getElementById("next-btn").addEventListener("click", ()=>{
  if(currentQuestionIndex < totalQuestion -1){
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
  if(currentQuestionIndex === totalQuestion - 1){
    submitContainer.style.display = "block";
    controls.style.display = "none";
  }
});

document.getElementById("prev-btn").addEventListener("click", ()=>{
  if(currentQuestionIndex > 0){
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
  if(currentQuestionIndex < totalQuestion -1){
    submitContainer.style.display = "none";
    controls.style.display = "block";
  }
});

document.getElementById("submit-btn").addEventListener("click", ()=>{
  const score = calculateScore();
  scoreDisplay.textContent = `${score} `;
  scoreContainer.style.display = "block";
})


function calculateScore(){
  let score = 0
  const quizzes = document.querySelectorAll(".question");

  quizzes.forEach((quiz, index)=>{
    const selectedOption = quiz.querySelector('input[name="q1' +(index + 1) + '"]:checked');
    if(selectedOption){
      const selectedValue = selectedOption.value;
      if(selectedValue === "correct_option"){
        score++;
      }
    }
  });

  return score;
}

document.getElementById("restart").addEventListener("click", ()=>{
  currentQuestionIndex = 0;
  showQuestion(currentQuestionIndex);
  submitContainer.style.display = "none";
  scoreContainer.style.display = "none";
  controls.style.display = "block";
})