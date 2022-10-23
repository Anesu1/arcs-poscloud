import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const PartnerWrappper = styled.section`
  padding-top: 5%;
  height: 100vh;
  @media (min-width: 768px) {
    height: 660px;
  }
  @media (min-width: 1200px) {
    height: 100vh;
  }
  h2 {
    color: ${(props) => props.theme.color.grey};
    font-family: ${(props) => props.theme.fam.cera};
    font-size: 35px;
    text-align: center;
  }
  .imgs {
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    max-width: 350px;
    margin: 0 auto;
    img {
      width: 45%;
    }
  }
  .bottom {
    height: 70%;
    width: 100%;
    background: url("./images/partners.png");
    background-size: cover;
  }
`;

function Partners() {
  return (
    <PartnerWrappper>
      <h2><Fade left cascade>Our Partners</Fade></h2>

      <div className="imgs">
        <Fade left>
          {" "}
          <img src="./images/nmb.png" alt="" />
        </Fade>
        <Fade right>
          <img src="./images/fbc.png" alt="" />
        </Fade>
      </div>
      <div className="bottom"></div>
    </PartnerWrappper>
  );
}

export default Partners;
