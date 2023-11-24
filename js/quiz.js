$(document).ready(function () {
  const javascriptQuestions = [
    {
      question: "What does 'DOM' stand for?",
      options: [
        "Document Object Model",
        "Data Object Mode",
        "Digital Ordinance Model",
      ],
      answer: "Document Object Model",
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is the result of the expression: 2 + '2' in JavaScript?",
      options: ["4", "22", "TypeError"],
      answer: "22",
    },
    {
      question:
        "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
      options: [".push()", ".join()", ".concat()"],
      answer: ".push()",
    },
    {
      question: "What is the purpose of '=== 'operator in JavaScript?",
      options: ["Assignment", "Strict Equality", "Type Conversion"],
      answer: "Strict Equality",
    },
    {
      question:
        "Which function is used to parse a string to an integer in JavaScript?",
      options: ["parseInt()", "Math.round()", "String.parseInt()"],
      answer: "parseInt()",
    },
    {
      question: "What will the following code output: console.log(typeof([]));",
      options: ["Array", "Object", "undefined"],
      answer: "Object",
    },
    {
      question:
        "Which method is used to remove the last element from an array and returns that element?",
      options: [".pop()", ".shift()", ".slice()"],
      answer: ".pop()",
    },
  ];

  let currentQuestion = 0;
  let score = 0;
  const totalQuestions = javascriptQuestions.length;

  function displayQuestion() {
    const currentQuizQuestion = javascriptQuestions[currentQuestion];
    $(".question-container").html(`
        <div class="card">
          <div class="card-body">
          <h3>Question ${currentQuestion + 1} of ${totalQuestions}</h3>
            <h5 class="card-title">${currentQuizQuestion.question}</h5>
            <div class="options">
              ${currentQuizQuestion.options
                .map(
                  (option, index) => `
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="q${currentQuestion}" id="q${currentQuestion}_${index}" value="${option}">
                  <label class="form-check-label" for="q${currentQuestion}_${index}">
                    ${option}
                  </label>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `);

    $(".card:hidden").fadeIn(1000);
  }

  const getFeedback = () => {
    switch (true) {
      case score >= 0 && score <= 2:
        return { message: "Bad! :(", color: "red" };
      case score > 2 && score <= 4:
        return { message: "Average Score. Keep Learning!", color: "orange" };
      case score > 4 && score <= 7:
        return { message: "Almost there. Good job!", color: "#6b7f56" };
        return "Almost there! Good job";
      case score > 7:
        return { message: "Excellent Job! :)", color: "green" };
      default:
        return { message: "No feedback", color: "black" };
    }
  };

  $(".next-btn").click(function () {
    const selectedOption = $(`input[name='q${currentQuestion}']:checked`).val();
    if (selectedOption) {
      $(".toast").hide();
      if (selectedOption === javascriptQuestions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < totalQuestions) {
        displayQuestion();
      } else {
        $(".question-container").hide();
        $(".next-btn").hide();
        $(".result-container").show();
        $(".score").text(score + "/" + totalQuestions);
        $(".submit-btn").hide();
        $(".retake-btn").show();
        $("#feedback").html(`
          <div> 
           ${getFeedback().message}
          </div>
          `);
        $("#feedback").css("color", getFeedback().color);
      }
    } else {
      $(".toast").show();
    }
  });

  $(".retake-btn").click(function () {
    $(".question-container").show();
    $(".next-btn").show();
    $(".result-container").hide();
    $(".score").text("");
    $(".retake-btn").hide();
    currentQuestion = 0;
    score = 0;
    displayQuestion();
  });

  displayQuestion();
});
