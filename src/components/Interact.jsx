/* ------------------------------------------------------------------ */
/* Interact.jsx                                                       */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Interact = () => {
    return (
      <Container fluid style={{width: "100%", height: "100%"}}>
        <center><h1>Interact Page</h1></center>
        <Accordion alwaysOpen="true" style={{position: "absolute", width: "90%", height: "90%", 
        paddingLeft: 0, paddingRight: 0, left: "5%"}}>
          <Row xs={1} sm={2}>
          {/* Classical Sorts */}
            <Col style={{paddingLeft: 0, paddingRight: 0}}>
              <Accordion.Item eventKey="0" style={{height: "100%"}}>
                <center><Accordion.Header>Classical Sorts</Accordion.Header></center>
                <Accordion.Body>
                  <Container fluid>
                    <Row xs={1} sm={2} style={{paddingLeft: 0, paddingRight: 0}}>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Selection Sort</Card.Title>
                            <Card.Text>
                              The slower of the classical sorts, but likely the easiest to understand!
                              <br />
                              {/* Endpoint to route to Selection Sort component */}
                              <Link to="/selectionsort">Click here to interact with Selection Sort!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Insertion Sort</Card.Title>
                            <Card.Text>
                              Not the quickest sort, but a pretty intuitive one!
                              <br />
                              {/* Endpoint to route to Insertion Sort component */}
                              <Link to="/insertionsort">Click here to interact with Insertion Sort!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row xs={1} sm={2} style={{paddingLeft: 0, paddingRight: 0}}>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Mergesort</Card.Title>
                            <Card.Text>
                              The worst-case fastest, most stable classical sort!
                              <br />
                              {/* Endpoint to route to Mergesort component */}
                              <Link to="/mergesort">Click here to interact with Mergesort!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Quicksort</Card.Title>
                            <Card.Text>
                              The most commonly used in-place sort, albeit with a bad worse-case!
                              <br />
                              {/* Endpoint to route to Quicksort component */}
                              <Link to="/quicksort">Click here to interact with Quicksort!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Col>
          {/* Stacks and Queues */}
            <Col style={{paddingLeft: 0, paddingRight: 0}}>
              <Accordion.Item eventKey="1" style={{height: "100%"}}>
              <center><Accordion.Header>Stacks and Queues</Accordion.Header></center>
                <Accordion.Body>
                  <Container fluid>
                    <Row xs={1} sm={2} style={{paddingLeft: 0, paddingRight: 0}}>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Stack</Card.Title>
                            <Card.Text>
                              Last in, first out - a fundamental data structure!
                              <br />
                              {/* Endpoint to route to Stack component */}
                              <Link to="/stacks">Click here to interact with Stacks!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Queue</Card.Title>
                            <Card.Text>
                              The opposite of a stack - first in, first out - but still as important!
                              <br />
                              {/* Endpoint to route to Queue component */}
                              <Link to="/queues">Click here to interact with Queues!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row xs={1} sm={2} style={{paddingLeft: 0, paddingRight: 0}}>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Priority Queue</Card.Title>
                            <Card.Text>
                              A queue that dequeues items based on the priority you decide!
                              <br />
                              {/* Endpoint to route to Priority Queue component */}
                              <Link to="/priorityqueues">Click here to interact with Priority Queues!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Col>
          </Row>
          <Row xs={1} sm={2}>
          {/* Balanced Search Trees */}
            <Col style={{paddingLeft: 0, paddingRight: 0}}>
              <Accordion.Item eventKey="2" style={{height: "100%"}}>
              <center><Accordion.Header>Balanced Search Trees</Accordion.Header></center>
                <Accordion.Body>
                  <Container fluid>
                    <Row xs={1} sm={2} style={{paddingLeft: 0, paddingRight: 0}}>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>2-3 Trees</Card.Title>
                            <Card.Text>
                              Balanced search tree with a unique structure allowing consistent run times across all operations!
                              <br />
                              {/* Endpoint to route to 2-3 Tree component */}
                              <Link to="/2-3-trees">Click here to interact with 2-3 Trees!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Red-Black Trees</Card.Title>
                            <Card.Text>
                              Binary search tree that leverages node coloring to provide improved amortized time operations!
                              <br />
                              {/* Endpoint to route to Red-Black Tree component */}
                              <Link to="/red-black-trees">Click here to interact with Red-Black Trees!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row xs={1} sm={2} style={{paddingLeft: 0, paddingRight: 0}}>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>K-D Trees</Card.Title>
                            <Card.Text>
                              k-dimensional tree that can organize points in a k-dimensional space!
                              <br />
                              {/* Endpoint to route to Priority Queue component */}
                              <Link to="/k-d-trees">Click here to interact with K-D Trees!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Col>
          {/* Graphs and Digraphs */}
            <Col style={{paddingLeft: 0, paddingRight: 0}}>
              <Accordion.Item eventKey="3" style={{height: "100%"}}>
              <center><Accordion.Header>Graphs and Digraphs</Accordion.Header></center>
                <Accordion.Body>
                  <Container fluid>
                    <Row xs={1} sm={2} style={{paddingLeft: 0, paddingRight: 0}}>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Depth-First Search</Card.Title>
                            <Card.Text>
                              Visit every edge and vertex by going as far as you can when you can!
                              <br />
                              {/* Endpoint to route to Depth-First Search component */}
                              <Link to="/dfs">Click here to interact with Depth-First Search!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Breadth-First Search</Card.Title>
                            <Card.Text>
                              Visit all edges and vertices at a generational level before advancing!
                              <br />
                              {/* Endpoint to route to Breadth-First Search component */}
                              <Link to="/bfs">Click here to interact with Breadth-First Search!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row xs={1} sm={2} style={{paddingLeft: 0, paddingRight: 0}}>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Minimum Spanning Trees</Card.Title>
                            <Card.Text>
                              Find the minimum spanning tree (connected subgraph of minimum weights) of a graph!
                              <br />
                              {/* Endpoint to route to Minimum Spanning Trees component */}
                              <Link to="/msts">Click here to interact with Minimum Spanning Trees!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col style={{display: "block", float: "none", paddingLeft: 0, paddingRight: 0}}>
                        <Card className="text-center" style={{height: "100%"}}>
                          <Card.Body>
                            <Card.Title>Topological Sort</Card.Title>
                            <Card.Text>
                              Find an array of the vertices of a graph where each vertex is to the left of all the vertices it can point to!
                              <br />
                              {/* Endpoint to route to Topological Sort component */}
                              <Link to="/topologicalsort">Click here to interact with Topological Sort!</Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Col>
          </Row>
        </Accordion>
      </Container>
    );
  };
    
  export default Interact;