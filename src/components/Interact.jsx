/* ------------------------------------------------------------------ */
/* Interact.jsx                                                       */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

const Interact = () => {
    return (
      <div>
        <h1>Interact Page</h1>
        <br />
        <ul>
          <li>
            {/* Endpoint to route to Home component */}
            <Link to="/">Go Back</Link>
          </li>
          <li>
            {/* Endpoint to route to Mergesort component */}
            <Link to="/mergesort">Merge Sort</Link>
          </li>
          <li>
            {/* Endpoint to route to Insertion Sort component */}
            <Link to="/insertionsort">Insertion Sort</Link>
          </li>
          <li>
            {/* Endpoint to route to Selection Sort component */}
            <Link to="/selectionsort">Selection Sort</Link>
          </li>
        </ul>
      </div>
    );
  };
    
  export default Interact;