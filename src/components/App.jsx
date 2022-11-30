/* ------------------------------------------------------------------ */
/* App.jsx                                                            */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
  
import AlgoActiveNavBar from './AlgoActiveNarBar';
import Home from "./Home";
import Interact from "./Interact";
import ExampleRun from "./ExampleRun";
import Debug from "./Debug";
import Chessboard from "./unused/Chessboard";
import Simulation from "./unused/Simulation";
import Mergesort from "./Mergesort";
import InsertionSort from "./InsertionSort";
import SelectionSort from './SelectionSort';
import Stacks from './Stacks';
import Queues from './Queues';
import PriorityQueues from './PriorityQueues';
import TwoThreeTrees from './TwoThreeTrees';

function NotFound() {
    return <h2>Not Found</h2>
}

function WorkInProgess() {
    return <h2>Feature is currently under development</h2>
}

class App extends React.Component {
    render () {
        return (
            <Container fluid style={{position: "fixed", width: "100%", height: "100%", backgroundColor: "gainsboro"}}>
                <Router>
                    <AlgoActiveNavBar/>
                    <Container fluid>
                        <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/interact" element={<Interact />}/>
                        <Route exact path="/examplerun" element={<ExampleRun />}/>
                        <Route exact path="/debug" element={<Debug />}/>
                        <Route exact path="/chessboard" element={<Chessboard />}/>
                        <Route exact path="/simulation" element={<Simulation />}/>
                        <Route exact path="/selectionsort" element={<SelectionSort />}/>
                        <Route exact path="/insertionsort" element={<InsertionSort />}/>
                        <Route exact path="/mergesort" element={<Mergesort />}/>
                        <Route exact path="/quicksort" element={<WorkInProgess />}/>
                        <Route exact path="/stacks" element={<Stacks />}/>
                        <Route exact path="/queues" element={<Queues />}/>
                        <Route exact path="/priorityqueues" element={<PriorityQueues />}/>
                        <Route exact path="/2-3-trees" element={<TwoThreeTrees />}/>
                        <Route exact path="/red-black-trees" element={<WorkInProgess />}/>
                        <Route exact path="/k-d-trees" element={<WorkInProgess />}/>
                        <Route exact path="/dfs" element={<WorkInProgess />}/>
                        <Route exact path="/bfs" element={<WorkInProgess />}/>
                        <Route exact path="/msts" element={<WorkInProgess />}/>
                        <Route exact path="/topologicalsort" element={<WorkInProgess />}/>
                        <Route path="*" element={<NotFound />}/>
                        </Routes>
                    </Container>
                </Router>
            </Container>
        );
    }
}

export default App;