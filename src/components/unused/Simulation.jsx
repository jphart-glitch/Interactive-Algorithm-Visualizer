/* ------------------------------------------------------------------ */
/* Simulation.jsx                                                     */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import PageArray from "./PageArray";

export function swapSquares(toValue, toIndex, fromValue, fromIndex) {
    console.log("Value at index " + toIndex + ": " + toValue);
}

export default function Simulation() {
    return (
        <div>
            <h1>Simulation of Merge Sort</h1>
            <br />
            <Link to="/">Go Back</Link>
            <div style={{
                width: 800,
                height: 600
            }}>
                <PageArray />
            </div>
        </div>
    );
}