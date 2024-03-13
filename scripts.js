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

threedBtn.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    coloredBtn.classList.remove('greyed-out');
    coloredBtn.disabled = false; // Enable coloredBtn if threedBtn is not active
    if (!sketchBtn.classList.contains('active') && !cleanBtn.classList.contains('active')) {
      // If neither sketchBtn nor cleanBtn are active, make coloredBtn active
      coloredBtn.classList.add('active');
    }
  } else {
    this.classList.add('active');
    sketchBtn.classList.remove('active');
    cleanBtn.classList.remove('active');
    coloredBtn.classList.remove('active');
    coloredBtn.classList.add('greyed-out');
    coloredBtn.disabled = true; // Disable coloredBtn when threedBtn is active
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

// Update button states and remove 'active' class from headshot, halfbody, and fullbody buttons if necessary
function updateButtonStates() {
  const isSketchActive = sketchBtn.classList.contains('active');
  const isCleanActive = cleanBtn.classList.contains('active');
  const isThreedActive = threedBtn.classList.contains('active');
  
  const isStyleActive = isSketchActive || isCleanActive || isThreedActive;

  headshotBtn.disabled = !isStyleActive;
  halfbodyBtn.disabled = !isStyleActive;
  fullbodyBtn.disabled = !isStyleActive;

  // Disable coloredBtn only if neither sketchBtn nor cleanBtn is active
  coloredBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;

  // Disable linelessBtn if threedBtn is active
  linelessBtn.disabled = !isStyleActive || isThreedActive;
  // Toggle 'greyed-out' class for linelessBtn based on its disabled state
  linelessBtn.classList.toggle('greyed-out', linelessBtn.disabled || (!isSketchActive && !isCleanActive));

  minimalBtn.disabled = !isStyleActive;
  basicBtn.disabled = !isStyleActive;
  complexBtn.disabled = !isStyleActive;
  painterlyBtn.disabled = !isStyleActive;
  abstractBtn.disabled = !isStyleActive;
  basicbackgroundBtn.disabled = !isStyleActive;
  depthBtn.disabled = !isStyleActive;
  complexbackgroundBtn.disabled = !isStyleActive;

  // Iterate through all buttons to update their classes
  [headshotBtn, halfbodyBtn, fullbodyBtn, linelessBtn, minimalBtn, basicBtn, complexBtn, painterlyBtn, abstractBtn, basicbackgroundBtn, depthBtn, complexbackgroundBtn].forEach(btn => {
    if (!isStyleActive) {
      btn.classList.remove('active');
      btn.classList.add('greyed-out');
      const input = btn === headshotBtn ? headshotInput : btn === halfbodyBtn ? halfbodyInput : btn === fullbodyBtn ? fullbodyInput : null;
      if (input) {
        input.value = 0; // Reset input value to 0
        input.classList.remove('input-active'); // Remove 'input-active' class
      }
    } else {
      btn.classList.remove('greyed-out');
    }
  });

  // If neither sketchBtn nor cleanBtn are active, remove the active class from coloredBtn
  if (!isSketchActive && !isCleanActive) {
    coloredBtn.classList.remove('active');
  }

  // Toggle 'greyed-out' class for coloredBtn based on sketch or clean being active
  coloredBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);

  // Toggle 'greyed-out' class for linelessBtn if threedBtn is active
  linelessBtn.classList.toggle('greyed-out', isThreedActive || (!isSketchActive && !isCleanActive));
}

// Initially, buttons should be updated based on the current state
updateButtonStates();

// Define a function to handle the click event for the buttons
// Define a function to handle the click event for the buttons
function handleButtonClick(btn) {
  // If the button clicked is coloredBtn, toggle its 'active' class directly
  if (btn === coloredBtn) {
    btn.classList.toggle('active');
  } else {
    // Toggle 'active' class for other buttons
    btn.classList.toggle('active');
    // Toggle 'greyed-out' class based on sketch or clean being active
    btn.classList.toggle('greyed-out', !(sketchBtn.classList.contains('active') || cleanBtn.classList.contains('active') || threedBtn.classList.contains('active')));
  }

  // If sketchBtn or cleanBtn is clicked, remove the active class from coloredBtn
  if (btn === sketchBtn || btn === cleanBtn) {
    coloredBtn.classList.remove('active');
  }

  // If coloredBtn gains the greyed-out class, remove its active class
  if (coloredBtn.classList.contains('greyed-out')) {
    coloredBtn.classList.remove('active');
  }

  // Update total
  updateTotal();
}

// Add click event listeners and update button states for each button
[coloredBtn, minimalBtn, linelessBtn, basicBtn, complexBtn, painterlyBtn, abstractBtn, basicbackgroundBtn, depthBtn, complexbackgroundBtn].forEach(btn => {
  btn.addEventListener('click', function() {
    handleButtonClick(this); // Pass the clicked button to the function
    updateButtonStates(); // Update button states after button click
  });
});

// Adjustments for drawing type buttons
[headshotBtn, halfbodyBtn, fullbodyBtn].forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle 'active' state for clicked button
    btn.classList.toggle('active');
    // Enable/disable corresponding input based on 'active' state of button
    const input = btn === headshotBtn ? headshotInput : btn === halfbodyBtn ? halfbodyInput : fullbodyInput;
    input.disabled = !btn.classList.contains('active');
    input.value = btn.classList.contains('active') ? 1 : 0; // Set input value to 1 if active, otherwise 0
    
    // Add or remove 'input-active' class based on 'active' state of button
    if (btn.classList.contains('active')) {
      input.classList.add('input-active');
    } else {
      input.classList.remove('input-active');
    }
    
    updateTotal(); // Update total whenever a button is clicked
    updateButtonStates(); // Update button states after button click
  });
});

// Initially, buttons should be updated based on the current state
updateButtonStates();


// Revised updateTotal with corrected coloredBtn toggling logic
function updateTotal() {
  const isSketchOrCleanActive = sketchBtn.classList.contains('active') || cleanBtn.classList.contains('active');
  const isThreedActive = threedBtn.classList.contains('active');

  coloredBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);

  let total = 0;
  let totalText = "";

  let headshotTotal = 0;
  let halfbodyTotal = 0;
  let fullbodyTotal = 0;

  if (sketchBtn.classList.contains('active') || cleanBtn.classList.contains('active') || threedBtn.classList.contains('active')) {
    if (headshotBtn.classList.contains('active')) {
      let headshotPrice = sketchBtn.classList.contains('active') ? 80 : (cleanBtn.classList.contains('active') ? 250 : 540);
      headshotTotal = parseInt(headshotInput.value) * headshotPrice;
    }
    if (halfbodyBtn.classList.contains('active')) {
      let halfbodyPrice = sketchBtn.classList.contains('active') ? 100 : (cleanBtn.classList.contains('active') ? 300 : 850);
      halfbodyTotal = parseInt(halfbodyInput.value) * halfbodyPrice;
    }
    if (fullbodyBtn.classList.contains('active')) {
      let fullbodyPrice = sketchBtn.classList.contains('active') ? 120 : (cleanBtn.classList.contains('active') ? 350 : 1800);
      fullbodyTotal = parseInt(fullbodyInput.value) * fullbodyPrice;
    }

    total = headshotTotal + halfbodyTotal + fullbodyTotal;

    if (coloredBtn.classList.contains('active') && !(coloredBtn.classList.contains('greyed-out'))) {
      total += 50;
    }
    if (linelessBtn.classList.contains('active') && !(linelessBtn.classList.contains('greyed-out'))) {
      total += 100;
    }
    if (minimalBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      total += 30;
    }
    if (basicBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      total += 100;
    }
    if (complexBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      total += 200;
    }
    if (painterlyBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      total += 500;
    }
    if (abstractBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      total += 80;
    }
    if (basicbackgroundBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      total += 200;
    }
    if (depthBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      total += 600;
    }
    if (complexbackgroundBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      total += 900;
    }

    if (sketchBtn.classList.contains('active')) {
      totalText += "SKETCH\n\n";
    }
    if (cleanBtn.classList.contains('active')) {
      totalText += "CLEAN LINED\n\n";
    }
    if (threedBtn.classList.contains('active')) {
      totalText += "3D MODEL\n\n";
    }

    if (headshotBtn.classList.contains('active')) {
      totalText += `Headshot (${headshotInput.value}) = ${headshotTotal}\n`;
    }
    if (halfbodyBtn.classList.contains('active')) {
      totalText += `Halfbody (${halfbodyInput.value}) = ${halfbodyTotal}\n`;
    }
    if (fullbodyBtn.classList.contains('active')) {
      totalText += `Fullbody (${fullbodyInput.value}) = ${fullbodyTotal}\n`;
    }

    if (coloredBtn.classList.contains('active') && !(coloredBtn.classList.contains('greyed-out'))) {
      totalText += "Colored Lines: +50\n";
    }
    if (linelessBtn.classList.contains('active') && !(linelessBtn.classList.contains('greyed-out'))) {
      totalText += "Lineless: +100\n";
    }
    if (minimalBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      totalText += "Minimal Shading: +30\n";
    }
    if (basicBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      totalText += "Basic Shading: +100\n";
    }
    if (complexBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      totalText += "Complex Shading: +200\n";
    }
    if (painterlyBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      totalText += "Painterly Shading: +500\n";
    }
    if (abstractBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      totalText += "Abstract Background: +80\n";
    }
    if (basicbackgroundBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      totalText += "Basic Background: +200\n";
    }
    if (depthBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      totalText += "Depth Background: +600\n";
    }
    if (complexbackgroundBtn.classList.contains('active') && !(minimalBtn.classList.contains('greyed-out'))) {
      totalText += "Complex Background: +900\n";
    }
  }

  totalText += `Total: ${total}`;
  totalInput.value = totalText.trim();
}

// Update event listeners for inputs to directly call updateTotal whenever input values change
headshotInput.addEventListener('input', updateTotal);
halfbodyInput.addEventListener('input', updateTotal);
fullbodyInput.addEventListener('input', updateTotal);

// Make sure to call updateButtonStates and updateTotal at least once to initialize the UI correctly.
updateButtonStates();
updateTotal();
