// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

var sumbmission = document.getElementById('submit-button');
var initial_text_input = document.getElementById('contact-page');
var end_message = 'Thanks for your message!';

sumbmission.addEventListener('click', change_text);

function change_text() {
    initial_text_input.innerHTML = end_message;
}

initial_text_input.style.fontSize = '24px';

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

