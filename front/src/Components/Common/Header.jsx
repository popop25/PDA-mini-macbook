import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
// import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">로고</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/main");
              }}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/product");
              }}
            >
              상품
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/wish");
              }}
            >
              위시리스트
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
