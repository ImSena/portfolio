import React from "react";
import FooterStyle from "./style";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


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

                    <a className="email" href="mailto:brunosena@corecode.com.br" target="_blank" title="Ir para Outlook">
                        <MdEmail />

                        brunosena@corecode.com.br
                    </a>
                </div>

                <div className="bottom">
                    <div>
                        &copy; {year} all rights reserved.
                    </div>

                    <div className="social">
                        <a className="icon" target="_blank" href="https://www.linkedin.com/in/bruno-sena-a6120417b" title="Link para o linkedIn">
                            <FaLinkedinIn />
                        </a>

                        <a className="icon" target="_blank" href="mailto:brunosene1213@gmail.com" title="Link para o gmail">
                            <SiGmail />
                        </a>

                        <a className="icon" target="_blank" href="" title="Link para o WhatsApp">
                            <FaWhatsapp />
                        </a>

                        <a className="icon" target="_blank" href="https://www.instagram.com/brunox_o?igsh=MWEwM21kNWltZHhnMg==" title="Link para o instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer;