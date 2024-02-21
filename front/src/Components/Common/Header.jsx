import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <div>
      {/* <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block text-sm font-medium truncate">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Services</Navbar.Link>
          <Navbar.Link href="/">Pricing</Navbar.Link>
          <Navbar.Link href="/">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar> */}

      <Navbar className="flex flex-row items-center justify-between border-2 border-b-grey">
        <div className="flex flex-row">
          <Link active to={"/main"} className="m-4 hover:bg-sky-700">
            로고
          </Link>
          <Link to={"/main"} className="m-4">
            홈
          </Link>
          <Link to={"/product"} className="m-4">
            상품
          </Link>
          <Link to={"/wish"} className="m-4">
            위시리스트
          </Link>
        </div>
        <Button className="h-[30px] m-4" color="light">
          로그아웃
        </Button>
      </Navbar>
    </div>
  );
}
