// Questions, Options, and Clues
const questions = [
    {
        question: "True or False: Jesus said his true family was anyone who obeys God.(నిజం లేదా అబద్ధం: దేవునికి విధేయత చూపే వారెవరైనా తన నిజమైన కుటుంబం అని యేసు చెప్పాడు.)",
        options: ["True నిజమే", "False అబద్ధం"],
        answer: "True నిజమే",
        clue: "Clue: I’m made for walking, one foot at a time, Leading you upward, it’s a gradual climb నేను నడవడానికి ఉపయోగిస్తారు, ఒక్కో అడుగు వేస్తూ,  పైకి ఎక్కడానికి సహాయపడుతాను, ఇది మెల్లగా జరుగుతుంది"
    },
    {
        question: "How many kings of Judah were there?(యూదా రాజులు ఎంతమంది ఉన్నారు?)",
        options: ["18", "20", "15", "25"],
        answer: "20",
        clue: "Clue: I’m made for walking, one foot at a time, Leading you upward, it’s a gradual climb నేను నడవడానికి ఉపయోగిస్తారు, ఒక్కో అడుగు వేస్తూ,  పైకి ఎక్కడానికి సహాయపడుతాను, ఇది మెల్లగా జరుగుతుంది"
    },
    {
        question: "How many wives did Solomon have?(సొలొమోనుకు ఎంత మంది భార్యలు ఉన్నారు?)",
        options: ["1000", "700", "500", "300"],
        answer: "700",
        clue: "Clue: I’m made for walking, one foot at a time, Leading you upward, it’s a gradual climb నేను నడవడానికి ఉపయోగిస్తారు, ఒక్కో అడుగు వేస్తూ,  పైకి ఎక్కడానికి సహాయపడుతాను, ఇది మెల్లగా జరుగుతుంది"
    },
    

];

let currentQuestionIndex = 0;
let wrongAttempts = 0;

// Load a question and display options
function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    let optionsHtml = "";
    questions[currentQuestionIndex].options.forEach((option, index) => {
        optionsHtml += `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="option" id="option${index}" value="${option}">
                <label class="form-check-label" for="option${index}">
                    ${option}
                </label>
            </div>
        `;
    });
    document.getElementById("options").innerHTML = optionsHtml;
    document.getElementById("clue").innerText = ""; // Clear previous clue
    document.getElementById("submitBtn").classList.remove("d-none"); // Show submit button
}

// Check if the selected answer is correct
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (userAnswer === correctAnswer) {
            // Show the clue and end the quiz
            document.getElementById("clue").innerText = questions[currentQuestionIndex].clue; // Show clue
            document.getElementById("submitBtn").classList.add("d-none"); // Hide submit button after correct answer
        } else {
            // Keep asking until the answer is correct (without clue)
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(); // Load next question if there are more
            } else {
                disqualifyUser(); // Disqualify after 5 wrong attempts
            }
        }
    } else {
        alert("Please select an answer!");
    }
}

// Show the disqualified message
function disqualifyUser() {
    document.getElementById("quiz-box").classList.add("d-none");
    document.getElementById("disqualified").classList.remove("d-none");
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    wrongAttempts = 0;
    document.getElementById("disqualified").classList.add("d-none");
    document.getElementById("quiz-box").classList.remove("d-none");
    loadQuestion();
}

// Load the first question on page load
window.onload = loadQuestion;
