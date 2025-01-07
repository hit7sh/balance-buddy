import React, { useEffect, useRef, useState } from 'react'

const SimpleCalculator = () => {
   const [input, setInput] = useState('');
  const inputRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleButtonClick = (value:any) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else if (value === '%') {
      try {
        setInput((parseFloat(input) / 100).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const handleKeyPress = (event:any) => {
    if (!isFocused) return;
    const validKeys = '0123456789+-*/.=C%';
    if (validKeys.includes(event.key)) {
      if (event.key === 'C') {
        setInput('');
      } else if (event.key === '=') {
        try {
          setInput(eval(input).toString());
        } catch {
          setInput('Error');
        }
      } else {
        setInput(input + event.key);
      }
    } else if (event.key === 'Enter') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (event.key === 'Backspace') {
      setInput(input.slice(0, -1));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input, isFocused]);

  const buttons = [
    'C', '⌫', '/',
    '7', '8', '9', '*', 
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      onClick={() => inputRef?.current?.focus?.()}
    >
      <div
        ref={inputRef}
        tabIndex={0}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-80 p-6 bg-white rounded-lg shadow-lg focus:outline-none"
      >
        <div className="mb-4 text-right text-2xl font-mono text-gray-700 border-b border-gray-300 pb-2">{input || '0'}</div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((button) => (
            <button
              key={button}
              className={`p-4 text-lg font-semibold bg-gray-200 rounded hover:bg-gray-300 focus:outline-none ${'=C'.includes(button) && 'col-span-2'}`}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimpleCalculator