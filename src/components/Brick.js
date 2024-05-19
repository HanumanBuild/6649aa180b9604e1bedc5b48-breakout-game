import React, { useEffect } from 'react';

const Brick = ({ position, bricks }) => {
    useEffect(() => {
        const updateVisibility = () => {
            // Logic to update visibility of bricks on collision
        };
        requestAnimationFrame(updateVisibility);
        return () => cancelAnimationFrame(updateVisibility);
    }, [bricks]);

    return (
        <div style={{
            position: 'absolute',
            left: `${position.x}px`,
            bottom: `${position.y}px`,
            width: '75px',
            height: '20px'
        }} className="bg-green-500" />
    );
};

export default Brick;