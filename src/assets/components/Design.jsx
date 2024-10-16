import './design.css'
import { useState } from 'react'


function Design() {

    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                setResult(eval(input));
            } catch {
                setResult('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    return (
            <>
                <div className="container vh-100">
                    <div className="row">
                        <div className="col-12">
                            <div className="calculator mt-5">
                                <div  className="overflow-x-scroll">
                                    <div className='display'>
                                        {result || input || '0'}
                                    </div>
                                </div>
                                <div className="buttons mt-3">
                                            <button className="btn" onClick={() => handleButtonClick('7')}>7</button>
                                            <button className="btn" onClick={() => handleButtonClick('8')}>8</button>
                                            <button className="btn" onClick={() => handleButtonClick('9')}>9</button>
                                            <button className="btn operator" onClick={() => handleButtonClick('/')}>/</button>

                                            <button className="btn" onClick={() => handleButtonClick('4')}>4</button>
                                            <button className="btn" onClick={() => handleButtonClick('5')}>5</button>
                                            <button className="btn" onClick={() => handleButtonClick('6')}>6</button>
                                            <button className="btn operator" onClick={() => handleButtonClick('*')}>×</button>

                                            <button className="btn" onClick={() => handleButtonClick('1')}>1</button>
                                            <button className="btn" onClick={() => handleButtonClick('2')}>2</button>
                                            <button className="btn" onClick={() => handleButtonClick('3')}>3</button>
                                            <button className="btn operator"onClick={() => handleButtonClick('-')}>-</button>

                                            <button className="btn" onClick={() => handleButtonClick('0')}>0</button>
                                            <button className="btn" onClick={() => handleButtonClick('.')}>.</button>
                                            <button className="btn clear" onClick={() => handleButtonClick('C')}>C</button>
                                            <button className="btn operator" onClick={() => handleButtonClick('+')}>+</button>

                                            <button className="btn equal" onClick={() => handleButtonClick('=')}>=</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Design