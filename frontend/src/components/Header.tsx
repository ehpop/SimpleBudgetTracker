import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom";

import "../styles/Header.css";
import {useAuth} from "react-oidc-context";

function Header() {
    const expand: string = "sm";
    const auth = useAuth();

    // @ts-ignore
    return (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand>
                    <Link to={"/home"} id="brand-element">SimpleBudgetTracker</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Navbar.Text>
                                <Link to={"/home"} className="navbar-link">Home</Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Link to={"/payments"} className="navbar-link">Payments</Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Link to={"/charts"} className="navbar-link">Charts</Link>
                            </Navbar.Text>
                        </Nav>
                        {
                            auth.isAuthenticated
                                ? <>
                                    <Navbar.Text className="ms-3">
                                        Signed in as: {auth.user?.profile.name}
                                    </Navbar.Text>
                                    <Button variant="outline-danger" style={{marginLeft: "5px", padding: "5px"}}
                                            onClick={() => auth.signoutRedirect()}>Sign out</Button>
                                </>
                                :
                                <Button variant="outline-primary" onClick={() => auth.signinRedirect()}>Sign in</Button>
                        }
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;
