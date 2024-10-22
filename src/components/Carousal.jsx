// src/components/Carousel.jsx

import React, { useState } from 'react';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const boxes = [
        { id: 1, content: 'Box 1', color: 'bg-red-500' },
        { id: 2, content: 'Box 2', color: 'bg-blue-500' },
        { id: 3, content: 'Box 3', color: 'bg-green-500' },
        { id: 4, content: 'Box 4', color: 'bg-yellow-500' },
        { id: 5, content: 'Box 5', color: 'bg-purple-500' },
        { id: 6, content: 'Box 6', color: 'bg-pink-500' },
        { id: 7, content: 'Box 7', color: 'bg-indigo-500' },
    ];

    const shiftLeft = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? boxes.length - 1 : prevIndex - 1
        );
    };

    const shiftRight = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === boxes.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex items-center justify-between p-4">
            <button className="cursor-pointer" onClick={shiftLeft}>
                <img src="/left_arrow.png" alt="Left Arrow" className="w-8" />
            </button>
            <div className="relative flex flex-col items-center">
                <ul className="flex items-center justify-center transition-transform duration-500">
                    {boxes.map((box, index) => (
                        <li
                            key={box.id}
                            className={`w-48 h-64 shadow-lg flex justify-center items-center text-white transition-transform duration-500 ${
                                index === activeIndex
                                    ? 'scale-100'
                                    : index === (activeIndex + 1) % boxes.length
                                    ? 'scale-90'
                                    : 'scale-75 opacity-50'
                            } ${box.color}`}
                        >
                            {box.content}
                        </li>
                    ))}
                </ul>
                <div className="absolute text-center mt-4">
                    <h3 className="text-xl font-bold">The Famous Five</h3>
                    <p className="text-sm">
                        The Famous Five is a series of children's adventure novels written by English author Enid Blyton.
                    </p>
                </div>
            </div>
            <button className="cursor-pointer" onClick={shiftRight}>
                <img src="/right_arrow.png" alt="Right Arrow" className="w-8" />
            </button>
        </div>
    );
};

export default Carousel;
