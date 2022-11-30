/* ------------------------------------------------------------------ */
/* PriorityQueues.jsx                                                 */
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

  import { all_states } from "./States";
  import { all_instructions } from "./Instructions";

  var step = 0;

function getStep() {
  return step;
}
function incrementStep(maxSteps) {
  if (step < maxSteps - 1) step += 1;
}
  
  export default function PriorityQueues() {
    const [items, setItems] = React.useState({
        input : [1, 2, 3, 4, 5, 6, 7, 8], // the input to the stack
        stack : [], // the stack
        output : [] // output of stack (popped elements)
    });

    const [currStep, setCurrStep] = React.useState({text : "Beginning array.", stepNum : 0});

    const hidden = "hidden";
    const visible = "visible";
    const [currVisibility, setVisibility] = React.useState({
        correct : hidden,
        incorrect : hidden
    });

    const states = all_states.PRIORITYQUEUES;
    const instructions = all_instructions.PRIORITYQUEUES;
  
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
              input: newItems.input,
              stack: newItems.stack,
              output: newItems.output
          });
          console.log("Not correct! Maybe try something different...");
          setVisibility({
              ...currVisibility,
              correct : hidden,
              incorrect : visible
          });
      }
  }
  
    return (
      <Container fluid>
        <h1>Simulation of Priority Queues (using Min PQs)</h1>
        <br />
        <Link to="/interact">Go Back</Link>
        <br />
        <GridContextProvider onChange={onChange}>
            <center><Row xs={1} sm={3}>
                <Col>
                    <center><p>Input</p></center>
                    <div className="row" style={{height: 800}}>
                        <div className="col-sm container" style={{borderStyle: "solid"}}>
                            <GridDropZone
                            id="input"
                            boxesPerRow={4}
                            rowHeight={100}
                            style={{ height: "100%" }}
                            >
                            {items.input.map(item => (
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
                </Col>
                <Col>
                    <center><p>Queue</p></center>
                    <div className="row" style={{height: 800}}>
                        <div className="col-sm container" style={{borderStyle: "solid"}}>
                            <GridDropZone
                            id="stack"
                            boxesPerRow={1}
                            rowHeight={100}
                            style={{ height: "100%" }}
                            >
                            {items.stack.map(item => (
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
                </Col>
                <Col>
                    <center><p>Output</p></center>
                    <div className="row" style={{height: 800}}>
                        <div className="col-sm container" style={{borderStyle: "solid"}}>
                            <GridDropZone
                            id="output"
                            boxesPerRow={4}
                            rowHeight={100}
                            style={{ height: "100%" }}
                            >
                            {items.output.map(item => (
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
                </Col>
            </Row></center>
        </GridContextProvider>
        <br />
        <br />

        <center><Row xs={1} sm={3}>
            <Col>
                <Button variant="secondary" size="lg" onClick={buttonPress}>
                    Click here to check your state!
                </Button>
            </Col>
            <Col>
                <OverlayTrigger trigger="click" placement="bottom" overlay={
                    <Popover id="instructions">
                        <Popover.Header as="h3">Instructions</Popover.Header>
                        <Popover.Body>{instructions}</Popover.Body>
                    </Popover>
                    }>
                    <Button variant="primary" size="lg">Toggle to see the instructions!</Button>
                </OverlayTrigger>
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
    );
  }