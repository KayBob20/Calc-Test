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
// Add logic for sketchBtn
sketchBtn.addEventListener('click', function() {
  const isActive = this.classList.contains('active');
  if (!isActive) {
    // Add 'active' class to sketchBtn
    this.classList.add('active');
    // Remove 'active' class from other buttons
    cleanBtn.classList.remove('active');
    threedBtn.classList.remove('active');
  } else {
    // Remove 'active' class from sketchBtn
    this.classList.remove('active');
  }
  // Update style pricing and button states
  updateStylePricing();
  updateButtonStates();
});

// Add logic for cleanBtn
cleanBtn.addEventListener('click', function() {
  const isActive = this.classList.contains('active');
  if (!isActive) {
    // Add 'active' class to cleanBtn
    this.classList.add('active');
    // Remove 'active' class from other buttons
    sketchBtn.classList.remove('active');
    threedBtn.classList.remove('active');
  } else {
    // Remove 'active' class from cleanBtn
    this.classList.remove('active');
  }
  // Update style pricing and button states
  updateStylePricing();
  updateButtonStates();
});

// Add logic for threedBtn
threedBtn.addEventListener('click', function() {
  const isActive = this.classList.contains('active');
  if (!isActive) {
    // Add 'active' class to threedBtn
    this.classList.add('active');
    // Remove 'active' class from other buttons
    sketchBtn.classList.remove('active');
    cleanBtn.classList.remove('active');
    // Disable linelessBtn and coloredBtn when threedBtn is active
    linelessBtn.classList.add('greyed-out');
    linelessBtn.disabled = true;
    coloredBtn.classList.add('greyed-out');
    coloredBtn.disabled = true;
    minimalBtn.classList.add('greyed-out');
    minimalBtn.disabled = true;
    basicBtn.classList.add('greyed-out');
    basicBtn.disabled = true;
    complexBtn.classList.add('greyed-out');
    complexBtn.disabled = true;
    painterlyBtn.classList.add('greyed-out');
    painterlyBtn.disabled = true;
    abstractBtn.classList.add('greyed-out');
    abstractBtn.disabled = true;
    basicbackgroundBtn.classList.add('greyed-out');
    basicbackgroundBtn.disabled = true;
    depthBtn.classList.add('greyed-out');
    depthBtn.disabled = true;
    complexbackgroundBtn.classList.add('greyed-out');
    complexbackgroundBtn.disabled = true;
    // Remove active class from coloredBtn when threedBtn is active
    coloredBtn.classList.remove('active');
  } else {
    // Remove 'active' class from threedBtn
    this.classList.remove('active');
    // Enable linelessBtn and coloredBtn if threedBtn is not active
    linelessBtn.classList.remove('greyed-out');
    linelessBtn.disabled = false;
    coloredBtn.classList.remove('greyed-out');
    coloredBtn.disabled = false;
    minimalBtn.classList.remove('greyed-out');
    minimalBtn.disabled = false;
    basicBtn.classList.remove('greyed-out');
    basicBtn.disabled = false;
    complexBtn.classList.remove('greyed-out');
    complexBtn.disabled = false;
    painterlyBtn.classList.remove('greyed-out');
    painterlyBtn.disabled = false;
    abstractBtn.classList.remove('greyed-out');
    abstractBtn.disabled = false;
    basicbackgroundBtn.classList.remove('greyed-out');
    basicbackgroundBtn.disabled = false;
    depthBtn.classList.remove('greyed-out');
    depthBtn.disabled = false;
    complexbackgroundBtn.classList.remove('greyed-out');
    complexbackgroundBtn.disabled = false;
    // Make coloredBtn active if neither sketchBtn nor cleanBtn are active
    if (!sketchBtn.classList.contains('active') && !cleanBtn.classList.contains('active')) {
      coloredBtn.classList.add('active');
    }
  }
  // Update style pricing and button states
  updateStylePricing();
  updateButtonStates();
});


// uggggg

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
  linelessBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;
  minimalBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;
  basicBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;
  complexBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;
  painterlyBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;
  abstractBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;
  basicbackgroundBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;
  depthBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;
  complexbackgroundBtn.disabled = !(isSketchActive || isCleanActive) || isThreedActive;

  // abstractBtn.disabled = !isStyleActive;
  // basicbackgroundBtn.disabled = !isStyleActive;
  // depthBtn.disabled = !isStyleActive;
  // complexbackgroundBtn.disabled = !isStyleActive;

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

  if (!isSketchActive && !isCleanActive) {
    linelessBtn.classList.remove('active');
  }

  if (!isSketchActive && !isCleanActive) {
    minimalBtn.classList.remove('active');
  }

  if (!isSketchActive && !isCleanActive) {
    basicBtn.classList.remove('active');
  }

  if (!isSketchActive && !isCleanActive) {
    complexBtn.classList.remove('active');
  }

  if (!isSketchActive && !isCleanActive) {
    painterlyBtn.classList.remove('active');
  }

  if (!isSketchActive && !isCleanActive) {
    abstractBtn.classList.remove('active');
  }

  if (!isSketchActive && !isCleanActive) {
    basicbackgroundBtn.classList.remove('active');
  }

  if (!isSketchActive && !isCleanActive) {
    depthBtn.classList.remove('active');
  }

  if (!isSketchActive && !isCleanActive) {
    complexbackgroundBtn.classList.remove('active');
  }

  // Toggle 'greyed-out' class for linelessBtn based on sketch or clean being active
  linelessBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);
  minimalBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);
  basicBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);
  complexBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);
  painterlyBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);
  abstractBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);
  basicbackgroundBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);
  depthBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);
  complexbackgroundBtn.classList.toggle('greyed-out', !isStyleActive || isThreedActive);

}

// Initially, buttons should be updated based on the current state
updateButtonStates();

// Define a function to handle the click event for the buttons
function handleButtonClick(btn) {
  if (btn === coloredBtn || btn === linelessBtn || btn === minimalBtn || btn === basicBtn || btn === complexBtn || btn === painterlyBtn || btn === abstractBtn || btn === basicbackgroundBtn || btn === depthBtn || btn === complexbackgroundBtn) {
    // If the button clicked is coloredBtn, linelessBtn, or minimalBtn, toggle its 'active' class directly
    btn.classList.toggle('active');
  } else {
    // Toggle 'active' class for other buttons
    btn.classList.toggle('active');
    // Toggle 'greyed-out' class based on sketch, clean, or threed being active
    btn.classList.toggle('greyed-out', !(sketchBtn.classList.contains('active') || cleanBtn.classList.contains('active') || threedBtn.classList.contains('active')));
  }

  // If sketchBtn or cleanBtn is clicked, remove the active class from coloredBtn, linelessBtn, and minimalBtn
  if (btn === sketchBtn || btn === cleanBtn) {
    coloredBtn.classList.remove('active');
    linelessBtn.classList.remove('active');
    minimalBtn.classList.remove('active');
    basicBtn.classList.remove('active');
    complexBtn.classList.remove('active');
    painterlyBtn.classList.remove('active');
    abstractBtn.classList.remove('active');
    basicbackgroundBtn.classList.remove('active');
    depthBtn.classList.remove('active');
    complexbackgroundBtn.classList.remove('active');
  }

  // If coloredBtn, linelessBtn, or minimalBtn gains the greyed-out class, remove its active class
  if (coloredBtn.classList.contains('greyed-out')) {
    coloredBtn.classList.remove('active');
  }
  if (linelessBtn.classList.contains('greyed-out')) {
    linelessBtn.classList.remove('active');
  }
  if (minimalBtn.classList.contains('greyed-out')) {
    minimalBtn.classList.remove('active');
  }

  if (basicBtn.classList.contains('greyed-out')) {
    basicBtn.classList.remove('active');
  }

  if (complexBtn.classList.contains('greyed-out')) {
    complexBtn.classList.remove('active');
  }

  if (painterlyBtn.classList.contains('greyed-out')) {
    painterlyBtn.classList.remove('active');
  }
  if (abstractBtn.classList.contains('greyed-out')) {
    abstractBtn.classList.remove('active');
  }

  if (basicbackgroundBtn.classList.contains('greyed-out')) {
    basicbackgroundBtn.classList.remove('active');
  }

  if (depthBtn.classList.contains('greyed-out')) {
    depthBtn.classList.remove('active');
  }

  if (complexbackgroundBtn.classList.contains('greyed-out')) {
    complexbackgroundBtn.classList.remove('active');
  }

  // Update total
  updateTotal();
}

// grrrr

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
  linelessBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);
  minimalBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);
  basicBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);
  complexBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);
  painterlyBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);
  abstractBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);
  basicbackgroundBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);
  depthBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);
  complexbackgroundBtn.classList.toggle('greyed-out', !isSketchOrCleanActive || isThreedActive);

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