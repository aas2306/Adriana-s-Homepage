
function isCorrect(el) {
  if (el.classList.contains("correct")) {
    return true;
  } else {
    return false;
  }
}

var inputs = document.querySelectorAll("[name='q1']");

inputs.forEach(function(input) {
  input.addEventListener('click', function() {
    if (isCorrect(input)) {
      alert("Correct Answer!");
    } else {
      alert("Incorrect Answer!");
    }
  });
});

//
// // Changes state of program
// var nextBtnShown = false;
//
// // Displays or hides "Next Question" button based on state of program
// function toggleNext() {
//   if (nextBtnShown === true) {
//     document.querySelector('.nextQuestion').classList.remove('hide');
//   } else {
//     document.querySelector('.nextQuestion').classList.add('hide');
//   }
// }
//
//
// // quiz question 1
// function checkAnswer() {
//   var userAnswerEl = document.querySelector("[type='radio']:checked");
//   var correctAnswerEl = document.querySelector(".correct");
//   var userAnswer = userAnswerEl.value;
//   var correctAnswer = correctAnswerEl.value;
//
//   if (userAnswer === correctAnswer) {
//     correctAnswerEl.parentNode.classList.add("correct");
//     alert("Yay!");
//   } else {
//     userAnswerEl.parentNode.classList.add("incorrect");
//     correctAnswer.parentNode.classList.add("correct");
//     alert("Nay!");
//   }
//   nextBtnShown = true;
//   toggleNext();
// }
//
// document.getElementById('submit1').addEventListener('click', checkAnswer);


// function checkAnswer1() {
//   var userAnswerEl1 = document.querySelector('[name="q1"]:checked');
//   var correctAnswerEl1 = document.querySelector('[id="correctAnswer1"]');
//   var userAnswer1 = userAnswerEl1.value;
//   var correctAnswer1 = correctAnswerEl1.value;
//
//   if (userAnswer1 == correctAnswer1) {
//     correctAnswerEl1.parentNode.classList.add('correct');
//     alert("You got the right answer!");
//   } else {
//     userAnswerEl1.parentNode.classList.add('incorrect');
//     correctAnswerEl1.parentNode.classList.add('correct');
//     alert("Sorry, wrong answer!");
//   }
//   nextBtnShown = true;
//   toggleNext();
// }
//
// document.getElementById('submit1').addEventListener('click', checkAnswer1);
//
//
// // quiz question 2:
//
// function checkAnswer2() {
//   var userAnswerEl2 = document.querySelector('[name="q2"]:checked');
//   var correctAnswerEl2 = document.querySelector('[id="correctAnswer2"]');
//   var userAnswer2 = userAnswerEl2.value;
//   var correctAnswer2 = correctAnswerEl2.value;
//
//   if (userAnswer2 == correctAnswer2) {
//     correctAnswerEl2.parentNode.classList.add('correct');
//     alert("You got the right answer!");
//   } else {
//     userAnswerEl2.parentNode.classList.add('incorrect');
//     correctAnswerEl2.parentNode.classList.add('correct');
//     alert("Sorry, wrong answer!");
//   }
// }
//
// document.getElementById('submit2').addEventListener('click', checkAnswer2);
//
//
//
// // When "Next Question" button is clicked, hides question 1 and displays question 2
//
// var question1El = document.querySelector('#question1');
// var question2El = document.querySelector('#question2');
//
// function nextQuestion1() {
//   question1El.classList.add('hide');
//   question2El.classList.remove('hide');
// }
//
//
// document.getElementById('next1').addEventListener('click', nextQuestion1);
//
// // This javascript code can be improved by making one function that is "universal" for different questions instead of having a separate function for each question
