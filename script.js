
$(function () { 

    // $(".start").on("click").replaceWith(".question1")
    // User is presented with 2 options (radio buttons)

    // User clicks one of the two options 
    // Once ok with their answer user clicks submit
    $('form').on('submit', function (e) {

        e.preventDefault();

        // Get the class name of the form that was submitted and store it in a variable of questionNumber
        const questionNumber = $(this).attr('class');
        console.log(questionNumber);
        

        // use that class name to select the appropriate input with the same name attribute to see if the users choice has a class of "answer" to return true or false
        const userChoice = $(`input[name=${questionNumber}]:checked`)

        alert(userChoice.hasClass('answer'));
    });
 });

// PLAYING AROUND

// const currentView = 0;

// let views = [".question1", ".question2", ".question3", ".question4", ".question5", ".question6", ".question7", ".question8", ".question9", ".question10", ".question11"]


// function updateView(direction) {
//     $(views[currentView]).toggleClass("hidden");

//     if (direction === "next") {
//         currentView = currentView + 1; 
//     }
// }

// Upon clicking submit a pop-up or another div appears:
    // If chosen option has a class of "answer", the correct answer window appears and says YAY
    // If chosen option does not have a class of "answer", the incorrect answer window appears and says BOO
    
// The page now displays the next question

// User continues to next question and clicks on one of the two options

// BONUS
// COUNTER - FINAL SCORE
// if less than 50% correct "You are living in an alternate reality"
// else "you have a great memory and bragging rights!""