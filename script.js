
$(function () { 
    // User is presented with 2 options (radio buttons)

    // User clicks one of the two options 
    // Once ok with their answer user clicks submit
    $('form').on('submit', function (e) {

        e.preventDefault();

        // Here we get the class name of the form that was submitted and store it in a variable of 'questionNumber'
        const questionNumber = $(this).attr('class');
        console.log(questionNumber);
        
        // We then use questionNumber to select the appropriate input with the same name attribute to see if the userChoice has the class of "answer" to then return true or false
        const userChoice = $(`input[name=${questionNumber}]:checked`)

        // console logs true or false
        console.log(userChoice.hasClass('answer'));

         // ANSWER POPUPS CONDITIONALS
        const rightAnswer = userChoice.hasClass('answer')

        if (rightAnswer) {
            // ANSWER POPUP FOR INCORRECT ANSWER
            // If userChoice has a class of "answer" add class of "active" to .correctAnswer when the submit button is clicked
            $(".checkAnswer").on("click", function () {
                $(".answer-overlay, .correctAnswer").addClass("active");
            });

            //remove class of "active" to answer pop-up when the close button is clicked
            $(".close, .answer-overlay").on("click", function () {
                $(".answer-overlay, .correctAnswer").removeClass("active");
            });
        } else {
            // ANSWER POPUP FOR INCORRECT ANSWER

            //If userChoice DOES NOT have a class of "answer" add class of "active" to .incorrectAnswer when the submit button is clicked
            $(".checkAnswer").on("click", function () {
                $(".answer-overlay, .incorrectAnswer").addClass("active");
            });

            //remove class of "active" to answer pop-up when the close button is clicked
            $(".close, .answer-overlay").on("click", function () {
                $(".answer-overlay, .incorrectAnswer").removeClass("active");
            });

        }
    });


});

// The page now displays the next question


// PLAYING AROUND - HERE I AM TRYING TO MAKE IT SHOW ONE QUESTION AT S TIME (inspo:http://jewlofthelotus.github.io/SlickQuiz/)

    // $(".start").on("click").replaceWith(".question1")

// const currentView = 0;

// let views = [".question1", ".question2", ".question3", ".question4", ".question5", ".question6", ".question7", ".question8", ".question9", ".question10", ".question11"]


// function updateView(direction) {
//     $(views[currentView]).toggleClass("hidden");

//     if (direction === "next") {
//         currentView = currentView + 1; 
//     }
// }


// BONUS
// COUNTER - FINAL SCORE
// if less than 50% correct "You are living in an alternate reality"
// else "you have a great memory and bragging rights!""