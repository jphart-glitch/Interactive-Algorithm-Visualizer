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
  
  import Home from "./Home";
  import Interact from "./Interact";
  import ExampleRun from "./ExampleRun";
  import Debug from "./Debug";
  import Chessboard from "./unused/Chessboard";
  import Simulation from "./unused/Simulation";
  import Mergesort from "./Mergesort";
  import InsertionSort from "./InsertionSort";
  import SelectionSort from './SelectionSort';

function NotFound() {
    return <h2>Not Found</h2>
}

class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/interact" element={<Interact />}/>
                    <Route exact path="/examplerun" element={<ExampleRun />}/>
                    <Route exact path="/debug" element={<Debug />}/>
                    <Route exact path="/chessboard" element={<Chessboard />}/>
                    <Route exact path="/simulation" element={<Simulation />}/>
                    <Route exact path="/mergesort" element={<Mergesort />}/>
                    <Route exact path="/insertionsort" element={<InsertionSort />}/>
                    <Route exact path="/selectionsort" element={<SelectionSort />}/>
                    <Route path="*" element={<NotFound />}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;