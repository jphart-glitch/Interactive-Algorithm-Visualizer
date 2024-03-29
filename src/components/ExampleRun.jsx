/* ------------------------------------------------------------------ */
/* ExampleRun.jsx                                                     */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

const ExampleRun = () => {
    return (
      <div>
        <h1>Example Run Page</h1>
        <br />
        <ul>
          <li>
            {/* Endpoint to route to Home component */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Endpoint to route to Interact component */}
            <Link to="/interact">Interact</Link>
          </li>
          <li>
            {/* Endpoint to route to Example Run component */}
            <Link to="/examplerun">Example Run</Link>
          </li>
          <li>
            {/* Endpoint to route to Debug component */}
            <Link to="/debug">Debug</Link>
          </li>
          <li>
            {/* Endpoint to route to Chessboard component */}
            <Link to="/chessboard">Chessboard Example</Link>
          </li>
          <li>
          {/* Endpoint to route to Simulation component */}
          <Link to="/simulation">Merge Sort Simulation</Link>
        </li>
        </ul>
      </div>
    );
  };
    
  export default ExampleRun;