/* ------------------------------------------------------------------ */
/* Chessboard.jsx                                                     */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

import Board from "./Board";
import { observe } from "./Game";

export default function Chessboard() 
{
    observe((knightPosition) => 
    {
      return (
      <div>
        <h1>Chessboard Page</h1>
        <br />
        {/* Endpoint to route to Home component */}
        <Link to="/">Go Back</Link>
        <br />
        <div style={{
          width: 800,
          height: 600
        }}>
          <Board knightPosition={knightPosition} />
        </div>
      </div>
    );
    }
    )
  };