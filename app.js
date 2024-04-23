// Variables
let quote = document.querySelector('.quote');
let btn = document.querySelector('#newQuoteBtn');

//Array of quotes
const allQuotes = ['You have got this', 'The best is yet to come', 'All in good time'];

// Event handler function
function generateNewQuote () {
    let random = Math.floor(Math.random() * allQuotes.length); 

    // Changing the quote text, at random, when the button is clicked
    quote.innerText = allQuotes[random];
}

// Click event listener - when the button is clicked, the function executes
btn.addEventListener('click', generateNewQuote);