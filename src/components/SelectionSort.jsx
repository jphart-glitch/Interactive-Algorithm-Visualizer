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

  import Alert from 'react-bootstrap/Alert';
  import Button from 'react-bootstrap/Button';
  import Col from 'react-bootstrap/Col';
  import Container from 'react-bootstrap/Container';
  import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
  import Popover from 'react-bootstrap/Popover';
  import Row from 'react-bootstrap/Row';
  import Toast from 'react-bootstrap/Toast';

  import { all_states } from "./States";
  import { all_instructions } from "./Instructions";

var step = 0;

function getStep() {
  return step;
}
function incrementStep(maxSteps) {
  if (step < maxSteps - 1) step += 1;
}
  
  export default function SelectionSort() {
    const [items, setItems] = React.useState({
        array : [4, 7, 5, 1, 8, 3, 2, 6], // the final merged array
        temp : [] // the temporary "selection" array
    });

    const [currStep, setCurrStep] = React.useState({text : "Beginning array.", stepNum : 0});

    const hidden = "hidden";
    const visible = "visible";
    const [currVisibility, setVisibility] = React.useState({
        correct : hidden,
        incorrect : hidden
    });

    const states = all_states.SELECTIONSORT;
    const instructions = all_instructions.SELECTIONSORT;
  
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
        let correct = states[getStep() + 1].answer;
        return JSON.stringify(correct) === JSON.stringify(result);
    }

    function buttonPress() {
        if (checkState(items)) {
            incrementStep(states.length);
            console.log("Nice job!");
            setCurrStep({
                ...currStep,
                text: states[currStep.stepNum + 1].step,
                stepNum: currStep.stepNum + 1
            });
            setVisibility({
                ...currVisibility,
                correct : visible,
                incorrect : hidden
            });
        }
        else {
            let newItems = states[getStep()].answer;
            setItems({
                ...items,
                array: newItems.array,
                temp: newItems.temp
            });
            console.log("Not correct! Maybe try something different...");
            setVisibility({
                ...currVisibility,
                correct : hidden,
                incorrect : visible
            });
        }
    }

    const [overlayVisibility, setOverlayVisibility] = React.useState("block");
  
    return (
        <div>
            <Container fluid style={{position: "absolute", display: overlayVisibility, width:"100%", height:"100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "2", cursor: "pointer", userSelect: "none"}}>
                <br/>
                <center><p style={{fontSize: "50px", color: "white", backgroundColor: "rgba(0, 0, 0, 0.75)"}}>
                    Hello, user, and welcome to AlgoActive's Insertion Sort Interact Page!
                </p></center>
                <center><p style={{fontSize: "30px", color: "white", backgroundColor: "rgba(0, 0, 0, 0.75)", whiteSpace: "pre-wrap"}}>
                    {instructions}
                </p></center>
                <center><Button onClick={() => setOverlayVisibility("none")}>
                    Click here to continue!
                </Button></center>
            </Container>
            <Container fluid style={{width: "100%", height: "100%"}}>
                <h1>Simulation of Selection Sort</h1>
                <br />
                <Link to="/interact">Go Back</Link>
                <br />
                <GridContextProvider onChange={onChange}>
                    <center><p>Destination Array</p></center>
                    <Container fluid style={{width: "90%", height: "90%"}}>
                        <div className="row" style={{height: 200, paddingLeft: 0, paddingRight: 0}}>
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
                    </Container>
                    <br />
                    <center><p>Selection Array</p></center>
                    <Container fluid style={{width: "90%", height: "90%"}}>
                        <div className="row" style={{height: 200, paddingLeft: 0, paddingRight: 0}}>
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
                    </Container>
                </GridContextProvider>
                <br />
                <br />

                <Container fluid style={{width: "90%", height: "90%"}}>
                    <center><Row xs={1} sm={3} style={{paddingLeft: 0, paddingRight: 0}}>
                        <Col>
                            <Button variant="secondary" size="lg" onClick={buttonPress}>
                                Click here to check your state!
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={() => setOverlayVisibility("block")}>Toggle Instructions</Button>
                        </Col>
                        <Col>
                            <OverlayTrigger trigger="click" placement="left" overlay={
                                <Popover id="step">
                                    <Popover.Header as="h3">Previous Step (Step #{currStep.stepNum})</Popover.Header>
                                    <Popover.Body>{currStep.text}</Popover.Body>
                                </Popover>
                                }>
                                <Button variant="success" size="lg">Toggle to see the previous step you took!</Button>
                            </OverlayTrigger>
                        </Col>
                    </Row></center>
                </Container>

                <Alert variant="success" onClose={() => setVisibility({...currVisibility, correct : hidden})} dismissible style={{visibility: currVisibility.correct, position: "absolute"}}>
                    <Alert.Heading>Nice job!</Alert.Heading>
                    <p>
                        Now continue onto the next step!
                    </p>
                </Alert>
                <Alert variant="danger" onClose={() => setVisibility({...currVisibility, incorrect : hidden})} dismissible style={{visibility: currVisibility.incorrect, position: "absolute"}}>
                    <Alert.Heading>Not quite right!</Alert.Heading>
                    <p>
                        Maybe try something different...
                    </p>
                </Alert>

            </Container>
        </div>
    );
  }