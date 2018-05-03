
// User is presented with 2 options (radio buttons)
$(function () { 
    $('form').on('submit', function (e) {
       
        e.preventDefault();
        console.log('submited');
        
        const userChoice = $('input[name=option1]:checked')

        const rightAnswer = $('.true')


        if (userChoice !== rightAnswer) {
            console.log('You got it right!');
        } else {
            console.log('WRONG!');
            
        };

        // const incorrect = $('input[name=option]:checked').val();

        // const correct = $('.answer').attr();

    
    });
 });


// User clicks one of the two options 

// Once ok with their answer user clicks submit

// Upon clicking submit a pop-up or another div appears:
    // If chosen option has a class of "answer", the correct answer window appears and says YAY
    // If chosen option does not have a class of "answer", the incorrect answer window appears and says BOO
    
// The page now displays the next question

// User continues to next question and clicks on one of the two options

// BONUS
// COUNTER - FINAL SCORE
// if less than 50% correct "You are living in an alternate reality"
// else "you have a great memory and bragging rights!""