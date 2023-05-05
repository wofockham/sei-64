import { useState } from 'react';

const Profile = (props) => {
    const [height, setHeight] = useState(100);

    const _zoomIn = () => {
        setHeight(height + 10);
    };

    const _zoomOut = () => {
        setHeight(height - 10);
    };

    const _resetHeight = () => {
        setHeight(100);
    };

    const { name, motto, age, pic } = props; // object destructuring
    return (
        <div>
            <h2>{ name }</h2>
            <h3>Motto: { motto }</h3>
            <h4>Age: { age }</h4>
            <div>
                <button onClick={ _zoomIn }> + </button>
                <button onClick={ _zoomOut }> - </button>
                <button onClick={ _resetHeight }> Reset </button>
            </div>
            <img src={ pic } height={ height } />
        </div>
    );
};

export default Profile;
