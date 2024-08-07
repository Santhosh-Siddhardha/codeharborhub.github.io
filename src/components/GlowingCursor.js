import React, { useEffect } from 'react';
import '../css/custom.css';

const CursorComponent = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        const moveCursor = (e) => {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="cursor-container">
            <div className="cursor" />
        </div>
    );
};

export default CursorComponent;
