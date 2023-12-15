/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var days_cost = 35;
var day_number = 0;
var total_cost = 0;
var list = document.getElementsByTagName('li');
var half_day = document.getElementById('half');
var full_day = document.getElementById('full');
var cost_calculated = document.getElementById('calculated-cost');
var clear_button = document.getElementById('clear-button');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let x = 0; x < list.length; x++) {
    list[x].onclick = function () {
        if (!this.classList.contains('clicked')) {
            this.className = 'clicked';
            day_number++;
            billtime();
        }
    };
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear_button.addEventListener('click', reset_all);
function reset_all() {
    day_number = 0;
    total_cost = 0;
    days_cost = 35;
    for (let i = 0; i < list.length; i++) {
        if (list[i].classList.contains('clicked')) {
            list[i].classList.remove('clicked');
        }
        if (!full_day.classList.contains('clicked')) {
            full_day.classList.add('clicked');
            half_day.classList.remove('clicked');
        }
        cost_calculated.innerHTML = total_cost;
    }
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_day.addEventListener('click', half_daydays);
function half_daydays() {
    days_cost = 20;
    if (!half_day.classList.contains('clicked')) {
        half_day.classList.add('clicked');
        full_day.classList.remove('clicked');
    }
    billtime();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full_day.addEventListener('click', full_daydays);
function full_daydays() {
    days_cost = 35;
    if (!full_day.classList.contains('clicked')) {
        full_day.classList.add('clicked');
        half_day.classList.remove('clicked');
    }
    billtime();
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function billtime() {
    total_cost = day_number * days_cost;
    cost_calculated.innerHTML = total_cost;
}
