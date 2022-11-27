/* ------------------------------------------------------------------ */
/* AlgoActiveBackgorund.jsx                                           */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from "react";

import Container from 'react-bootstrap/Container';

export default function AlgoActiveBackground() {
    return (
        <Container fluid>
            <Navbar variant="dark" bg="dark" sticky="top">
                <Container fluid>
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