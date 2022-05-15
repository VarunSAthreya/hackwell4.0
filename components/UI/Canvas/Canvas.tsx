import React, { useEffect } from 'react';
import { canvas, utils } from './utils';

const Canvas = () => {
    useEffect(() => {
        utils(window);

        canvas(window, document.querySelectorAll.bind(document));
    }, []);

    return (
        <canvas
            className="canvas"
            width="400"
            height="400"
            style={{
                backgroundColor: '#000',
            }}
        ></canvas>
    );
};

export default Canvas;
