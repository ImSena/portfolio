import React from "react";
import FooterStyle from "./style";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <FooterStyle>
            <div className="container">


                <div className="top">
                    <div className="work">
                        <div>Let's</div>
                        <div>Work Together -</div>
                    </div>

                    <div className="email">
                        <PiMicrosoftOutlookLogoFill />

                        BrunoSena14@Outlook.com
                    </div>
                </div>

                <div className="bottom">
                    <div>
                        &copy; {year} all rights reserved.
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer;