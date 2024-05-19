import React, { useState, useEffect } from 'react';
import Paddle from './Paddle';
import Ball from './Ball';
import Brick from './Brick';

const GameBoard = () => {
    const [paddlePosition, setPaddlePosition] = useState({ x: 150, y: 30 });
    const [ballPosition, setBallPosition] = useState({ x: 170, y: 50 });
    const [bricks, setBricks] = useState([...Array(20)].map((_, index) => ({
        x: 75 * (index % 5),
        y: 400 - 30 * Math.floor(index / 5),
        id: index
    })));

    useEffect(() => {
      const optimizePerformance = () => {
        // Logic to optimize performance
      };
      window.addEventListener('resize', optimizePerformance);
      return () => window.removeEventListener('resize', optimizePerformance);
    }, []);

    return (
        <div className="relative mx-auto w-full max-w-md h-screen bg-black flex items-center justify-center">
            <Paddle position={paddlePosition} />
            <Ball position={ballPosition} />
            {bricks.map(brick => (
                <Brick key={brick.id} position={{ x: brick.x, y: brick.y }} />
            ))}
        </div>
    );
};

export default GameBoard;