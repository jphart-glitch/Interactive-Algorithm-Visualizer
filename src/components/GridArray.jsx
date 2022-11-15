/* ------------------------------------------------------------------ */
/* GridArray.jsx                                                      */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from 'react';

import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    move
  } from "react-grid-dnd";

  import { all_states } from "./States";

  var step = 0;

function getStep() {
  return step;
}
function incrementStep(maxSteps) {
  if (step < maxSteps - 1) step += 1;
}
  
  export default function GridArray() {
    const [items, setItems] = React.useState({
        array : [4, 7, 5, 1, 8, 3, 2, 6], // the final merged array
        left : [], // the left-hand merging array
        right : [] // the right-hand merging array
    });

    const states = all_states.MERGESORT;
  
    // target id will only be set if dragging from one dropzone to another.
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        if (targetId) {
            const swaps = move(
                items[sourceId],
                items[targetId],
                sourceIndex,
                targetIndex
            );
            let result = JSON.parse(JSON.stringify(items));
            result[sourceId] = swaps[0];
            result[targetId] = swaps[1];
            if (validState(result)) {
                setItems({
                    ...items,
                    [sourceId]: swaps[0],
                    [targetId]: swaps[1]
                });
                incrementStep(states.length);
            }
            else {

            }
        }
        else {
            const nextState = swap(items[sourceId], sourceIndex, targetIndex);
            let result = JSON.parse(JSON.stringify(items));
            result[sourceId] = nextState;
            if (validState(result)) {
                setItems({...items, [sourceId] : nextState});
                incrementStep(states.length);
            }
            else {
                
            }
        }
    }

    function validState(result) {
        let correct = states[getStep()];
        if (!(JSON.stringify(correct) === JSON.stringify(result))) {
          console.log("Wrong!");
          return false;
        }
        else {
          console.log("Correct!");
          return true;
        }
    }
  
    return (
      <GridContextProvider onChange={onChange}>
        <center><p>Destination Array</p></center>
        <div className="row" style={{height: 200}}>
            <div className="col-sm container" style={{borderStyle: "solid"}}>
                <p>Dropzone Main</p>
                <GridDropZone
                id="array"
                boxesPerRow={8}
                rowHeight={100}
                style={{ height: "100%" }}
                >
                {items.array.map(item => (
                    <GridItem key={item}>
                    <div
                        style={{
                            width: 100,
                            backgroundColor: item.value % 2 === 1 ? "black" : "orange",
                            color: item.value % 2 === 1 ? "orange" : "black",
                            fontSize: 40,
                            fontWeight: "bold",
                            textAlign: "center",
                            borderStyle: "solid",
                            borderColor: "gray"
                        }}
                        >
                        {item}
                    </div>
                    </GridItem>
                ))}
                </GridDropZone>
            </div>
        </div>
        <br />
        <center><p>Merging Arrays</p></center>
        <div className="row" style={{height: 200}}>
            <div className="col-sm container" style={{borderStyle: "solid"}}>
                <p>Dropzone Left</p>
                <GridDropZone
                id="left"
                boxesPerRow={4}
                rowHeight={100}
                style={{ height: "100%" }}
                >
                {items.left.map(item => (
                    <GridItem key={item}>
                    <div
                        style={{
                            width: 100,
                            backgroundColor: item.value % 2 === 1 ? "black" : "orange",
                            color: item.value % 2 === 1 ? "orange" : "black",
                            fontSize: 40,
                            fontWeight: "bold",
                            textAlign: "center",
                            borderStyle: "solid",
                            borderColor: "gray"
                        }}
                        >
                        {item}
                    </div>
                    </GridItem>
                ))}
                </GridDropZone>
            </div>
            <div className="col-sm container" style={{borderStyle: "solid"}}>
                <p>Dropzone Left</p>
                <GridDropZone
                id="right"
                boxesPerRow={4}
                rowHeight={100}
                style={{ height: "100%" }}
                >
                {items.right.map(item => (
                    <GridItem key={item}>
                    <div
                        style={{
                            width: 100,
                            backgroundColor: item.value % 2 === 1 ? "black" : "orange",
                            color: item.value % 2 === 1 ? "orange" : "black",
                            fontSize: 40,
                            fontWeight: "bold",
                            textAlign: "center",
                            borderStyle: "solid",
                            borderColor: "gray"
                        }}
                        >
                        {item}
                    </div>
                    </GridItem>
                ))}
                </GridDropZone>
            </div>
        </div>
      </GridContextProvider>      
    );
  }