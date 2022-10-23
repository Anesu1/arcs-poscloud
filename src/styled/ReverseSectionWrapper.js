import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Fade from "react-reveal/Fade";

const WrapperReverse = styled.section`
  padding: 5%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .inner {
      width: 45%;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-end;
    padding: 10% 5%;
    &:before {
      content: "";
      height: 60%;
      width: 130px;
      background: ${(props) => props.theme.color.blue};
      position: absolute;
      top: 25%;
      right: 11%;
    }
  }

  img {
    width: 100%;
    border-radius: 10px;
    @media (min-width: 768px) {
      border-radius: unset;
      width: 45%;
    }
    @media (min-width: 992px) {
      transform: translate(-40%, -25px);
      width: 40%;
    }
    @media (min-width: 1200px) {
      width: 36%;
      transform: translate(-40%, -73px);
    }
  }
  h2 {
    transform-origin: 0 0;
    transform: rotate(90deg);
    position: absolute;
    top: 5%;
    left: 30%;
    width: max-content;
    font-size: 50px;
    display:none;
    z-index: -1;
    @media (min-width: 768px) {
      font-size: 35px;
      display:block
      left: 5%;
      top: 100%;
      transform: rotate(-90deg);
    }
    @media (min-width: 992px) {
      top: 60%;
      z-index: 4;
      font-size: 36px;
    }
    @media (min-width: 1200px) {
      left: 10%;
    }
  }
  .inner {
    @media (min-width: 992px) {
      background: #ffffff;
      padding: 6% 8% 0;
      z-index: 2;
    }
    @media (min-width: 1200px) {
      max-width: 400px;
      padding: 8% 6% 10% 6%;
      transform: translateX(30%);
    }
  }
  .item-inner {
    margin-bottom: 30px;
  }
`;

function ReverseSectionWrapper({ imageName, children }) {
  return (
    <WrapperReverse>
      <Fade  left cascade>
        <div className="inner">{children}</div>
      </Fade>
      <img src={`./images/${imageName}`} alt="" />
     
      <Heading><Fade left cascade>Key Benefits & Features</Fade></Heading>
    </WrapperReverse>
  );
}

export default ReverseSectionWrapper;
