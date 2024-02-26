import React from "react";
import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

import { Button, Navbar } from "flowbite-react";
import { userInfoState } from "../../stores/auth";
import { useRecoilState } from "recoil";
import { AUTH_KEY } from "../../Home/Login";

export default function Header() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    sessionStorage.setItem(AUTH_KEY, "");
    setUserInfo({});
    navigate("/");
  };
  return (
    <div>
      <Navbar fluid rounded className="mb-4 shadow-sm">
        <Navbar.Brand>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            티끌
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={handleLogout}>로그아웃</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* <Navbar.Link href="#" active>
            Home
          </Navbar.Link> */}
          <Navbar.Link
            onClick={() => {
              navigate("/main");
            }}
          >
            홈
          </Navbar.Link>
          <Navbar.Link
            onClick={() => {
              navigate("/product");
            }}
          >
            상품
          </Navbar.Link>
          <Navbar.Link
            onClick={() => {
              navigate("/wish");
            }}
          >
            위시리스트
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* <Navbar bg="light" data-bs-theme="light">
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
      </Navbar> */}
    </div>
  );
}
