import React from "react";
import HeadingSmall from "../styled/HeadingSmall";
import Paragraph from "../styled/Paragraph";
import SectionWrapper from "../styled/SectionWrapper";

function Scanning() {
  return (
    <SectionWrapper imageName="scanning.png">
      <div className="item-inner">
        <HeadingSmall>100% Scanning with barcode</HeadingSmall>
        <Paragraph>
          This feature will update the system, so you know how many products you
          have on your shelves. Of course, it will also be useful when the
          clients should pick the items and get them ready for shopping. When
          the items are scanned, they will be updated in the software.
        </Paragraph>
      </div>
      <div className="item-inner">
        <HeadingSmall>Keyboard Shortcuts</HeadingSmall>
        <Paragraph>
          Use the ARCS keyboard shortcuts to access user interface functions or
          complete tasks, using a single key or combination of keys quickly and
          efficiently
        </Paragraph>
      </div>
    </SectionWrapper>
  );
}

export default Scanning;
