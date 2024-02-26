const headshotBtn = document.getElementById('headshotBtn');
const halfbodyBtn = document.getElementById('halfbodyBtn');
const fullbodyBtn = document.getElementById('fullbodyBtn');
const headshotInput = document.getElementById('headshotInput');
const halfbodyInput = document.getElementById('halfbodyInput');
const fullbodyInput = document.getElementById('fullbodyInput');
const totalDisplay = document.getElementById('total');

let headshotTotal = 0;
let halfbodyTotal = 0;
let fullbodyTotal = 0;

//   -----------------------
//   Makes button's input value become 1 when clicked, and 0 when unclicked:
//   -----------------------

headshotBtn.addEventListener('click', () => {
  const inputValue = parseInt(headshotInput.value);
  if (headshotBtn.classList.contains('active')) {
    headshotBtn.classList.remove('active');
    headshotInput.classList.remove('input-active'); // Remove .input-active class
    headshotTotal = 0;
    headshotInput.value = 0; // Set input value to 0
  } else {
    headshotBtn.classList.add('active');
    headshotInput.classList.add('input-active'); // Add .input-active class
    headshotTotal = 250;
    headshotInput.value = 1; // Set input value to 1
  }
  updateTotal();
});

halfbodyBtn.addEventListener('click', () => {
  const inputValue = parseInt(halfbodyInput.value);
  if (halfbodyBtn.classList.contains('active')) {
    halfbodyBtn.classList.remove('active');
    halfbodyInput.classList.remove('input-active'); // Remove .input-active class
    halfbodyTotal = 0;
    halfbodyInput.value = 0; // Set input value to 0
  } else {
    halfbodyBtn.classList.add('active');
    halfbodyInput.classList.add('input-active'); // Add .input-active class
    halfbodyTotal = 300;
    halfbodyInput.value = 1; // Set input value to 1
  }
  updateTotal();
});

fullbodyBtn.addEventListener('click', () => {
  const inputValue = parseInt(fullbodyInput.value);
  if (fullbodyBtn.classList.contains('active')) {
    fullbodyBtn.classList.remove('active');
    fullbodyInput.classList.remove('input-active'); // Remove .input-active class
    fullbodyTotal = 0;
    fullbodyInput.value = 0; // Set input value to 0
  } else {
    fullbodyBtn.classList.add('active');
    fullbodyInput.classList.add('input-active'); // Add .input-active class
    fullbodyTotal = 350;
    fullbodyInput.value = 1; // Set input value to 1
  }
  updateTotal();
});

//   -----------------------
//   Multiplies the value by the current input number:
//   -----------------------

function updateTotal() {
  const total = headshotTotal + halfbodyTotal + fullbodyTotal;
  totalDisplay.textContent = total;
}

headshotInput.addEventListener('change', () => {
  if (headshotBtn.classList.contains('active')) {
    headshotTotal = parseInt(headshotInput.value) * 250;
    updateTotal();
  }
});
halfbodyInput.addEventListener('change', () => {
  if (halfbodyBtn.classList.contains('active')) {
    halfbodyTotal = parseInt(halfbodyInput.value) * 300;
    updateTotal();
  }
});
fullbodyInput.addEventListener('change', () => {
  if (fullbodyBtn.classList.contains('active')) {
    fullbodyTotal = parseInt(fullbodyInput.value) * 350;
    updateTotal();
  }
});

// Disable input fields by default
headshotInput.disabled = true;
halfbodyInput.disabled = true;
fullbodyInput.disabled = true;

// Enable input fields when buttons are clicked
headshotBtn.addEventListener('click', () => {
  headshotInput.disabled = !headshotInput.disabled;
});

halfbodyBtn.addEventListener('click', () => {
  halfbodyInput.disabled = !halfbodyInput.disabled;
});

fullbodyBtn.addEventListener('click', () => {
  fullbodyInput.disabled = !fullbodyInput.disabled;
});