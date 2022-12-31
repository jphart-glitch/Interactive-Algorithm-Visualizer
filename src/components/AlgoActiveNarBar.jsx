/* ------------------------------------------------------------------ */
/* AlgoActiveNavBar.jsx                                               */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default function AlgoActiveNavBar() {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Navbar variant="dark" bg="dark" sticky="top">
                <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Navbar.Brand href="/">
                        AlgoActive
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/interact">Interact</Nav.Link>
                        <Nav.Link href="/examplerun">Example Run</Nav.Link>
                        <Nav.Link href="/debug">Debug</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
}