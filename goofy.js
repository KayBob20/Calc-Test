const headshotBtn = document.getElementById('headshotBtn');
const halfbodyBtn = document.getElementById('halfbodyBtn');
const fullbodyBtn = document.getElementById('fullbodyBtn');
const headshotInput = document.getElementById('headshotInput');
const halfbodyInput = document.getElementById('halfbodyInput');
const fullbodyInput = document.getElementById('fullbodyInput');
const totalDisplay = document.getElementById('total');
const sketchBtn = document.getElementById('sketchBtn');
const cleanBtn = document.getElementById('cleanBtn');
const threedBtn = document.getElementById('threedBtn');
const totalInput = document.getElementById('totalInput'); // Define totalInput
const coloredBtn = document.querySelector('#coloredBtn');
const linelessBtn = document.querySelector('#linelessBtn');
const minimalBtn = document.querySelector('#minimalBtn');
const basicBtn = document.querySelector('#basicBtn');
const complexBtn = document.querySelector('#complexBtn');
const painterlyBtn = document.querySelector('#painterlyBtn');
const abstractBtn = document.querySelector('#abstractBtn');
const basicbackgroundBtn = document.querySelector('#basicbackgroundBtn');
const depthBtn = document.querySelector('#depthBtn');
const complexbackgroundBtn = document.querySelector('#complexbackgroundBtn');


let headshotTotal = 0;
let halfbodyTotal = 0;
let fullbodyTotal = 0;

let headshotPrice = sketchBtn.classList.contains('active') ? 80 :
                    (cleanBtn.classList.contains('active') ? 250 : 540);


// Existing code for button click handling and total updating...

// Add logic for sketchBtn and cleanBtn
sketchBtn.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
    cleanBtn.classList.remove('active');
    threedBtn.classList.remove('active');
  }
  updateStylePricing();
  updateButtonStates();
});

cleanBtn.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
    sketchBtn.classList.remove('active');
    threedBtn.classList.remove('active');
  }
  updateStylePricing();
  updateButtonStates();
});

function updateStylePricing() {
  if (sketchBtn.classList.contains('active')) {
    headshotTotal = 80;
    halfbodyTotal = 100;
    fullbodyTotal = 120;
  } else if (cleanBtn.classList.contains('active')) {
    headshotTotal = 250;
    halfbodyTotal = 300;
    fullbodyTotal = 350;
  } else if (threedBtn.classList.contains('active')) {
    headshotTotal = 540;
    halfbodyTotal = 850;
    fullbodyTotal = 1800;
  } else {
    // Default values or reset values, if you want to clear totals when neither is active
    headshotTotal = halfbodyTotal = fullbodyTotal = 0;
  }
  updateTotal();
}
  
  // Initially, buttons should be updated based on the current state
  updateButtonStates();
  
// Define a function to handle the click event for the buttons
function handleButtonClick(btn) {
    const isSketchActive = sketchBtn.classList.contains('active');
    const isCleanActive = cleanBtn.classList.contains('active');
    const isThreedActive = threedBtn.classList.contains('active');
  
      // Check if either sketchBtn or cleanBtn is active and threedBtn is not active
      if ((isSketchActive || isCleanActive) && !isThreedActive) {
              // Toggle active class for other buttons
      btn.classList.toggle('active');
      }
     else {
      // Toggle greyed-out class based on the active state of sketchBtn, cleanBtn, and threedBtn
      btn.classList.toggle('greyed-out', !(isSketchActive || isCleanActive || isThreedActive));
    }
  
    // Update total and button states
    updateTotal();
    updateButtonStates();
  }
  
  // Add click event listeners and update button states for each button
  [coloredBtn, minimalBtn, linelessBtn, basicBtn, complexBtn, painterlyBtn, abstractBtn, basicbackgroundBtn, depthBtn, complexbackgroundBtn].forEach(btn => {
    btn.addEventListener('click', function() {
      handleButtonClick(this); // Pass the clicked button to the function
      updateButtonStates();
    });
  });
  
  // Adjustments for drawing type buttons
  [headshotBtn, halfbodyBtn, fullbodyBtn].forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      updateTotal(); // Update total whenever a button is clicked
    });
  });

  let total = 0;


  if (sketchBtn.classList.contains('active') || cleanBtn.classList.contains('active') || threedBtn.classList.contains('active')) {
    // Calculate totals based on active states and input values
    if (headshotBtn.classList.contains('active')) {
      let headshotPrice = sketchBtn.classList.contains('active') ? 80 : (cleanBtn.classList.contains('active') ? 250 : 540);
      headshotTotal = parseInt(headshotInput.value) * headshotPrice;
      // If you need to perform additional calculation with headshotTotal, do it here
      // For example, multiplying headshotTotal by another factor and then adding to total
      // total += headshotTotal * someOtherFactor; // Example adjustment
    }
    if (halfbodyBtn.classList.contains('active')) {
      let halfbodyPrice = sketchBtn.classList.contains('active') ? 100 : (cleanBtn.classList.contains('active') ? 300 : 850);
      halfbodyTotal = parseInt(halfbodyInput.value) * halfbodyPrice;
    }
    if (fullbodyBtn.classList.contains('active')) {
      let fullbodyPrice = sketchBtn.classList.contains('active') ? 120 : (cleanBtn.classList.contains('active') ? 350 : 1800);
      fullbodyTotal = parseInt(fullbodyInput.value) * fullbodyPrice;
    }  

    total = headshotTotal + halfbodyTotal + fullbodyTotal; // Update total sum

    if (coloredBtn.classList.contains('active') && !(coloredBtn.classList.contains('greyed-out'))) {
      total += 50; // Add 50 if colored is active and not greyed out
    }
  }

    // Update the total display
    totalDisplay.textContent = total.toFixed(2);  

  let totalText = "";

  if (sketchBtn.classList.contains('active')) {
    totalText += "SKETCH\n\n";
  }
  if (cleanBtn.classList.contains('active')) {
    totalText += "CLEAN LINED\n\n";
  }
  if (threedBtn.classList.contains('active')) {
    totalText += "3D MODEL\n\n";
  }
  // Conditionally append details based on the 'active' class and calculate the total
  if (sketchBtn.classList.contains('active') || cleanBtn.classList.contains('active')  || threedBtn.classList.contains('active')) {
    if (headshotBtn.classList.contains('active')) {
      totalText += `Headshot (${headshotInput.value}) = ${headshotTotal}\n`;
    }
    if (halfbodyBtn.classList.contains('active')) {
      totalText += `Halfbody (${halfbodyInput.value}) = ${halfbodyTotal}\n`;
    }
    if (fullbodyBtn.classList.contains('active')) {
      totalText += `Fullbody (${fullbodyInput.value}) = ${fullbodyTotal}\n`;
    }
  }
    // Append "Colored" text conditionally, based on the 'coloredBtn' status
    if (coloredBtn.classList.contains('active') && !(coloredBtn.classList.contains('greyed-out'))) {
    totalText += "Colored Lines: +50\n"; // Add this line to include "Colored" in the totalText
  }
  if (complexbackgroundBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
    totalText += "Complex Background: +900\n"; // Add this line to include "Colored" in the totalText
  }
  totalText += `Total: ${total}`;
  totalInput.value = totalText; // Update the textarea with the detailed breakdown

// Update event listeners for inputs to directly call updateTotal whenever input values change
headshotInput.addEventListener('input', updateTotal);
halfbodyInput.addEventListener('input', updateTotal);
fullbodyInput.addEventListener('input', updateTotal);

// Make sure to call updateButtonStates and updateTotal at least once to initialize the UI correctly.
updateButtonStates();
updateTotal();
