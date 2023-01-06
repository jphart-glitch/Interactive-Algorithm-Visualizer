/* ------------------------------------------------------------------ */
/* Evaluation.jsx                                                     */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import { Link } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";

export default function Evaluation() {

    const choices = ["Selection Sort", "Insertion Sort", "Merge Sort", "Stacks", "Queues", "Priority Queues (MinPQ)"];
    const index = Math.floor(Math.random() * 6);

    return (
        <Container fluid style={{width: "100%", height: "100%"}}>
            <h1>User Evaluation Algorithm/Data Structure Choice</h1>
            <br />
            <Link to="/">Go Home</Link>
            <br />
            <br />
            <br />
            <center><p style={{fontSize: "50px"}}>
                Hello, user, and thank you for taking part in AlgoActive's User Evaluation! Your selected algorithm/data structure is:
            </p></center>
            <center><p style={{fontSize: "75px"}}>
                {choices[index]}
            </p></center>
            <center><p style={{fontSize: "50px"}}>
                Note this down in the Google Form and follow the directions given in it.
            </p></center>
        </Container>
    )

}