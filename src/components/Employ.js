/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import HeadingSmall from "../styled/HeadingSmall";
import Paragraph from "../styled/Paragraph";
import ReverseSectionWrapper from "../styled/ReverseSectionWrapper";

function Employ() {
  return (
    <ReverseSectionWrapper imageName="employ.png">
      <div className="item-inner">
        <HeadingSmall>Sales Report</HeadingSmall>
        <Paragraph>
          We help you know how much inventory you’re moving And how much money
          you’re making. In addition, we help you better understand which
          vendors supply your top sellers so you can order more from them
        </Paragraph>
      </div>
      <div className="item-inner">
        <HeadingSmall>Profitability Analysis</HeadingSmall>
        <Paragraph>
          Keep the overall financial health of your business top of mind and see
          which types of sales are driving your revenue. We help you see the
          cumulative value of your inventory by category, so you know what keeps
          your customers coming back.
        </Paragraph>
      </div>
    </ReverseSectionWrapper>
  );
}

export default Employ;
