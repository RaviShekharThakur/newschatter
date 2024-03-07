import React, { Component } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
  render() {
    return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="https://flowbite-react.com">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Chatter with the News
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
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
        <Navbar.Link as={Link} to="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/business">
          Business
        </Navbar.Link>
        <Navbar.Link as={Link} to="/entertainment">
          Entertainment
        </Navbar.Link>
        <Navbar.Link as={Link} to="/general">
          General
        </Navbar.Link>
        <Navbar.Link as={Link} to="/health">
          Health
        </Navbar.Link>
        <Navbar.Link as={Link} to="/science">
          Science
        </Navbar.Link>
        <Navbar.Link as={Link} to="/sports">
          Sports
        </Navbar.Link>
        <Navbar.Link as={Link} to="/technology">
          Technology
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
