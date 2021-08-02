const QUESTION = document.querySelector(".question");
const answer_a = document.getElementById("label-1");
const answer_b = document.getElementById("label-2");
const answer_c = document.getElementById("label-3");
const answer_d = document.getElementById("label-4");
const CONTAINER = document.querySelector(".container");
const btn = document.querySelector(".btn");
const queezData = [
  {
    question: "Which is the largest continent (by area)?",
    a: "Asia",
    b: "Antarctica",
    c: "North America",
    d: "Africa",
    correct: "a",
  },

  {
    question: "Do you know (roughly) the equatorial circumference of Earth?",
    a: "15,000km",
    b: "55,000 km",
    c: "70,000km",
    d: "40,000 km",
    correct: "d",
  },

  {
    question: "Speaking of the equator, how many countries sit along it?",
    a: "9",
    b: "11",
    c: "13",
    d: "15",
    correct: "c",
  },

  {
    question:
      "Which country’s territory is geographically closest to the North Pole?",
    a: "Sweden",
    b: "Canada",
    c: "Norway",
    d: "Iceland",
    correct: "b",
  },
];

let answerEls = document.querySelectorAll(".answ");
let currentQuestion = 0;
let currentScore = 0;

loadQuestion();

//THIS IS THE FUNCTION WHICH LOADS THE QUESTION DEPENDING ON THE CURRENT QUESTION VALUE
function loadQuestion() {
  CONTAINER.classList.add("backgroundContainer");
  deselectAnswers();
  QUESTION.textContent = queezData[currentQuestion].question;
  answer_a.textContent = queezData[currentQuestion].a;
  answer_b.textContent = queezData[currentQuestion].b;
  answer_c.textContent = queezData[currentQuestion].c;
  answer_d.textContent = queezData[currentQuestion].d;
}

//THIS FUNCTION SHOULD GET THE VALUE OF THE CHECKED RADIO BUTTON
function getSelectedValue() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

//FUNCTION TO DISSELECT ANSWERS WHEN QUESTION LOADS
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

//THIS IS THE FUNCTION FOR THE SUBMIT BUTTON
btn.addEventListener("click", () => {
  const answer = getSelectedValue();

  if (answer) {
    if (answer === queezData[currentQuestion].correct) {
      currentScore++;
    }
    currentQuestion++;
    if (currentQuestion < queezData.length) {
      loadQuestion();
    } else {
      //TO DO: SHOW RESULTS
      // alert(`You finished, your score is ${currentScore}`);
      CONTAINER.classList.remove("backgroundContainer");
      CONTAINER.innerHTML = `<h2>You answered correctly at ${currentScore}/${queezData.length} questions!</h2><button class="btn" onclick="location.reload()">Reload</button>`;
    }
  }
});
