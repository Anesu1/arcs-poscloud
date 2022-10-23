import React from "react";
import HeadingSmall from "../styled/HeadingSmall";
import Paragraph from "../styled/Paragraph";
import SectionWrapper from "../styled/SectionWrapper";


function Multi() {
  return (
    <SectionWrapper imageName="multi.png">
      
      <div className="item-inner">
        <HeadingSmall> Integrated POS</HeadingSmall>
        <Paragraph>
          Poscloud's’ family of integrated POS solutions helps merchants manage
          their business and drive revenue by providing personalized, meaningful
          customer experiences beyond just accepting payments.
        </Paragraph>
      </div>
      <div className="item-inner">
        <HeadingSmall>Inventory Management</HeadingSmall>
        <Paragraph>
          Optimize your order levels and stock holding with our Inventory
          System. Suggested orders via par levels or auto level assist will help
          keep perishables waste at a minimum
        </Paragraph>
      </div>
    </SectionWrapper>
  );
}

export default Multi;
