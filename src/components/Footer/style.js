import styled from "styled-components";

const FooterStyle = styled.footer`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 1rem;
   width: 100%;
   padding: 2rem 0;

   a{
    cursor: pointer;
   }

   .container {
        width: 80%;
        max-width: 1200px;
   }

   .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 2rem 0;
        border-bottom: 1px solid ${(props) => props.theme.footer.color};
        
        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
        }
   }

   .work {
        font-size: 4rem;
        color: ${(props) => props.theme.footer.title};
        display: flex;
        flex-direction: column;
        
        @media (max-width: 1024px) {
            font-size: 3rem;
        }

        @media (max-width: 768px) {
            font-size: 2.5rem;
        }

        @media (max-width: 480px) {
            font-size: 2rem;
        }
   }

   .email {
        font-size: 1.5rem;
        padding: 1rem;
        display: flex;
        border: 1px solid ${(props) => props.theme.footer.color};
        color: ${(props) => props.theme.footer.title};
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-radius: 1rem;
        width: fit-content;

        @media (max-width: 768px) {
            font-size: 1.2rem;
            padding: 0.8rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
            padding: 0.6rem;
        }
   }

   .bottom {
        margin: 1rem 0;
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .social{
            display: flex;
            align-items: center;
            gap: 1rem;

            .icon{
                color: ${(props) => props.theme.footer.title};
            }
        }

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }
   }

   @media (max-width: 374px) {
        .bottom{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
   }
`;

export default FooterStyle;
