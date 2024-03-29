/* ------------------------------------------------------------------ */
/* Home.jsx                                                           */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
  
const Home = () => {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <h1>Home Page</h1>
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
      </ul>
    </Container>
  );
};
  
export default Home;