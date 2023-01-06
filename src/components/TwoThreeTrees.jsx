/* ------------------------------------------------------------------ */
/* TwoThreeTrees.jsx                                                  */
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
  
  export default function TwoThreeTrees() {
    const [items, setItems] = React.useState({
        root : [], // the root node
        levelOneLeftOne : [], // the first node on the first level
        levelOneLeftTwo : [], // the second node on the first level
        levelOneLeftThree : [], // the third node on the first level
        levelTwoLeftOne : [], // the first node on the second level
        levelTwoLeftTwo : [], // the second node on the second level
        levelTwoLeftThree : [], // the third node on the second level
        levelTwoLeftFour : [], // the fourth node on the second level
        levelTwoLeftFive : [], // the fifth node on the second level
        levelTwoLeftSix : [], // the sixth node on the second level
        input : [50, 62, 69, 43, 31, 25, 15, 85, 99, 108] // the input array
    });

    const [currStep, setCurrStep] = React.useState({text : "Beginning state.", stepNum : 0});

    const hidden = "hidden";
    const visible = "visible";
    const [currVisibility, setVisibility] = React.useState({
        correct : hidden,
        incorrect : hidden
    });

    const states = all_states.TWOTHREETREES;
    const instructions = all_instructions.TWOTHREETREES;
  
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
                root : newItems.root,
                levelOneLeftOne : newItems.levelOneLeftOne,
                levelOneLeftTwo : newItems.levelOneLeftTwo,
                levelOneLeftThree : newItems.levelOneLeftThree,
                levelTwoLeftOne : newItems.levelTwoLeftOne,
                levelTwoLeftTwo : newItems.levelTwoLeftTwo,
                levelTwoLeftThree : newItems.levelTwoLeftThree,
                levelTwoLeftFour : newItems.levelTwoLeftFour,
                levelTwoLeftFive : newItems.levelTwoLeftFive,
                levelTwoLeftSix : newItems.levelTwoLeftSix,
                input : newItems.input
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
                    Hello, user, and welcome to AlgoActive's 2-3 Trees Interact Page!
                </p></center>
                <center><p style={{fontSize: "30px", color: "white", backgroundColor: "rgba(0, 0, 0, 0.75)", whiteSpace: "pre-wrap"}}>
                    {instructions}
                </p></center>
                <center><Button onClick={() => setOverlayVisibility("none")}>
                    Click here to continue!
                </Button></center>
            </Container>
            <Container fluid style={{width: "100%", height: "100%"}}>
                <h1>Simulation of 2-3 Trees</h1>
                <br />
                <Link to="/interact">Go Back</Link>
                <br />
                <GridContextProvider onChange={onChange}>
                    <center><p>Root</p></center>
                    <Container fluid style={{width: "90%", height: "90%"}}>
                        <Row xs={1} sm={1}>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>Root Node</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.root.map(item => (
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
                                </div></center>
                            </Col>
                        </Row>
                    </Container>
                    <hr />
                    <center><p>Level One</p></center>
                    <Container fluid style={{width: "90%", height: "90%"}}>
                        <Row xs={1} sm={3}>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>One</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.levelOneLeftOne.map(item => (
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
                                </div></center>
                            </Col>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>Two</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.levelOneLeftTwo.map(item => (
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
                                </div></center>
                            </Col>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>Three</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.levelOneLeftThree.map(item => (
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
                                </div></center>
                            </Col>
                        </Row>
                    </Container>
                    <hr />
                    <center><p>Level Two</p></center>
                    <Container fluid style={{width: "90%", height: "90%"}}>
                        <Row xs={2} sm={6}>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>One</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.levelTwoLeftOne.map(item => (
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
                                </div></center>
                            </Col>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>Two</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.levelTwoLeftTwo.map(item => (
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
                                </div></center>
                            </Col>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>Three</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.levelTwoLeftThree.map(item => (
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
                                </div></center>
                            </Col>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>Four</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.levelTwoLeftFour.map(item => (
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
                                </div></center>
                            </Col>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>Five</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.levelTwoLeftFive.map(item => (
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
                                </div></center>
                            </Col>
                            <Col>
                                <center><div className="row" style={{width: 200, height: 100}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>Six</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={2}
                                        rowHeight={100}
                                        style={{ height: "100%" }}
                                        >
                                        {items.levelTwoLeftSix.map(item => (
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
                                </div></center>
                            </Col>
                        </Row>
                    </Container>
                    <hr />
                    <center><p>Input</p></center>
                    <Container fluid style={{width: "90%", height: "90%"}}>
                        <Row xs={1} sm={1}>
                            <Col>
                                <center><div className="row" style={{width: 800, height: 200}}>
                                    <div className="col-sm container" style={{borderStyle: "solid"}}>
                                        <center><p>Input</p></center>
                                        <GridDropZone
                                        id="array"
                                        boxesPerRow={8}
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
                                </div></center>
                            </Col>
                        </Row>
                    </Container>
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