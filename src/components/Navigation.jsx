import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <Header>
      <Link to="/">
        <h1 className="logo">Portfolio</h1>
      </Link>
      <ul>
        <li>
          {" "}
          <a href="#projet">Projet</a>
        </li>
        <li>
          {" "}
          <a href="#competence">Competence</a>
        </li>
        <Link to="Admin">
          <li>
            <a>Admin</a>
          </li>
        </Link>
      </ul>
    </Header>
  );
}

export default Navigation;

const Header = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap");

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;

  .logo {
    color: #094b65;
    font-weight: 700;
    font-size: 2em;
    font-family: "Rowdies", cursive;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul li {
    list-style: none;
    margin-left: 20px;
  }

  ul li a {
    text-decoration: none;
    padding: 6px 15px;
    color: #094b65;
    border-radius: 20px;
  }

  a {
    text-decoration: none;
  }

  ul li a:hover {
    background: #094b65;
    color: white;
  }
`;
