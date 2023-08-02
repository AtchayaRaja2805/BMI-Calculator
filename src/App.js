import React, { useState } from 'react';
import './App.css';
function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    alert("Your BMI is : "+weight/(height*height));
  };
 
  return (
    <div className="bodyy">
      <div className='header'>
        BMI CALCULATOR
      </div>
      <div className="container">
        <div className='form-groups'> 
        <label id='sub'>Weight (in kg)</label>
        <br/>
        <br/>
        <input className="input1" type="range" min={0} max={200} step={1} placeholder="Weight"  id="weight" name="weight" value={weight}
            onChange={handleWeightChange}/>
        <br/>
        <label id='show'>Weight : {weight}</label>
        </div>
        <div className='form-groups'>
        <label id='sub'>Height (in m)</label>
        <br/>
        <br/>
        <input className="input1" type="range" min={0} max={10} step={1} placeholder="Height" id="height" name="height" value={height}
            onChange={handleHeightChange}/>
        <br/>
        <label id='show'>Height : {height}</label>
        </div>
        <div>
        <button id='btns' type="submit" onClick={handleSubmit}>Calculate</button>
      </div>
    
      </div>
      
    </div>
  );
}

export default App;
