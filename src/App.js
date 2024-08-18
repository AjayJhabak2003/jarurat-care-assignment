import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIncrement = () => {
    if (number < 150) {
      const newNumber = number + 1;
      updateHistory(newNumber);
    }else{
      alert("Maximum limit reached");
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      const newNumber = number - 1;
      updateHistory(newNumber);
    }else{
      alert("Minimum limit reached");
    }
  };

  const updateHistory = (newNumber) => {
    const newHistory = [...history.slice(0, currentIndex + 1), newNumber];
    setHistory(newHistory);
    setCurrentIndex(currentIndex + 1);
    setNumber(newNumber);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setNumber(history[currentIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setNumber(history[currentIndex + 1]);
    }
  };

  const progress = (number / 150) * 100;

  return (
    <div className="App">
      <div className="container">
        <h1 className="number-display">Number: {number}</h1>
        <div className="button-group">
          <button className="action-button decrement" onClick={handleDecrement}>-1</button>
          <button className="action-button increment" onClick={handleIncrement}>+1</button>
        </div>
        <div className="button-group undo-redo-group">
          <button className="action-button undo" onClick={handleUndo} disabled={currentIndex === 0}>Undo</button>
          <button className="action-button redo" onClick={handleRedo} disabled={currentIndex === history.length - 1}>Redo</button>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
