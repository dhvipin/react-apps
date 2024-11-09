
import React, { useState } from 'react';
import './SimpleInterestCalculator.css'

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
      const simpleInterest = (p * r * t) / 100;
      setResult(simpleInterest.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div className='App'>
      <h1 className='App-header'>Simple Interest Calculator</h1>
      <div>
        <label>Principal amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Annual interest rate (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Time (years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={calculateInterest}>Calculate Interest</button>
      {result !== null && (
        <div>
          <h2>Result:</h2>
          <p>Simple Interest: ${result}</p>
        </div>
      )}
    </div>
  );
};
export default SimpleInterestCalculator;