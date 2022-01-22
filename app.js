//selectors

const answerDiv = document.querySelector(".answer");
const calButton = document.querySelectorAll(".butt");

// event listeners
for (let i = 0; i < calButton.length; i++) {
  calButton[i].addEventListener("click", calculate);
}

// functions
let ansArr = [];
let key = 0;
function calculate(e) {
  if (key == 1) {
    while (answerDiv.firstChild) {
      answerDiv.removeChild(answerDiv.lastChild);
    }
    ansArr = [];
    key = 0;
  }
  const newNr = document.createElement("h4");
  newNr.classList.add("newnumber");
  const val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "÷", "×", "+", "-"];
  const classes = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "dot",
    "divide",
    "multiply",
    "plus",
    "subtract",
  ];
  if (e.target.classList.contains("butt")) {
    for (let i = 0; i < val.length; i++) {
      if (e.target.classList.contains(classes[i])) {
        newNr.innerText = val[i];
        answerDiv.appendChild(newNr);
        ansArr.push(val[i]);
        break;
      }
    }

    if (e.target.classList.contains("clear")) {
      while (answerDiv.firstChild) {
        answerDiv.removeChild(answerDiv.lastChild);
      }
      ansArr = [];
    }

    if (e.target.classList.contains("equal")) {
      let flag = 0;
      // const final = ansArr.join("");
      // const result = final.replaceAll("×", "*");
      let resultF; //= eval(result.replaceAll("÷", "/"));

      for (let i = 0; i < ansArr.length; i++) {
        if (ansArr[i] === "×") {
          if (ansArr[i + 1] === "÷" || ansArr[i + 1] === "×") {
            resultF = "Syntax Error";
            flag = 1;
            break;
          }
        }
        if (ansArr[i] === "÷") {
          if (ansArr[i + 1] === "×" || ansArr[i + 1] === "÷") {
            resultF = "Syntax Error";
            flag = 1;
            break;
          }
        }
        if (ansArr[i] === "+" || ansArr[i] === "-") {
          if (
            ansArr[i + 1] === "×" ||
            ansArr[i + 1] === "÷" ||
            ansArr[i + 1] === ansArr[i]
          ) {
            resultF = "Syntax Error";
            flag = 1;
            break;
          }
        }
      }
      if (flag === 0) {
        const final = ansArr.join("");
        const result = final.replaceAll("×", "*");
        resultF = eval(result.replaceAll("÷", "/"));
      }

      newNr.classList.add("super");
      while (answerDiv.firstChild) {
        answerDiv.removeChild(answerDiv.lastChild);
      }
      newNr.innerText = resultF;
      ansArr = [];
      answerDiv.appendChild(newNr);
      key = 1;
    }
  }
}
