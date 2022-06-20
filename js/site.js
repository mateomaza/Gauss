// We call the HTML elements we need

const btn = document.getElementById("button")
const display = document.getElementById("display")


// Controller

function getValues() {

  // We store the input values in variables
  let sValue = document.getElementById("sValue").value
  let eValue = document.getElementById("eValue").value

  // We convert those values into Number() objects
  sValue = Number(sValue);
  eValue = Number(eValue);

  // We test if those values are integers from 0 to 100 or not (and make sure they're not undefined)
  if (Number.isInteger(sValue) && Number.isInteger(eValue) && sValue >= 0 && sValue < 100 && eValue > 0 && eValue <= 100 &&
    typeof sValue !== undefined && typeof eValue !== undefined) {

    // We call the functions to generate "nums" and display it
    let nums = generateNums(sValue, eValue)
    displayNums(nums)

  } else {
    alert("Start Value must be an integer between 0 & 99, End Value must be an integer between 1 & 100")
  }
}


// Logic

function generateNums(startValue, endValue) {

  // Variable to store all our numbers generated
  let numbers = [];

  // We append every number in the sValue:eValue range to the variable "numbers"
  for (let i = startValue; i <= endValue; i++) {
    numbers.push(i)
  }

  // We return "numbers" so our variables "num" work in the controller
  return numbers
}


// Display

function displayNums(numbers){
   
  // Variable where we'll store all rows generated
  let templateRows = "";

  for (let i = 0; i < numbers.length; i++) {
      
      // Variable for classes, so we make even numbers bold with CSS
      let className = "";
      
      // We pull out each individual number each time we iterate through the loop
      let number = numbers[i];
      
      // We set an "if statement" to add a different class to even and odd numbers
      if (number % 2 == 0){
          className = "even"
      } else {
          className = "odd"
      }

      // We add each row with "template literals"
      templateRows += `<tr><td class="${className}" >${number}</td></tr>`
  }
  
  // We add all the content for display to the tbody tag
  display.innerHTML = templateRows
}


//The click event handler to a button, so our project starts when clicked

btn.addEventListener("click", getValues)