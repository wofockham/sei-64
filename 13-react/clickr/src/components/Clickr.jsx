import { useState } from 'react';

const Clickr = () => {
    const [clicks, setClicks] = useState(0);

    // _ is a convention that means this is an event handler
    const _handleClick = () => {
        setClicks(clicks + 1); // no mutation
    };

    return (
        <button onClick={ _handleClick }>
            { clicks } clicks so far
        </button>
    );
};

export default Clickr;