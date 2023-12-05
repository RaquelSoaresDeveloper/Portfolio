import React, { useState } from "react";
import styled from "styled-components";
import BlackLogo from "../assets/BlackLogo.png";
const Header = () => {
  const [bar, setBar] = useState(false);
  return (
    <Container bar={bar}>
      <Span>
        <img src={BlackLogo} alt="" />
      </Span>
      <Nav bar={bar}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </Nav>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  height: 4rem;
  margin: 0 auto;
  list-style: none;

  @media (max-width: 763px) {
    width: 90%;
  }

  .bars {
    display: none;
  }

  @media (max-width: 640px) {
    .bars {
      width: 90px;
      height: 35px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 100;
    }
    .bar {
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${(props) =>
        props.bar ? "transparent" : "greenyellow"};
      transition: all 400ms ease-in-out;
      &:before,
      &:after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: greenyellow;
        position: absolute;
      }

      &:before {
        transform: ${(props) =>
          props.bar ? "rotate(45deg)" : "translateY(10px)"};
        transition: all 400ms ease-in-out;
      }

      &:after {
        transform: ${(props) =>
          props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
        transition: all 400ms ease-in-out;
      }
    }
  }
`;

const Span = styled.div`
  position: relative;
  width: 75rem;
`;
const Nav = styled.div`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #01be96;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 99;
  }

  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 2rem;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #00ee9f;
    font-size: 20px;
    font-weight: 750;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: #2be249;
      transform: scale(0);
      transform-origin: right;
      transition: transform 400ms ease-in-out;
    }
    &:hover:before {
      transform: scale(1);
      transform-origin: left;
    }
    &:hover {
      opacity: 0.9;
    }
  }
`;
