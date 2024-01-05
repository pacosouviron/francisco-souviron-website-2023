let imagePaths = [
    { path: "images/boobies/20.jpg", answer: true },
    { path: "images/boobies/19.jpg", answer: false },
    { path: "images/boobies/18.jpg", answer: true },
    { path: "images/boobies/17.jpg", answer: true },
    { path: "images/boobies/16.jpg", answer: false },
    { path: "images/boobies/15.jpg", answer: true },
    { path: "images/boobies/14.jpg", answer: true },
    { path: "images/boobies/13.jpg", answer: true },
    { path: "images/boobies/12.jpg", answer: true },
    { path: "images/boobies/11.jpg", answer: false },
    { path: "images/boobies/10.jpg", answer: true },
    { path: "images/boobies/9.jpg", answer: false },
    { path: "images/boobies/8.jpg", answer: false },
    { path: "images/boobies/7.jpg", answer: false },
    { path: "images/boobies/6.jpg", answer: true },
    { path: "images/boobies/5.jpg", answer: false },
    { path: "images/boobies/4.jpg", answer: false },
    { path: "images/boobies/3.jpg", answer: true },
    { path: "images/boobies/2.jpg", answer: false },
    { path: "images/boobies/1.jpg", answer: false },
    // Add more objects as needed
];
let currentImage = null;
let score = 0;

function loadNextQuestion() {
    if (imagePaths.length > 0) {
        currentImage = imagePaths.pop();
        document.getElementById("quiz-image").src = currentImage.path;
        enableButtons();
    } else {
        alert("Quiz completed! Your score:" + score + "/3");
    }
}

function checkAnswer(userChoice) {
    disableButtons();
    let correctAnswer = currentImage.answer === userChoice;
    console.log("Correct Answer: " + currentImage.answer);  // Log the correct answer for debugging
    if (correctAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert("Incorrect!");
    }
    loadNextQuestion();  // Load the next question immediately without delay
}

function disableButtons() {
    document.getElementById("real-button").disabled = true;
    document.getElementById("fake-button").disabled = true;
}

function enableButtons() {
    document.getElementById("real-button").disabled = false;
    document.getElementById("fake-button").disabled = false;
}

// ... (Your existing code)

function checkAnswer(userChoice) {
    disableButtons();
    let correctAnswer = currentImage.answer === userChoice;
    console.log("Correct Answer: " + currentImage.answer);  // Log the correct answer for debugging

    // Display feedback
    document.getElementById("feedback").innerHTML = correctAnswer ? "Correct!" : "Incorrect!";
    
    if (correctAnswer) {
        score++;
    }
    
    // Display score
    document.getElementById("score").innerHTML = "Score: " + score + "/20";

    if (imagePaths.length > 0) {
        // If there are more questions, load the next one
        loadNextQuestion();
    } else {
        // If the quiz is completed, show "Play Again" button
        document.getElementById("play-again").style.display = "block";
    }
}

function restart() {
    // Reset the quiz for a new game
    score = 0;
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    document.getElementById("play-again").style.display = "none";
    loadNextQuestion();
}


// Load the first question when the page loads
window.onload = loadNextQuestion;


