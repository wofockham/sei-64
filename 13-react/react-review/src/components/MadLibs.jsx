import { useState } from 'react';

const MadLibs = () => {
    const [noun, setNoun] = useState('');
    const [adjective, setAdjective] = useState('');
    const [person, setPerson] = useState('');
    const [story, setStory] = useState('');
    
    const _handleClick = () => {
        setStory(`${ person } really likes ${ adjective } ${ noun }.`);
    };

    const _handleNounInput = (event) => {
        setNoun(event.target.value);
    };

    const _handleAdjectiveInput = (event) => {
        setAdjective(event.target.value);
    };

    const _handlePersonInput = (event) => {
        setPerson(event.target.value);
    };

    return (
        <div>
            <h1>Mad Libs</h1>
 
             <ul>
                <li>Noun: <input onInput={ _handleNounInput } /></li>
                <li>Adjective: <input onInput={ _handleAdjectiveInput }/></li>
                <li>Someone's Name:<input onInput={ _handlePersonInput }/></li>
             </ul>
 
             <button onClick={ _handleClick }>Lib it!</button>
  
            <div>{ story }</div>
        </div>
    )
};

export default MadLibs;