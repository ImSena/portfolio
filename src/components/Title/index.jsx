import React from "react";
import TitleStyle from "./style";

const Title = ({title, subtitle})=>{

    return(
        <TitleStyle>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </TitleStyle>
    );

}

export default Title;