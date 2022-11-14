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

export default function GridArray() {
    const [items, setItems] = React.useState([4, 7, 5, 1, 8, 3, 2, 6]); // supply your own state
  
    // target id will only be set if dragging from one dropzone to another.
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
      const nextState = swap(items, sourceIndex, targetIndex);
      setItems(nextState);
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