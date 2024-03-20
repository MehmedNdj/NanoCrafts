const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const screen = document.querySelector('.screen');

function updateColor() {
  const red = Math.min(Math.max(0, parseInt(redSlider.value)), 255);
  const green = Math.min(Math.max(0, parseInt(greenSlider.value)), 255);
  const blue = Math.min(Math.max(0, parseInt(blueSlider.value)), 255);

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  screen.style.backgroundColor = rgbColor;
}

function adjustSliderValue(slider, direction) {
  const step = 2; 

  let currentValue = Math.min(Math.max(0, parseInt(slider.value)), 255);

  currentValue = direction === 'up' ? currentValue + step : currentValue - step;

  slider.value = currentValue;
  updateColor();
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

const minusButtons = document.querySelectorAll('.controls-minus button');
minusButtons[0].addEventListener('click', () => adjustSliderValue(redSlider, 'down'));
minusButtons[1].addEventListener('click', () => adjustSliderValue(greenSlider, 'down'));
minusButtons[2].addEventListener('click', () => adjustSliderValue(blueSlider, 'down'));

const plusButtons = document.querySelectorAll('.controls-plus button');
plusButtons[0].addEventListener('click', () => adjustSliderValue(redSlider, 'up'));
plusButtons[1].addEventListener('click', () => adjustSliderValue(greenSlider, 'up'));
plusButtons[2].addEventListener('click', () => adjustSliderValue(blueSlider, 'up'));

updateColor();
