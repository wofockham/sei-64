import { useState } from 'react';

const Calculator = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const _updateA = (event) => {
        setA(Number(event.target.value));
    };

    const _updateB = (event) => {
        setB(Number(event.target.value));
    };

    return (
        <div>
            <h1>Credible Calculator</h1>
            <input type="number" onChange={ _updateA } />
            <input type="number" onChange={ _updateB } />

            <h2>Results</h2>
            <p>{ a } + { b } = { a + b }</p>
            <p>{ a } - { b } = { a - b }</p>
            <p>{ a } * { b } = { a * b }</p>
            <p>{ a } / { b } = { a / b }</p>
        </div>
    );
};

export default Calculator;