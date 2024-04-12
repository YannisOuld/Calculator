import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const clear = () => {
        setResult('');
    };

    return (
        <div className="calculator">
            <input type="text" value={result} />
            <div className="keypad">
                <div>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                </div>
                <div>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                </div>
                <div>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                </div>
                <button name="+" onClick={handleClick}>+</button>
                <button name="-" onClick={handleClick}>-</button>
                {/* Add more buttons for other numbers and operators */}
                <button onClick={clear}>C</button>
                <button onClick={calculate}>=</button>
            </div>
        </div>
    );
};

export default Calculator;