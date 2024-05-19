import React, { useEffect } from 'react';

const Ball = ({ position }) => {
    useEffect(() => {
        const checkCollision = () => {
            // Logic to check and handle collisions
        };
        requestAnimationFrame(checkCollision);
        return () => cancelAnimationFrame(checkCollision);
    }, [position]);

    return (
        <div style={{
            position: 'absolute',
            left: `${position.x}px`,
            bottom: `${position.y}px`,
            width: '20px',
            height: '20px',
            borderRadius: '50%'
        }} className="bg-red-500" />
    );
};

export default Ball;