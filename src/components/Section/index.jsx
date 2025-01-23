import React, { forwardRef } from "react";
import SectionStyled from "./style";

const Section = forwardRef(({ children, id }, ref) => {
    return (
      <SectionStyled id={id} ref={ref}>
        {children}
      </SectionStyled>
    );
});

export default Section;