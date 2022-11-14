/* ------------------------------------------------------------------ */
/* ArraySquare.jsx                                                    */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from 'react';
import Square from "./Square";
import {swapSquares} from "./Simulation";
import {ItemTypes} from "./Constants";
import {useDrop} from 'react-dnd';

export default function ArraySquare({index, children}) {
    const [{isOver}, drop] = useDrop(() => ({
        accept: ItemTypes.ELEMENT,
        drop: monitor => {
            console.log('moving item: ', monitor.itemID.value);
            console.log('dropped into: ', {children}.children.props.value);
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }));

    const color = index % 2 === 1;
    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}
        >
            <Square color={color}>{children}</Square>
            {isOver && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex : 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow'
                    }}
                />
            )}
        </div>
    )
}