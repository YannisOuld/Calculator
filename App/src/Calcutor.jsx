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
            <div className='flex'>
                <input className='text' type="text" value={result} />
            </div>
            <div className="keypad flex center">
                <div>




                    <div>
                        <button className="btn" name="1" onClick={handleClick}>1</button>
                        <button className="btn" name="2" onClick={handleClick}>2</button>
                        <button className="btn" name="3" onClick={handleClick}>3</button>
                    </div>
                    <div>
                        <button className="btn" name="4" onClick={handleClick}>4</button>
                        <button className="btn" name="5" onClick={handleClick}>5</button>
                        <button className="btn" name="6" onClick={handleClick}>6</button>
                    </div>
                    <div>
                        <button className="btn" name="7" onClick={handleClick}>7</button>
                        <button className="btn" name="8" onClick={handleClick}>8</button>
                        <button className="btn" name="9" onClick={handleClick}>9</button>
                    </div>
                </div>
                <div className='operations flex center'>
                    <button className='btn' name="+" onClick={handleClick}>+</button>
                    <button className='btn' name="-" onClick={handleClick}>-</button>
                    <button className='btn' name="/" onClick={handleClick}>/</button>
                </div>
            </div>
            <button className='btn' onClick={clear}>C</button>
            <button className='btn' onClick={calculate}>=</button>
        </div>
    );
};

export default Calculator;