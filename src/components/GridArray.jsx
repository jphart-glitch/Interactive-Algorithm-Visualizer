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
      array : [
        {id: 1, value: 4},
        {id: 2, value: 7},
        {id: 3, value: 5},
        {id: 4, value: 1},
        {id: 5, value: 8},
        {id: 6, value: 3},
        {id: 7, value: 2},
        {id: 8, value: 6}
        ], // the final merged array
      left : [], // the left-hand merging array
      right : [] // the right-hand merging array
    }); // supply your own state

    const states = all_states.MERGESORT;
  
    // target id will only be set if dragging from one dropzone to another.
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
      console.log(sourceId);
      if (targetId) {
        const result = move(
          items[sourceId],
          items[targetId],
          sourceIndex,
          targetIndex
        );
        return setItems({
          ...items,
          [sourceId]: result[0],
          [targetId]: result[1]
        });
      }
  
      const result = swap(items[sourceId], sourceIndex, targetIndex);
      return setItems({
        ...items,
        [sourceId]: result
      });
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
          <div className="row" style={{height: 100}}>
            <div className="col-sm container">
              <p>Dropzone Array</p>
            <GridDropZone
                className="dropzone array"
                id="array"
                boxesPerRow={8}
                rowHeight={70}
              >
                {items.array.map(item => (
                  <GridItem key={item.value}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: item.value % 2 === 1 ? "black" : "orange",
                        color: item.value % 2 === 1 ? "orange" : "black",
                        fontSize: 40,
                        fontWeight: "bold"
                      }}
                    >
                      {item.value}
                    </div>
                  </GridItem>
                ))}
              </GridDropZone>
            </div>
          </div>
          <div className="row" style={{height: 100}}>
            <div className="col-sm container">
            <p>Dropzone Left</p>
              <GridDropZone
                className="dropzone left"
                id="left"
                boxesPerRow={4}
                rowHeight={70}
              >
                {items.left.map(item => (
                  <GridItem key={item.value}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: item.value % 2 === 1 ? "black" : "orange",
                        color: item.value % 2 === 1 ? "orange" : "black",
                        fontSize: 40,
                        fontWeight: "bold"
                      }}
                    >
                      {item.value}
                    </div>
                  </GridItem>
                ))}
              </GridDropZone>
            </div>
            <div className="col-sm container">
            <p>Dropzone Right</p>
              <GridDropZone
                className="dropzone right"
                id="right"
                boxesPerRow={4}
                rowHeight={70}
              >
                {items.right.map(item => (
                  <GridItem key={item.value}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: item.value % 2 === 1 ? "black" : "orange",
                        color: item.value % 2 === 1 ? "orange" : "black",
                        fontSize: 40,
                        fontWeight: "bold"
                      }}
                    >
                      {item.value}
                    </div>
                  </GridItem>
                ))}
              </GridDropZone>
            </div>
          </div>
        </GridContextProvider>
      {/* <GridContextProvider onChange={onChange}>
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
      </GridContextProvider> */}
    </div>
    );
  }