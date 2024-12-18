import React from 'react';

const EventListener = () => {
    const handleClick = () => {
        console.log('Button Clicked');
    }
    return (
        <div>
           <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default EventListener;