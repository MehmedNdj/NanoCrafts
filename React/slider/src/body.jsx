import React, { useState } from 'react';

function RGBSlider() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const updateColor = () => `rgb(${red}, ${green}, ${blue})`;

  return (
    <div>
      <div className="box" style={{backgroundColor: updateColor(), width: '400px', height: '200px'}}>
      </div>
      <div className="color-sliders">
        <input type="range" min="0" max="256" value={red} onChange={e => setRed(e.target.value)} />
        <input type="range" min="0" max="256" value={green} onChange={e => setGreen(e.target.value)} />
        <input type="range" min="0" max="256" value={blue} onChange={e => setBlue(e.target.value)} />
      </div>
    </div>
  );
}

export default RGBSlider;
