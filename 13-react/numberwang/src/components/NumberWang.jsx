import { useState } from 'react';
import axios from 'axios';

const NumberWang = () => {
    const [fact, setFact] = useState('');

    const _fetchFact = () => {
        axios('http://numbersapi.com/random/trivia?json').then((response) => {
            setFact(response.data.text);
        });
    };

    return (
        <div>
            <button onClick={ _fetchFact }>
                Numberwang
            </button>
            <p>
                { fact }
            </p>
        </div>
    );
};

export default NumberWang;