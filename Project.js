// Using an get element by ID / JQUERY

const elementWithAnimation = $('#animationElement')

elementWithAnimation.click(() => elementWithAnimation.animate({fontSize: '75px'}))
elementWithAnimation.click(() => elementWithAnimation.animate({fontSize: '35px'}))


///////////////////////////////////////////////

//Function for 1st/ Using event and get element ID

function changeColour(event) {
    console.log(event.target)
    event.target.style.event.background = 'black'
}
let listener1 = document.getElementById('eventListener')
listener1.addEventListener('mouseover', changeColour);
listener1.addEventListener('mouseout', () => listener1.style.background = "grey");

// Function for default text
function changeColour(event) {
    console.log(event.target)
    event.target.style.event.background = 'black'
}
let listener = document.getElementById('eventListener1')
listener.addEventListener('mouseover', changeColour);
listener.addEventListener('mouseout', () => listener.style.background = "grey");


// Function for 2nd text
function changeColour(event) {
    console.log(event.target)
    event.target.style.event.background = 'black'
}
let listener2 = document.getElementById('eventListener2')
listener2.addEventListener('mouseover', changeColour);
listener2.addEventListener('mouseout', () => listener2.style.background = "grey");

//function for 3rd text
function changeColour(event) {
    console.log(event.target)
    event.target.style.event.background = 'black'
}
let listener3 = document.getElementById('eventListener3')
listener3.addEventListener('mouseover', changeColour);
listener3.addEventListener('mouseout', () => listener3.style.background = "grey");


////////////////////////////////////////////



// On click view button

let myCounter = 0;
function addCount() {
    myCounter +=1;
    document.getElementById("myCounter").innerHTML = myCounter;
  
  // Input an alert in response to the button
    alert('Thank you!!!!')
}

/////// ENLARGING MY IMAGES


