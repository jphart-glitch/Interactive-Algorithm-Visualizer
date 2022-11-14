/* ------------------------------------------------------------------ */
/* GridArray.jsx                                                      */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
  } from "react-grid-dnd";

var step = 0;

function getStep() {
  return step;
}
function incrementStep(maxSteps) {
  if (step < maxSteps - 1) step += 1;
}

export default function GridArray() {
    const [items, setItems] = React.useState([4, 7, 5, 1, 8, 3, 2, 6]); // supply your own state
    const states = [
      [4, 7, 5, 1, 8, 3, 2, 6],
      [4, 7, 1, 5, 8, 3, 2, 6],
      [1, 4, 7, 5, 8, 3, 2, 6],
      [1, 4, 5, 7, 8, 3, 2, 6],
      [1, 4, 5, 7, 3, 8, 2, 6],
      [1, 4, 5, 7, 2, 3, 8, 6],
      [1, 4, 5, 7, 2, 3, 6, 8],
      [1, 2, 4, 5, 7, 3, 6, 8],
      [1, 2, 3, 4, 5, 7, 6, 8],
      [1, 2, 3, 4, 5, 6, 7, 8]
    ];
  
    // target id will only be set if dragging from one dropzone to another.
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
      const nextState = swap(items, sourceIndex, targetIndex);
      if (validState(nextState)) {
        setItems(nextState);
        incrementStep(states.length);
      }
    }

    function validState(items) {
      let correct = states[getStep()];
      console.log(correct);
      if (!(JSON.stringify(correct) === JSON.stringify(items))) {
        console.log("Wrong!");
        return false;
      }
      else {
        console.log("Correct!");
        return true;
      }
    }
  
    return (
    <div>
        <h1>Simulation of Merge Sort</h1>
        <br />
        <Link to="/">Go Back</Link>
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={8}
          rowHeight={100}
          style={{ height: "400px" }}
        >
          {items.map(item => (
            <GridItem key={item}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: item % 2 === 1 ? "black" : "orange",
                  color: item % 2 === 1 ? "orange" : "black",
                  fontSize: 40,
                  fontWeight: "bold"
                }}
              >
                {item}
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    </div>
    );
  }