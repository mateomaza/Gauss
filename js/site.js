// We call the HTML elements we need
const btn = document.getElementById("button")
const display = document.getElementById("display")

// Our only function :)
function result() {

  // Controller
  // We store the values of the two inputs in variables
  let sValue = document.getElementById("sValue").value
  let eValue = document.getElementById("eValue").value

  // We convert those values into integers
  sValue = Number(sValue);
  eValue = Number(eValue);

  // Logic
  // We test if those values are "0-100" integers or not, and make sure they're not undefined
  if (Number.isInteger(sValue) && Number.isInteger(eValue) && sValue >= 0 && sValue < 100 && eValue > 0 && eValue <= 100 
    && typeof sValue !== undefined && typeof eValue !== undefined) {
    for (i = sValue; i <= eValue; i++) {
      // Display - We create one tr and one td in every iteration, then we append them accordingly
      var row = document.createElement("tr")
      var data = document.createElement("td")
      display.appendChild(row)
      row.appendChild(data)
      data.innerHTML = i
      // A little more logic (I'll create 3 functions next time :s)
      if (i % 2 == 0) {
        data.className = "even"
      } else {
        data.className = "odd"
      }
    }
  } else {
    alert("Start Value must be an integer between 0 & 99, End Value must be an integer between 1 & 100")
  }
}

//We add a click event handler to a button, so our project start when clicked
btn.addEventListener("click", result)