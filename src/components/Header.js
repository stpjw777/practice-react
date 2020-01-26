import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    li {
      list-style-type: none;
      padding: 0 1rem;
    }
  }
`;
const Header = () => {
  return (
    <Navbar>
      <div className="navLogo">logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Project</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>로그인</div>
    </Navbar>
  );
};
export default Header;
