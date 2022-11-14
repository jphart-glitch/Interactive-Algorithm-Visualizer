/* ------------------------------------------------------------------ */
/* PageArray.jsx                                                      */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {ItemTypes} from "./Constants";
import {useDrop} from 'react-dnd';

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value : props.value
      };
    }
    [{isOver}, drop] = useDrop(() => ({
        accept: ItemTypes.ELEMENT,
        drop: monitor => {
            console.log('moving item: ', monitor.itemID.value);
            console.log('dropped into: ', {children}.children.props.value);
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }));

    render() {
      return (
        
      );
    }
  }

function renderSquare(value, index) {
    return (
        <div key={index} style={{width: '12.5%', height:'12.5%'}}>
            <ArraySquare index={index}>
                {renderElement(value)}
            </ArraySquare>
        </div>
    )
}

function renderElement(value) {
    return <Element value={value}/>
}

export default function PageArray() {
    const squares = [];
    squares.push(renderSquare(4, 0));
    squares.push(renderSquare(7, 1));
    squares.push(renderSquare(5, 2));
    squares.push(renderSquare(1, 3));
    squares.push(renderSquare(8, 4));
    squares.push(renderSquare(3, 5));
    squares.push(renderSquare(2, 6));
    squares.push(renderSquare(6, 7));

    return <DndProvider backend={HTML5Backend}>
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }}
        >
            {squares}
        </div>
    </DndProvider>
}