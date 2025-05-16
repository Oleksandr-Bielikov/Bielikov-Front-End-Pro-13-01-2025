import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (value) => {
    setInputValue((prev) => prev + value);
  }

  const clearInput = () => {
    setInputValue('')
  }

  const calculateResult = () => {
    try {
      let expression = inputValue;
      if (expression.includes('%')) {
        expression = expression.replace(/(\d+)%/g, '($1/100)');
      }
      const result = evaluate(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };
  
  const sqrt = () => {
    const num = parseFloat(inputValue);
    const result = Math.sqrt(num);
    setInputValue(result.toString());
  }

  const square = () => {
    const num = parseFloat(inputValue);
    const result = Math.pow(num, 2);
    setInputValue(result.toString());
  }

  return (
    <>
      <h1>Calculator</h1>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> 
      <br/>
      <button type='button' onClick={() => clearInput()}>C</button>
      <button type='button' onClick={() => sqrt()}>√</button>
      <button type='button' onClick={() => handleClick('%')}>%</button>
      <button type='button' onClick={() => handleClick('/')}>/</button>
      <br />
      <button type='button' onClick={() => handleClick('7')}>7</button>
      <button type='button' onClick={() => handleClick('8')}>8</button>
      <button type='button' onClick={() => handleClick('9')}>9</button>
      <button type='button' onClick={() => handleClick('*')}>*</button>
      <br/>
      <button type='button' onClick={() => handleClick('4')}>4</button>
      <button type='button' onClick={() => handleClick('5')}>5</button>
      <button type='button' onClick={() => handleClick('6')}>6</button>
      <button type='button' onClick={() => handleClick('-')}>-</button>
      <br/>
      <button type='button' onClick={() => handleClick('1')}>1</button>
      <button type='button' onClick={() => handleClick('2')}>2</button>
      <button type='button' onClick={() => handleClick('3')}>3</button>
      <button type='button' onClick={() => handleClick('+')}>+</button>
      <br/>
      <button type='button' onClick={() => handleClick('0')}>0</button>
      <button type='button' onClick={() => handleClick('.')}>.</button>
      <button type='button' onClick={() => calculateResult()}>=</button>
      <button type='button' onClick={() => square()}>x²</button>
      
    </>
  )
}

export default App
