/* ------------------------------------------------------------------ */
/* SelectionSort.jsx                                                      */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from 'react';
/* importing Link from react-router-dom to navigate to 
    different end points. */
import { Link } from "react-router-dom";
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    move
  } from "react-grid-dnd";

  import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';

  import { all_states } from "./States";

  var step = 0;

function getStep() {
  return step;
}
function incrementStep(maxSteps) {
  if (step < maxSteps - 2) step += 1;
}
  
  export default function SelectionSort() {
    const [items, setItems] = React.useState({
        array : [4, 7, 5, 1, 8, 3, 2, 6], // the final merged array
        temp : [] // the temporary "selection" array
    });

    const states = all_states.SELECTIONSORT;
  
    // target id will only be set if dragging from one dropzone to another.
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        if (targetId) {
            const swaps = move(
                items[sourceId],
                items[targetId],
                sourceIndex,
                targetIndex
            );
            setItems({
                ...items,
                [sourceId]: swaps[0],
                [targetId]: swaps[1]
            });
        }
        else {
            const nextState = swap(items[sourceId], sourceIndex, targetIndex);
            setItems({...items, [sourceId] : nextState});
        }
    }

    function checkState(result) {
        let correct = states[getStep() + 1];
        return JSON.stringify(correct) === JSON.stringify(result);
    }

    function buttonPress() {
        if (checkState(items)) {
            incrementStep(states.length);
            console.log("Nice job!");
        }
        else {
            let newItems = states[getStep()];
            setItems({
                ...items,
                array: newItems.array,
                temp: newItems.temp
            });
            console.log("Not correct! Maybe try something different...");
        }
    }
  
    return (
        <Container fluid>
            <h1>Simulation of Selection Sort</h1>
            <br />
            <Link to="/interact">Go Back</Link>
            <br />
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
                                    backgroundColor: item % 2 === 1 ? "black" : "orange",
                                    color: item % 2 === 1 ? "orange" : "black",
                                    fontSize: 40,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    borderStyle: "solid",
                                    borderColor: "gray",
                                    userSelect: "none"
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
                <center><p>Selection Array</p></center>
                <div className="row" style={{height: 200}}>
                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                        <p>Temp</p>
                        <GridDropZone
                        id="temp"
                        boxesPerRow={8}
                        rowHeight={100}
                        style={{ height: "100%" }}
                        >
                        {items.temp.map(item => (
                            <GridItem key={item}>
                            <div
                                style={{
                                    width: 100,
                                    backgroundColor: item % 2 === 1 ? "black" : "orange",
                                    color: item % 2 === 1 ? "orange" : "black",
                                    fontSize: 40,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    borderStyle: "solid",
                                    borderColor: "gray",
                                    userSelect: "none"
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
            <Button variant="secondary" size="lg" onClick={buttonPress}>
                Click here to check your state!
            </Button>{' '}
        </Container>      
    );
  }