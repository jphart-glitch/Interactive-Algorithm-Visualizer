/* ------------------------------------------------------------------ */
/* Board.jsx                                                          */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";

import ChessboardSquare from './ChessboardSquare'
import ChessboardKnight from './ChessboardKnight'
import { canMoveKnight, moveKnight } from './Game'

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY)
  }
}

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <ChessboardKnight /> : null
    
  return <div onClick={() => handleSquareClick(x, y)}>
    <ChessboardSquare black={black}>{piece}</ChessboardSquare>
  </div>
  }

export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {squares}
    </div>
  )
}