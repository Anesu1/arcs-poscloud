import React from "react";
import HeadingSmall from "../styled/HeadingSmall";
import Paragraph from "../styled/Paragraph";
import SectionWrapper from "../styled/SectionWrapper";

function Sales() {
  return (
    <SectionWrapper imageName="sales.png">
      <div className="item-inner">
        <HeadingSmall>Multi-currency</HeadingSmall>
        <Paragraph>
          Poscloud makes it easy and secure to make payments quickly. Reduce
          expensive & unnecessary currency flips and foreign exchange fees
        </Paragraph>
      </div>
      <div className="item-inner">
        <HeadingSmall>Exchange Rate Management</HeadingSmall>
        <Paragraph>
          The platform comes with currency management, real-time currency
          exchange and payments as well as risk management.
        </Paragraph>
      </div>
    </SectionWrapper>
  );
}

export default Sales;
