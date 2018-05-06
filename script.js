
// TO MAKE IT SHOW ONE QUESTION AT A TIME 



$(function () { 
    // currentView represents the question that the user is currently on
    let currentView = 0;
    // the start Quiz is equal to 0, in the array and will increment by 1 as the class of next is clicked
    let views = [".start", ".question1", ".question2", ".question3", ".question4", ".question5", ".question6", ".question7", ".question8", ".question9", ".question10", ".question11", ".end"]
    // Here we toggle the class of hidden on the current view because all sections/questions currently have a class of hidden and also toggles the class of hidden on the "next" question
    function updateView() {
        $(views[currentView]).toggleClass("hidden");
        currentView = currentView + 1;
        $(views[currentView]).toggleClass("hidden");
    }
    // User is presented with 2 options (radio buttons)

    // User clicks one of the two options 
    // Once ok with their answer user clicks submit
    $('form').on('submit', function (e) {

        e.preventDefault();

        // Here we get the class name of the form that was submitted and store it in a variable of 'questionNumber'
        const questionNumber = $(this).attr('class');
        
        // We then use questionNumber to select the appropriate input with the same name attribute to see if the userChoice has the class of "answer" to then return true or false
        const userChoice = $(`input[name=${questionNumber}]:checked`)
        
        // console logs true or false
        // alert(userChoice.hasClass('answer'));
        
    
        // ANSWER POPUPS CONDITIONALS
        const rightAnswer = userChoice.hasClass('answer')
        console.log(rightAnswer);

        if (rightAnswer) {
            // ANSWER POPUP FOR INCORRECT ANSWER
            // If userChoice has a class of "answer" add class of "active" to .correctAnswer when the submit button is clicked
                $(".answer-overlay, .correctAnswer").addClass("active");
        
            //remove class of "active" to answer pop-up when the close button is clicked
            $(".close, .answer-overlay").on("click", function () {
                $(".answer-overlay, .correctAnswer").removeClass("active");
            });
        } else {
            // ANSWER POPUP FOR INCORRECT ANSWER

            //If userChoice DOES NOT have a class of "answer" add class of "active" to .incorrectAnswer when the submit button is clicked
                $(".answer-overlay, .incorrectAnswer").addClass("active");

            //remove class of "active" to answer pop-up when the close button is clicked
            $(".close, .answer-overlay").on("click", function () {
                $(".answer-overlay, .incorrectAnswer").removeClass("active");
            });

        }
        
    });

    $('.next').on('click', () => {
        updateView()
    }); 


});

// The page now displays the next question




// BONUS
// COUNTER - FINAL SCORE
// if less than 50% correct "You are living in an alternate reality"
// else "you have a great memory and bragging rights!""