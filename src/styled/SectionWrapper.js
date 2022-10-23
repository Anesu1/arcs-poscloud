import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Fade from "react-reveal/Fade";

const SecWrapper = styled.section`
  padding: 5%;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
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
      left: 11%;
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
      transform: translate(40%, -25px);
      width: 40%;
    }
    @media (min-width: 1200px) {
      width: 36%;
      transform: translate(40%, -73px);
    }
  }
  h2 {
    transform-origin: 0 0;
    transform: rotate(90deg);
    position: absolute;
    top: 5%;
    left: 80%;
    width: max-content;
    font-size: 50px;
    display:none;
    z-index: -1;
    @media (min-width: 768px) {
      font-size: 35px;
      left: 95%;
      display:block;
    }
    @media (min-width: 992px) {
      top: 15%;
      z-index: 4;
      font-size: 36px;
    }
    @media (min-width: 1200px) {
      left: 90%;
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
      transform: translateX(-30%);
    }
  }
  .item-inner {
    margin-bottom: 30px;
  }
`;

function SectionWrapper({ children, imageName }) {
  return (
    <SecWrapper>
      <img src={`./images/${imageName}`} alt="" />
      <Fade right cascade >
        <div className="inner">{children}</div>
      </Fade>
      <Heading><Fade  when={false} left cascade>Key Benefits & Features</Fade></Heading>
    </SecWrapper>
  );
}

export default SectionWrapper;
