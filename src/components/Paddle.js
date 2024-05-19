import React, { useEffect } from 'react';

const Paddle = ({ position }) => {
    useEffect(() => {
        const updatePaddlePosition = () => {
            // Adjust paddle position based on screen size
        };
        window.addEventListener('resize', updatePaddlePosition);
        return () => window.removeEventListener('resize', updatePaddlePosition);
    }, []);

    return (
        <div style={{
            position: 'absolute',
            left: `${position.x}px`,
            bottom: `${position.y}px`,
            width: '100px',
            height: '20px'
        }} className="bg-blue-500" />
    );
};

export default Paddle;