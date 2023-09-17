import React from "react";
import { useState } from "react";
import './index.css'; // Adjust the import path


//Instruction: 2. Create a component that changes its background color when a button is clicked. 
//1. Add a state property called backgroundColor to the component using the useState hook and set it to an initial color. 
//2. Add a button to the component that, when clicked, generates a random color and sets the backgroundColor state property to that color. 
//3. Use the backgroundColor state property to set the background color of the component. 

const ColorChanger = () => {
  // Initialize the state with an initial color value
  const initialColor = 'red';
  const [backgroundColor, setBackgroundColor] = useState(initialColor);

  // Function to update the background color to a random color
  const updateColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  // Function to generate a random color (hex format)
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className='textFont' style={{ backgroundColor }}>
      <p>Background Color: {backgroundColor}</p>
      <button onClick={updateColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
