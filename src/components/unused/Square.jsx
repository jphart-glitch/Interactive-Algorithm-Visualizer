/* ------------------------------------------------------------------ */
/* Square.jsx                                                         */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from 'react';

export default function Square({color, children}) {
    const fill = color ? 'black' : 'orange';
    const stroke = color ? 'orange' : 'black';

    return (
        <div
            style={{
                background: fill,
                color: stroke,
            }}
        >
            {children}
        </div>
    )
}