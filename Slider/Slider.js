const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const screen = document.querySelector('.screen');

// Function to update color based on slider values
function updateColor() {
  const red = Math.min(Math.max(0, parseInt(redSlider.value)), 255);
  const green = Math.min(Math.max(0, parseInt(greenSlider.value)), 255);
  const blue = Math.min(Math.max(0, parseInt(blueSlider.value)), 255);

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  screen.style.backgroundColor = rgbColor;
}

// Function to adjust slider value (increase or decrease)
function adjustSliderValue(slider, direction) {
  const step = 2; // Amount to increase/decrease by

  // Get current value and ensure it stays within valid range
  let currentValue = Math.min(Math.max(0, parseInt(slider.value)), 255);

  // Adjust value based on direction (increase or decrease)
  currentValue = direction === 'up' ? currentValue + step : currentValue - step;

  // Update slider value and trigger updateColor function
  slider.value = currentValue;
  updateColor();
}

// Event listeners for sliders (update color on change)
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Event listeners for minus buttons (specific to each slider)
const minusButtons = document.querySelectorAll('.controls-minus button');
minusButtons[0].addEventListener('click', () => adjustSliderValue(redSlider, 'down'));
minusButtons[1].addEventListener('click', () => adjustSliderValue(greenSlider, 'down'));
minusButtons[2].addEventListener('click', () => adjustSliderValue(blueSlider, 'down'));

// Event listeners for plus buttons (specific to each slider)
const plusButtons = document.querySelectorAll('.controls-plus button');
plusButtons[0].addEventListener('click', () => adjustSliderValue(redSlider, 'up'));
plusButtons[1].addEventListener('click', () => adjustSliderValue(greenSlider, 'up'));
plusButtons[2].addEventListener('click', () => adjustSliderValue(blueSlider, 'up'));

// Update color on initial load
updateColor();
