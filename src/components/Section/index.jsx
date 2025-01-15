import React from "react";
import SectionStyled from "./style";

const Section = ({children})=>{
    return(
        <SectionStyled>
            {children}
        </SectionStyled>
    )
}

export default Section;