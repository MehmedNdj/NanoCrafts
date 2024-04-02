import React, { useState } from 'react';

function RGBSlider() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const updateColor = () => `rgb(${red}, ${green}, ${blue})`;

  const increaseValue = (colorSetter) => {
    colorSetter((prevValue) => Math.min(prevValue + 5, 255));
  };

  const decreaseValue = (colorSetter) => {
    colorSetter((prevValue) => Math.max(prevValue - 5, 0));
  };

  return (
    <div>
      <div className="box" style={{ backgroundColor: updateColor() }}></div>
      <div className="color-sliders">
        <div className="slider-group">
          <button onClick={() => increaseValue(setRed)}>+</button>
          <input id="red" type="range" min="0" max="255" value={red} onChange={(e) => setRed(e.target.value)} />
          <button onClick={() => decreaseValue(setRed)}>-</button>
        </div>

        <div className="slider-group">
          <button onClick={() => increaseValue(setGreen)}>+</button>
          <input id="green" type="range" min="0" max="255" value={green} onChange={(e) => setGreen(e.target.value)} />
          <button onClick={() => decreaseValue(setGreen)}>-</button>
        </div>

        <div className="slider-group">
          <button onClick={() => increaseValue(setBlue)}>+</button>
          <input id="blue" type="range" min="0" max="255" value={blue} onChange={(e) => setBlue(e.target.value)} />
          <button onClick={() => decreaseValue(setBlue)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default RGBSlider;
