/* ------------------------------------------------------------------ */
/* Element.jsx                                                        */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from 'react';
import {ItemTypes} from "./Constants";
import {useDrag} from 'react-dnd';

export default function Element({value}) {

    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.ELEMENT,
        item: {itemID: {value}},
        collect: monitor => ({
            item: monitor.getItem(),
            isDragging: !!monitor.isDragging()
        }),
    }));

    return <div
        ref={drag}
        style={{
            opacity: isDragging ? 0.5 : 1,
            width: '100%',
            height: '100%',
            fontSize: 40,
            fontWeight: 'bold',
            cursor: 'move'
        }}
        key={value}>
            {value}
    </div>
}