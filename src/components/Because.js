import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";
import Fade from 'react-reveal/Fade';

const BcozWrapper = styled.section`
  padding:5%;
  @media(min-width:768px){
    padding:10% 15%;
  }
  .top{
    @media(min-width:768px){
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    img{
      width:100%;
      max-width:200px;
      margin:0 auto;
      display:block;

    }
  }
  .bottom{
    p{
      
      margin-bottom:20px;
    }
  }
  .img{
    width:100%;
    max-width:350px;
    margin:20px auto;
    display:block;
    @media(min-width:768px){
      max-width:100%;
      
    }
  }
`;

function Because() {
  return (
    <BcozWrapper>
      <div className="top">
        <Fade left>
        <Paragraph>
         
        Access to payment technologies should be fundamental right for any person in busuness, big or small. Our goal is to make this a reality. 
 <br /> <br /> 
This is made possible by a software that helps business owners drive more sales with applications that include POS features, inventory management, retail customer relationship management and more
 </Paragraph></Fade>
        <Fade right><img src="./images/logoblue.png" alt="" /></Fade>
        
      </div> 
        <Fade bottom>
          <img className="img" src="./images/support.png" alt="" />
        </Fade><Fade bottom>
      <div className="bottom">
     
        <Paragraph>In order to ensure a seamless transition, Poscloud provides hardware to each ARCS merchant to get them up and running in the shortest period of time. </Paragraph>
      </div></Fade>
    </BcozWrapper>
  );
}

export default Because;
